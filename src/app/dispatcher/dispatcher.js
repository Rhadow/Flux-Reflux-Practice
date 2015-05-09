'use strict';

import Flux from 'flux';

var Dispatcher = Flux.Dispatcher,
    appDispatcher = new Dispatcher();

appDispatcher.handleViewAction = function(action) {
    this.dispatch({
    	actionType: 'VIEW_ACTION',
    	action: action
    });
};

appDispatcher.handleAPIAction = function(action) {
    this.dispatch({
    	actionType: 'API_ACTION',
    	action: action
    });
};

module.exports = appDispatcher;
