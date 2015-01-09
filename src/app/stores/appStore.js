'use strict';

var appDispatcher = require('../dispatcher/dispatcher.js');
var eventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants.js');
var _ = require('underscore');

var _userList = [{
    name: 'Howard',
    age: 27
}, {
    name: 'Shaun',
    age: 22
}, {
    name: 'Amy',
    age: 26
}, ];

var appStore = _.extend({}, eventEmitter.prototype, {
    getUserList: function() {
        return _userList;
    },
    addUser: function(user) {
        _userList.push(user);
    },
    deleteUser: function(index) {
        _userList.splice(index, 1);
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
