'use strict';

import appDispatcher from '../dispatcher/dispatcher.js';
import constants from '../constants/constants.js';

var appActions = {
	addUser(user) {
		appDispatcher.handleViewAction({
			actionType: constants.APP_ADD_USER,
			data: user
		});
	},
	deleteUser(index) {
		appDispatcher.handleViewAction({
			actionType: constants.APP_DELETE_USER,
			data: index
		});
	}
};

export default appActions;
