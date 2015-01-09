'use strict';

var reflux = require('reflux');

var appActions = reflux.createActions([
	'addUser',
	'deleteUser'
]);

module.exports = appActions;