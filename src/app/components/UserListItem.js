'use strict';

var React = require('react/addons');
var appActions = require('../actions/appActions.js');

var UserListItem = React.createClass({

	handleDelete: function(e){
		e.preventDefault();
		appActions.deleteUser(this.props.id);
	},

	shouldComponentUpdate() {
     return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  },

	render: function() {
		console.log(this.props.user.get('name') + " rendered!!");
		return (
			/* jshint ignore:start */
			<tr>
        <td>{this.props.user.get('name')}</td>
        <td>{this.props.user.get('age')}</td>
        <td><input type="button" value="delete" onClick={this.handleDelete}/></td>
	    </tr>
	    /* jshint ignore:end */
		);
	}

});

module.exports = UserListItem;
