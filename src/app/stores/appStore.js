'use strict';

var reflux = require('reflux');
var appActions = require('../actions/appActions.js');

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

var appStore = reflux.createStore({
	listenables: appActions,
	onAddUser: function(user){
		_userList.push(user);
		this.trigger(_userList);
	},
	onDeleteUser: function(index){
		_userList.splice(index, 1);
		this.trigger(_userList);
	},
	getUserList: function(){
		return _userList;
	}
});

module.exports = appStore;
