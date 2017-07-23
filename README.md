# Campaign website

## Development

### Django setup
1. Set up a virtualenv once using i.e. `virtualenv -p $(which python3) .venv --prompt "(venv) "` or `python3 -m venv ./` under Windows.
2. Enter your virtualenv using `source .venv/bin/activate` or `./Scripts/activate.bat` under Windows or use something like virtualenvwrapper.
3. `pip install -r requirements.txt`
4. `./manage.py runserver`

After an update, you might need to redo step 3 and run `./manage.py migrate`.

### Front-end tools
* [npm](https://www.npmjs.com/)
  * Use `npm install` to install front-end dependencies.
* [gulp](http://gulpjs.com/)
  * `gulp build` includes both `copy-fonts` and `css` tasks.
  * Use `gulp copy-fonts` to copy the fonts to the static directory.
  * Use `gulp css` to convert SASS to CSS including minifaction.
  Use `gulp css:watch` to do it automatically on every change.
