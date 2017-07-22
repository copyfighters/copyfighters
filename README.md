# Campaign website

## Development Django setup
* Set up a virtualenv using i.e. `virtualenv -p $(which python3) .venv --prompt "(venv) "`
* Enter your virtualenv using `source .venv/bin/activate` or use something like virtualenvwrapper
* `pip install -r requirements.txt`
* `./manage.py migrate`
* `./manage.py runserver`

## Development tools
* npm
  * Use `npm install` to install dependencies.
* gulp
  * Use `gulp build` to convert SASS to CSS including autoprefixing and
  minimising.
  * Use `gulp build:watch` to do it automatically on every change.
