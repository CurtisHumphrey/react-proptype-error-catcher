# react-proptype-error-catcher
Causes React PropType errors to fail the test

### Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save-dev react-proptype-error-catcher

### Requirements

* [React](https://github.com/facebook/react)
* Testing with [sinon](https://github.com/sinonjs/sinon)
* Testing with [enzyme](http://airbnb.io/enzyme/)

### Usage

``` js
import React from 'react'
import {
  shallow,
} from 'enzyme'

import Example from './Example'
import proptype_error_catcher from 'react-proptype-error-catcher'

describe('<Example />', () => {
  let sandbox
  let props

  beforeEach(() => {
    sandbox = sinon.sandbox.create()

    proptype_error_catcher(sandbox)

    props = {
      show: true,
    }
  })

  afterEach(() => {
    sandbox.restore()
  })
  it('with normal props it should render without errors', () => {
    const wrapper = shallow(<Example {...props} />)
    expect(wrapper).to.exist
  })
})
```

### API

* Takes just one argument: a sinon.sandbox
