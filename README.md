# Campaign website

## Development Django setup
1. Set up a virtualenv using i.e. `virtualenv -p $(which python3) .venv --prompt "(venv) "` or `python3 -m venv ./` under Windows
2. Enter your virtualenv using `source .venv/bin/activate` or `./Scripts/activate.bat` under Windows or use something like virtualenvwrapper
3. `pip install -r requirements.txt`
4. `./manage.py runserver`

## Development front-end tools
* npm
  * Use `npm install` to install front-end dependencies.
* gulp
  * Use `gulp build` or `gulp sass` to convert SASS to CSS.
  * Use `gulp sass:watch` to do it automatically on every change.
  * Use `gulp copy-bootstrap` to copy Bootstrap files to the `static` folder.
