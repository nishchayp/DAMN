#!/bin/sh

IP="$1"
SSH_KEY="$2"

ssh -t root@${IP} "echo '${SSH_KEY}' >> ~/.ssh/authorized_keys && exit;bash -l"