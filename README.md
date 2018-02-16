# Copyfighters campaign website

[ ![Codeship Status for copyfighters/copyfighters](https://app.codeship.com/projects/c0672f80-59e8-0135-01d0-6e9c47ac365b/status?branch=master)](https://app.codeship.com/projects/237039)

## Development

### Setup
1. Make sure you have Python, its package manager pip and the package virtualenv installed. You can install the latter with `pip install virtualenv`.
2. Set up a virtual environment inside this folder using `virtualenv -p $(which python3) .venv --prompt "(venv) "` or `virtualenv ./` under Windows.
3. Enter your virtual environment using `source .venv/bin/activate` or `./Scripts/activate.bat` under Windows, or use something like virtualenvwrapper.
4. Use `pip install -r requirements.txt` to install all back-end dependencies.
5. Use `npm install` to install front-end dependencies.

### Updates
* After an update to the back-end, you need to redo setup steps 3 and 4 and run `./manage.py migrate`.
* After an update to the front-end, you need to redo setup step 5 and run `gulp build`.

### Getting ready
1. Make sure you have entered your virtual environment (see step 3 of setup).
2. Run the local server `./manage.py runserver`.

### Front-end tools
* [npm](https://www.npmjs.com/)
* [gulp](http://gulpjs.com/)

#### gulp
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
