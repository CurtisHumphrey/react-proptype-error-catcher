'use strict'

function message_check(...message) {
  if (!message[0].includes('Warning: Failed')) return
  throw new Error(message)
}

function react_proptype_error_catcher() {
  jest.spyOn(console, 'error').mockImplementation(message_check)
}

module.exports = react_proptype_error_catcher
