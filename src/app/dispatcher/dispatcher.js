'use strict';

import Flux from 'flux';

var Dispatcher = Flux.Dispatcher,
    appDispatcher = new Dispatcher();

appDispatcher.handleViewAction = (action) => {
    appDispatcher.dispatch({
    	source: 'VIEW_ACTION',
    	action: action
    });
};

appDispatcher.handleAPIAction = (action) => {
    appDispatcher.dispatch({
    	source: 'API_ACTION',
    	action: action
    });
};

module.exports = appDispatcher;
