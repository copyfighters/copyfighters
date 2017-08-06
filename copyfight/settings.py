import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = '@mfoxuye_b5kd!y!la462#-$6mjjgm7+b=whd8w4p4hafau@u4'
DEBUG = True
ALLOWED_HOSTS = []

INSTALLED_APPS = [
	'django.contrib.admin',
	'django.contrib.auth',
	'django.contrib.contenttypes',
	'django.contrib.sessions',
	'django.contrib.messages',
	'django.contrib.staticfiles',
	'campaign',
]

MIDDLEWARE = [
	'django.middleware.security.SecurityMiddleware',
	'django.contrib.sessions.middleware.SessionMiddleware',
	'django.middleware.locale.LocaleMiddleware',
	'django.middleware.common.CommonMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.contrib.auth.middleware.AuthenticationMiddleware',
	'django.contrib.messages.middleware.MessageMiddleware',
	'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'copyfight.urls'

TEMPLATES = [
	{
		'BACKEND': 'django.template.backends.django.DjangoTemplates',
		'DIRS': ['templates/'],
		'APP_DIRS': True,
		'OPTIONS': {
			'context_processors': [
				'django.template.context_processors.debug',
				'django.template.context_processors.request',
				'django.contrib.auth.context_processors.auth',
				'django.contrib.messages.context_processors.messages',
			],
		},
	},
]

WSGI_APPLICATION = 'copyfight.wsgi.application'

DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.sqlite3',
		'NAME': os.path.join(BASE_DIR, 'development.db'),
	}
}


AUTH_PASSWORD_VALIDATORS = [
	{
		'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
	},
	{
		'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
	},
]


LANGUAGE_CODE = 'en'
LANGUAGES = (
	('sq', 'Albanian'),
	('hr', 'Croatian'),
	('en', 'English'),
	('fi', 'Finnish'),
	('fr', 'French'),
	('de', 'German'),
	('el', 'Greek'),
	('is', 'Icelandic'),
	('it', 'Italian'),
	('lb', 'Luxembourgish'),
	('pt', 'Portuguese'),
	('ro', 'Romanian'),
	('sv', 'Swedish'),
)


LOCALE_PATHS = [
	os.path.join(BASE_DIR, "locale"),
]

TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True

STATIC_URL = '/static/'
STATICFILES_DIRS = [
	os.path.join(BASE_DIR, "static"),
]

if not DEBUG:
	STATICFILES_STORAGE = 'django.contrib.staticfiles.storage.ManifestStaticFilesStorage'

COUNTRIES_ONLY = ['BE', 'BG', 'CZ', 'DK', 'DE', 'EE', 'IE', 'GR', 'ES', 'FR',
	'HR', 'IT', 'CY', 'LV', 'LT', 'LU', 'HU', 'MT', 'NL', 'AT', 'PL', 'PT',
	'RO', 'SI', 'SK', 'FI', 'SE', 'GB']

# Use the file local_settings.py to overwrite the defaults with your own settings
try:
	from copyfight.settings_local import *
except ImportError:
	pass
