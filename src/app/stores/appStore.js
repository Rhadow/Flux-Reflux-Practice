'use strict';

import appDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import constants from '../constants/constants.js';
import Immutable from 'immutable';

class AppStore extends EventEmitter {

    constructor() {
        super();
        let _this = this;
        _this._userList = Immutable.fromJS(
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
        );
    }

    getUserList() {
        return this._userList;
    }

    addUser(user) {
        this._userList = this._userList.push(Immutable.fromJS(user));
    }

    deleteUser(index) {
        this._userList = this._userList.splice(index, 1);
    }

    emitChange() {
        this.emit('change');
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
}

let _AppStore = new AppStore();

_AppStore.dispatchToken = appDispatcher.register((payload) => {
    let action = payload.action;
    switch (action.actionType) {
        case constants.APP_ADD_USER:
            _AppStore.addUser(action.data);
            break;
        case constants.APP_DELETE_USER:
            _AppStore.deleteUser(action.data);
            break;
        default:
            return true;
    }
    _AppStore.emitChange();
    return true;
});

export default _AppStore;
