#!/bin/sh

IP="$1"
SSH_KEY="$2"

ssh -t root@${IP} "sed -i -e 's#${SSH_KEY}##g' ~/.ssh/authorized_keys && exit;bash -l"