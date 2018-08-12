// This file isn't transpiled, so must use CommonJS and ES5

// Register Babel to transpile befor out tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
