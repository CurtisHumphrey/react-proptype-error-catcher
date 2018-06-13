'use strict'

function proptype_error_catcher (sandbox) {
  const stub = (console.error.restore) ? console.error : sandbox.stub(console, 'error')

  sandbox.stub(console, 'error').callsFake(function (message) {
    if (!message.includes('Failed prop type')) return
    throw new Error(message)
  })
}

module.exports = proptype_error_catcher
