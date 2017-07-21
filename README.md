# Campaign website

## Development server
When you have Python installed you can run a development server using `python3 -m http.server`. If you have no Python 2 or just Python 2 installed, `python` instead of `python3` might work. Open `http://localhost:8000/` in your browser.

## Development tools
* npm
* gulp
  * Use `gulp build` or `gulp sass` to convert SASS to CSS.
  * Use `gulp sass:watch` to do it automatically on every change.
  * Use `gulp copy-bootstrap` to copy Bootstrap files to the `static` folder.
