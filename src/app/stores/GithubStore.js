'use strict';

import appDispatcher from '../dispatcher/dispatcher.js';
import events from 'events';
import constants from '../constants/constants.js';
import _ from 'underscore';
import Immutable from 'immutable';

var eventEmitter = events.EventEmitter,
    GithubStore;

GithubStore = _.extend({}, eventEmitter.prototype, {
    _currentInfo: Immutable.fromJS({}),
    getCurrentInfo() {
        return this._currentInfo;
    },
    saveInfo(info) {
        let isIdentical = Immutable.is(this._currentInfo, Immutable.fromJS(info));
        if(!isIdentical){
            this._currentInfo = Immutable.fromJS(info);
        }
    },
    showErrorMessage(account) {
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
        case constants.GITHUB_GET_USER_SUCCESS:
            GithubStore.saveInfo(action.data);
            break;
        case constants.GITHUB_GET_USER_FAIL:
            GithubStore.showErrorMessage(action.data);
            break;
        default:
            return true;
    }
    GithubStore.emitChange();
    return true;
});

export default GithubStore;
