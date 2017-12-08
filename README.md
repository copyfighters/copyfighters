# Copyfighters campaign website

[ ![Codeship Status for copyfighters/copyfighters](https://app.codeship.com/projects/c0672f80-59e8-0135-01d0-6e9c47ac365b/status?branch=master)](https://app.codeship.com/projects/237039)

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
##### General tasks
* `gulp build` runs the `copy-fonts`, `css`, `js` tasks.
* `gulp watch` runs the `css` and `js-all` tasks on every file change.
##### Specific task
* `gulp copy-fonts` copies fonts to the static directory.
* `gulp css` converts SASS to CSS including concatenation and minifaction.
* `gulp js` runs the `js-all` and `js-ie` tasks.
* `gulp js-all` concatenates and minifies all JS files.
* `gulp js-ie` concatenates and minifies all polyfill JS files for Internet Explorer.
* `gulp js-lint` checks all JS files for errors.
* `gulp sass-lint` checks all SASS files for errors.
