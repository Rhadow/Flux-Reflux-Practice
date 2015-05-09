'use strict';

import $ from 'jquery';
import appDispatcher from '../dispatcher/dispatcher.js';
import constants from '../constants/constants.js';

var apiActions = {
    getGithubInfo(account) {
        let url = `https://api.github.com/users/${account}`;
        $.ajax({
            url: url,
            success: (data) => {
                appDispatcher.handleAPIAction({
                    actionType: constants.GITHUB_GET_USER_SUCCESS,
                    data: data
                });
            },
            error: (err) => {
                appDispatcher.handleAPIAction({
                    actionType: constants.GITHUB_GET_USER_FAIL,
                    data: account
                });
            },
            dataType: 'json'
        });
    }
};

export default apiActions;
