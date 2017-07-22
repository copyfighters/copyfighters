# Campaign website

## Development Django setup
* Set up a virtualenv using i.e. `virtualenv -p $(which python3) .venv --prompt "(venv) "`
* Enter your virtualenv using `source .venv/bin/activate` or use something like virtualenvwrapper
* `pip install -r requirements.txt`
* `./manage.py runserver`

## Development tools
* npm
* gulp
  * Use `gulp build` or `gulp sass` to convert SASS to CSS.
  * Use `gulp sass:watch` to do it automatically on every change.
  * Use `gulp copy-bootstrap` to copy Bootstrap files to the `static` folder.
