# react-proptype-error-catcher
Causes React PropType errors to fail the test

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save-dev react-proptype-error-catcher
    or
    $ yarn add -D react-proptype-error-catcher

## Requirements

* [React](https://github.com/facebook/react)
* [jest](https://github.com/facebook/jest)
  
## Usage

### Enable always
in jest config (jest.config.js) add to `setupFilesAfterEnv` like:

```js
setupFilesAfterEnv: [
  'react-proptype-error-catcher/register',
],
```

Or if using `setupTests.js` like for [create-react-app](https://create-react-app.dev/docs/running-tests#srcsetuptestsjs) (CRA) then add like
```js
import 'react-proptype-error-catcher/register';
```

### Per test setup
If wanted to only turn on per test use this pattern:

### with jest and react-testing-library
``` js
import proptype_error_catcher from 'react-proptype-error-catcher'

proptype_error_catcher()

it('with normal props it should render without errors', () => {
  // test logic
})
```
