# React Starter Kit
[![Build Status][build-badge]][build] [![Dependencies Status][dependencies-badge]][dependencies] [![Styled with prettier][prettier-badge]][prettier]

[build-badge]: https://img.shields.io/travis/xiaofan2406/react-starter-kit.svg?style=flat-square
[build]: https://travis-ci.org/xiaofan2406/react-starter-kit
[dependencies-badge]: https://img.shields.io/david/xiaofan2406/react-starter-kit.svg?style=flat-square
[dependencies]: https://david-dm.org/xiaofan2406/react-starter-kit
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier

A simple boilerplate for starting new React projects.


## Get Started
- Install dependencies
  ```
  yarn
  ```

- Run dev server
  ```
  yarn dev
  ```

- Build for production
  ```
  yarn build
  ```

- Test production build
  ```
  yarn prod
  ```


## Details

###### [JSS](https://github.com/cssinjs/jss)
  - [Read this](https://github.com/oliviertassinari/a-journey-toward-better-style)
  - Using together with [`react-jss`](https://github.com/cssinjs/react-jss)
  - Using [classnames](https://github.com/JedWatson/classnames) helper to make conditional class names cleaner

###### CSS
  - Using [`ExtractTextPlugin`](https://github.com/webpack/extract-text-webpack-plugin) to combine all css into one file in production
  - No PostCSS, SASS or CSS Module setup
  - Includes a Semantic UI [`reset.css`](https://github.com/Semantic-Org/Semantic-UI/blob/master/dist/components/reset.css)

###### Progressive Web App
  - Based on [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app)

###### [React Router v4](https://reacttraining.com/react-router)

###### Redux
  - See [redux branch](https://github.com/xiaofan2406/react-starter-kit/tree/redux)

###### Mobx
  - See [mobx branch](https://github.com/xiaofan2406/react-starter-kit/tree/mobx)

###### Electron
  - See [electron branch](https://github.com/xiaofan2406/react-starter-kit/tree/electron)


## Development

###### Hot Module Replacement
  - using [`react-hot-loader`](https://github.com/gaearon/react-hot-loader/tree/next)
  - JSS, CSS and components are hot reloading

###### ESLint
  - based on [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)

###### Performance
  - used [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) as a baseline


## Folders
Path                | Import alias | Description
------------------- | ------------ | ----------------------------------------------------
**config/**         |              | Project tooling configuration files
**src/**            | `src`        | App source files directory, processed by webpack
src/**assets/**     | `assets`     | Common static assets folder
src/**components/** | `components` | React components folder
src/**hocs/**       | `hocs`       | Higher-order components folder
src/**router/**     | `router`     | React Router setup and route-level components folder
src/**styles/**     | `styles`     | Global CSS and JSS folder
src/**utils/**      | `utils`      | JavaScript helper functions folder
src/**widgets/**    | `widgets`    | Small shared React components folder
