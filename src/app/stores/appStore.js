'use strict';

import appDispatcher from '../dispatcher/dispatcher.js';
import events from 'events';
import constants from '../constants/constants.js';
import _ from 'underscore';
import Immutable from 'immutable';

var eventEmitter = events.EventEmitter,
    appStore;

appStore = _.extend({}, eventEmitter.prototype, {
    _userList: Immutable.fromJS(
        [{
            name: 'Howard',
            age: 27
        }, {
            name: 'Shaun',
            age: 22
        }, {
            name: 'Amy',
            age: 26
        }]
    ),
    getUserList() {
        return this._userList;
    },
    addUser(user) {
        this._userList = this._userList.push(Immutable.fromJS(user));
    },
    deleteUser(index) {
        this._userList = this._userList.splice(index, 1);
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
    var action = payload.action;
    switch (action.actionType) {
        case constants.APP_ADD_USER:
            appStore.addUser(action.data);
            break;
        case constants.APP_DELETE_USER:
            appStore.deleteUser(action.data);
            break;
        default:
            return true;
    }
    appStore.emitChange();
    return true;
});

export default appStore;
