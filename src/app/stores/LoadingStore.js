'use strict';

import appDispatcher from '../dispatcher/dispatcher.js';
import {EventEmitter} from 'events';
import constants from '../constants/constants.js';
import Immutable from 'immutable';
import GithubStore from '../stores/GithubStore.js';

class LoadingStore extends EventEmitter {

    constructor() {
        super();
        this._showLoading = false;
    }

    getLoadingState() {
        return this._showLoading;
    }

    updateLoadingState(state) {
        this._showLoading = state;
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

let _LoadingStore = new LoadingStore();

_LoadingStore.dispatchToken = appDispatcher.register((payload) => {
    let action = payload.action;
    switch (action.actionType) {
        case constants.LOADING_UPDATE_STATE:
            appDispatcher.waitFor([GithubStore.dispatchToken]);
            _LoadingStore.updateLoadingState(action.data);
            break;
        default:
            return true;
    }
    _LoadingStore.emitChange();
    return true;
});

export default _LoadingStore;
