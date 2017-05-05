'use strict';

function proptype_error_catcher (sandbox) {
  sandbox.stub(console, 'error').callsFake(function (message) {
    if (!message.includes('Failed prop type')) return;
    throw new Error(message);
  });
}

module.exports = proptype_error_catcher;
