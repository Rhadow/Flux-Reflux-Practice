'use strict';

var React = require('react');
var appActions = require('../actions/appActions.js');

var UserListItem = React.createClass({

	handleDelete: function(e){
		e.preventDefault();
		appActions.deleteUser(this.props.id);
	},

	render: function() {
		return (
			/* jshint ignore:start */
			<tr>
	            <td>{this.props.user.name}</td>
	            <td>{this.props.user.age}</td>
	            <td><input type="button" value="delete" onClick={this.handleDelete}/></td>
	        </tr>
	        /* jshint ignore:end */
		);
	}

});

module.exports = UserListItem;