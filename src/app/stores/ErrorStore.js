'use strict';

import appDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import constants from '../constants/constants.js';
import Immutable from 'immutable';

class ErrorStore extends EventEmitter {
    constructor() {
        super();
        let _this = this;
        _this._errorNames = [];
    }
    getErrorNames() {
        return this._errorNames;
    }
    showErrorMessage(account) {
        this._errorNames.push(account);
        alert(`Cannot find user: ${account}`);
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

let _ErrorStore = new ErrorStore();

_ErrorStore.dispatchToken = appDispatcher.register((payload) => {
    let action = payload.action;
    switch (action.actionType) {
        case constants.GITHUB_GET_USER_FAIL:
            _ErrorStore.showErrorMessage(action.data);
            break;
        default:
            return true;
    }
    _ErrorStore.emitChange();
    return true;
});

export default _ErrorStore;
