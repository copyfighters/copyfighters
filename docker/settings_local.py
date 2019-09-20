# coding: utf-8

import os
import raven

DEBUG = False
ALLOWED_HOSTS = ['*']
STATIC_ROOT = '/var/www/static'
STATIC_URL = '/static/'

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
        'LOCATION': '127.0.0.1:11211',
    }
}

EMAIL_HOST = os.environ.get('EMAIL_HOST', 'localhost')
EMAIL_PORT = 25

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'HOST': os.environ.get('DB_HOST', 'localhost'),
        'NAME': os.environ.get('DB_NAME', 'copyfighters'),
        'USER': os.environ.get('DB_USER', 'copyfighters'),
        'PASSWORD': os.environ.get('DB_PASSWORD'),
    },
}

STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.ManifestStaticFilesStorage'

RAVEN_CONFIG = {
    'dsn': os.environ.get('RAVEN_DSN'),
}
