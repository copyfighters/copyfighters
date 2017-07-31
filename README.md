# Campaign website

## Development

### Django setup
1. Set up a virtualenv once using i.e. `virtualenv -p $(which python3) .venv --prompt "(venv) "` or `python3 -m venv ./` under Windows.
2. Enter your virtualenv using `source .venv/bin/activate` or `./Scripts/activate.bat` under Windows or use something like virtualenvwrapper.
3. `pip install -r requirements.txt`
4. `./manage.py runserver`

After an update, you might need to redo step 3 and run `./manage.py migrate`.

### Front-end tools

#### [npm](https://www.npmjs.com/)
* Use `npm install` to install front-end dependencies.

#### [gulp](http://gulpjs.com/)
* `gulp build` runs the `copy-fonts`, `css`, `js` tasks.
* `gulp copy-fonts` copies fonts to the static directory.
* `gulp css` converts SASS to CSS including concatenation and minifaction. `gulp css:watch` does it automatically on every change.
* `gulp js` runs the `js-all` and `js-ie` tasks.
* `gulp js-all` concatenates and minifies all JS files. `gulp js:watch` does it automatically on every change.
* `gulp js-ie` concatenates and minifies all polyfill JS files for Internet Explorer.
* `gulp sass-lint` checks all SASS files for errors.
* `gulp js-lint` checks all JS files for errors.
