'use strict'

function message_check(message) {
  if (!message.includes('Failed prop type')) return
  throw new Error(message)
}

function for_sinon(sandbox) {
  const stub = (console.error.restore) ? console.error : sandbox.stub(console, 'error')

  stub.callsFake(message_check)
}

function for_jest(jest) {
  jest.spyOn(console, 'error').mockImplementation(message_check)
}

exports.for_sinon = for_sinon
exports.for_jest = for_jest
