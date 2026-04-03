#!/bin/bash
set -euo pipefail

MODE="${1:-}"
PRE_STAMP=/var/lib/factory-firstboot.pre.done
DONE_STAMP=/var/lib/factory-firstboot.done
LOG=/var/log/factory-firstboot.log
HOSTNAME_PREFIX="pve"
HOSTNAME_DOMAIN="localdomain"
MANAGEMENT_IFACE="vmbr0"

exec >>"$LOG" 2>&1

log() {
    echo "[$(date -Is)] $*"
}

get_management_ip() {
    awk -v iface="$MANAGEMENT_IFACE" '
        $1 == "iface" && $2 == iface { in_iface=1; next }
        in_iface && $1 == "iface" { exit }
        in_iface && $1 == "address" {
            gsub(/\/.*/, "", $2)
            print $2
            exit
        }
    ' /etc/network/interfaces
}

build_short_hostname() {
    local mid
    mid="$(tr -d '\n' </etc/machine-id)"
    echo "${HOSTNAME_PREFIX}-${mid:0:8}"
}

write_hosts() {
    local ip="$1"
    local short="$2"
    local fqdn="${short}.${HOSTNAME_DOMAIN}"

    cat >/etc/hosts <<EOF
127.0.0.1 localhost.localdomain localhost
$ip $fqdn $short

# The following lines are desirable for IPv6 capable hosts
::1 ip6-localhost ip6-loopback
fe00::0 ip6-localnet
ff00::0 ip6-mcastprefix
ff02::1 ip6-allnodes
ff02::2 ip6-allrouters
EOF
}

pre_identity() {
    if [ -f "$PRE_STAMP" ]; then
        log "pre stage already done"
        exit 0
    fi

    log "pre stage start"

    rm -f /var/lib/dbus/machine-id || true
    : >/etc/machine-id
    systemd-machine-id-setup

    local short fqdn mgmt_ip
    short="$(build_short_hostname)"
    fqdn="${short}.${HOSTNAME_DOMAIN}"
    mgmt_ip="$(get_management_ip)"

    if [ -z "$mgmt_ip" ]; then
        log "failed to read static management IP from /etc/network/interfaces for ${MANAGEMENT_IFACE}"
        exit 1
    fi

    echo "$short" >/etc/hostname
    hostname "$short"
    write_hosts "$mgmt_ip" "$short"

    rm -f /etc/ssh/ssh_host_*
    ssh-keygen -A

    install -D -m 0644 /dev/null "$PRE_STAMP"
    date -Is >"$PRE_STAMP"
    log "pre stage done: hostname=$short fqdn=$fqdn ip=$mgmt_ip"
}

post_firstboot() {
    if [ -f "$DONE_STAMP" ]; then
        log "post stage already done"
        exit 0
    fi

    log "post stage start"

    local attempt
    for attempt in $(seq 1 30); do
        if pvecm updatecerts --force; then
            break
        fi
        log "pvecm updatecerts failed on attempt ${attempt}/30, wait 2s for pve-cluster"
        sleep 2
    done

    if [ "$attempt" -eq 30 ]; then
        log "pvecm updatecerts failed after 30 attempts"
        exit 1
    fi

    rm -f /root/.bash_history
    rm -f /home/*/.bash_history || true

    install -D -m 0644 /dev/null "$DONE_STAMP"
    date -Is >"$DONE_STAMP"
    log "post stage done"
}

case "$MODE" in
    pre)
        pre_identity
        ;;
    post)
        post_firstboot
        ;;
    *)
        echo "usage: $0 {pre|post}" >&2
        exit 2
        ;;
esac
