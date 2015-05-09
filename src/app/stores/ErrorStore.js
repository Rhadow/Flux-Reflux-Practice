'use strict';

import appDispatcher from '../dispatcher/dispatcher.js';
import events from 'events';
import constants from '../constants/constants.js';
import _ from 'underscore';
import Immutable from 'immutable';

var eventEmitter = events.EventEmitter,
    ErrorStore;

ErrorStore = _.extend({}, eventEmitter.prototype, {
    _errorNames: [],
    getErrorNames() {
        return this._errorNames;
    },
    showErrorMessage(account) {
        this._errorNames.push(account);
        alert(`Cannot find user: ${account}`);
    },
    emitChange() {
        this.emit('change');
    },
    addChangeListener(callback) {
        this.on('change', callback);
    },
    removeChangeListener(callback) {
        this.removeListener('change', callback);
    },
});

appDispatcher.register((payload) => {
    let action = payload.action;
    switch (action.actionType) {
        case constants.GITHUB_GET_USER_FAIL:
            ErrorStore.showErrorMessage(action.data);
            break;
        default:
            return true;
    }
    ErrorStore.emitChange();
    return true;
});

export default ErrorStore;
