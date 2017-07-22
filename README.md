# Campaign website

## Development

### Django setup
1. Set up a virtualenv once using i.e. `virtualenv -p $(which python3) .venv --prompt "(venv) "` or `python3 -m venv ./` under Windows
2. Enter your virtualenv using `source .venv/bin/activate` or `./Scripts/activate.bat` under Windows or use something like virtualenvwrapper
3. `pip install -r requirements.txt`
4. `./manage.py runserver`

### Front-end tools
* npm
  * Use `npm install` to install front-end dependencies.
* gulp
  * Use `gulp build` to convert SASS to CSS including autoprefixing and
  minimising.
  * Use `gulp build:watch` to do it automatically on every change.

Note: Under Windows use elevated command prompt (Right click on CMD -> Run as Administrator)