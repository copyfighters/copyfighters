#!/usr/bin/env bash
memcached -u memcache &
nginx
./manage.py migrate
/usr/local/bin/gunicorn --preload -w 2 -k gthread -b unix:/run/gunicorn.sock copyfight.wsgi
