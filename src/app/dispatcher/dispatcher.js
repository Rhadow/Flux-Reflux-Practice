'use strict';

var Dispatcher = require('flux').Dispatcher;
var appDispatcher = new Dispatcher();

appDispatcher.handleViewAction = function(action) {
    this.dispatch({
    	actionType: 'VIEW_ACTION',
    	action: action
    });
};

module.exports = appDispatcher;
