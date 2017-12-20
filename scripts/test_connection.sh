#!/bin/sh

IP="$1"

ssh -o BatchMode=yes -o ConnectTimeout=5 root@${IP} echo ok 2>&1
