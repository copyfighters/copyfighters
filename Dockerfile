FROM nikolaik/python-nodejs:python3.7-nodejs10
LABEL maintainer="lukas@fnordserver.eu"

ENV PYTHONUNBUFFERED 1
WORKDIR /code

COPY . /code/
COPY docker/settings_local.py copyfight/
COPY docker/nginx.conf /etc/nginx/sites-enabled/default

RUN apt-get update && apt-get install -y nginx-light memcached
RUN pip install -r requirements.txt
RUN npm install
RUN nodejs node_modules/gulp/bin/gulp.js build
RUN ./manage.py collectstatic --noinput

CMD ["docker/run.sh"]
