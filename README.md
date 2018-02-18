# dapper-ui
A collection of styled components for the discerning react developer.

## Development

### Getting started

* Clone the repo and run ```yarn install```
* Run ```lerna bootstrap```
* Run ```yarn run storybook``` and open localhost:6006 in your browser
* You should now be able to tweak and play with the components in real
  time

### Package system

This repository uses [lerna.js](https://lernajs.io/). Each part of
dapper-ui is individually importable as a seperate npm package.
Currently there are four individual packages available.

* dapper-ui-grid - A flexbox based responsive grid system.
* dapper-ui-spacing - For all your padding and margin needs, helps to
  define a common design and dev language.
* dapper-ui-tools - A collection of small helper functions mostly useful
  internally but might be of use outside this project. Allows you to
  define media queries.
* dapper-ui-theme-provider - A basic theme provider. This is provide
  some quick defaults for getting up and running but you may specify or
  overwrite this with your own settings.

