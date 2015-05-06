'use strict';

var appDispatcher = require('../dispatcher/dispatcher.js');
var eventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants.js');
var _ = require('underscore');

import Immutable from 'immutable';

var appStore = _.extend({}, eventEmitter.prototype, {
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
    getUserList: function() {
        return this._userList;
    },
    addUser: function(user) {
        this._userList = this._userList.push(Immutable.fromJS(user));
    },
    deleteUser: function(index) {
        this._userList = this._userList.splice(index, 1);
    },
    emitChange: function() {
        this.emit('change');
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },
});

appDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
        case constants.ADD_USER:
            appStore.addUser(action.data);
            break;
        case constants.DELETE_USER:
            appStore.deleteUser(action.data);
            break;
        default:
            return true;
    }
    appStore.emitChange();
    return true;
});

module.exports = appStore;
