'use strict';

import appDispatcher from '../dispatcher/dispatcher.js';
import constants from '../constants/constants.js';

var appActions = {
	addUser(user) {
		appDispatcher.handleViewAction({
			actionType: constants.ADD_USER,
			data: user
		});
	},
	deleteUser(index) {
		appDispatcher.handleViewAction({
			actionType: constants.DELETE_USER,
			data: index
		});
	}
};

export default appActions;
