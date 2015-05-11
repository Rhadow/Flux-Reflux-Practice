'use strict';

import appDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import constants from '../constants/constants.js';
import Immutable from 'immutable';

class GithubStore extends EventEmitter {

    constructor() {
        super();
        let _this = this;
        _this._currentInfo = Immutable.fromJS({});
    }

    getCurrentInfo() {
        return this._currentInfo;
    }

    saveInfo(info) {
        let isIdentical = Immutable.is(this._currentInfo, Immutable.fromJS(info));
        if (!isIdentical) {
            this._currentInfo = Immutable.fromJS(info);
        }
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

let _GithubStore = new GithubStore();

_GithubStore.dispatchToken = appDispatcher.register((payload) => {
    let action = payload.action;
    switch (action.actionType) {
        case constants.GITHUB_GET_USER_SUCCESS:
            _GithubStore.saveInfo(action.data);
            break;
        default:
            return true;
    }
    _GithubStore.emitChange();
    return true;
});

export default _GithubStore;
