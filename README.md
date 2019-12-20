# react-proptype-error-catcher
Causes React PropType errors to fail the test

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save-dev react-proptype-error-catcher
    or
    $ yarn add -D react-proptype-error-catcher

## Requirements

* [React](https://github.com/facebook/react)

If using `import { for_sinon as proptype_error_catcher } from 'react-proptype-error-catcher'`
* [sinon](https://github.com/sinonjs/sinon)

If using `import { for_jest as proptype_error_catcher } from 'react-proptype-error-catcher'`
* [jest](https://github.com/facebook/jest)

## Usage

### with sinon and enzyme
``` js
import React from 'react'
import { shallow } from 'enzyme'

import Example from './Example'
import { for_sinon as proptype_error_catcher } from 'react-proptype-error-catcher'

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

### with jest and react-testing-library
``` js
import React from 'react'
import { render } from '@testing-library/react'

import Example from './Example'
import { for_jest as proptype_error_catcher } from 'react-proptype-error-catcher'

proptype_error_catcher(jest)

let props
beforeEach(() => {
  props = {
    show: true,
  }
})

it('with normal props it should render without errors', () => {
  const { container } = render(<Example {...props} />)
  expect(container.firstChild).toBeInTheDocument()
})
```

## API

### sinon version
* Takes just one argument: a sinon.sandbox

### jest version
* Takes just one argument: jest
