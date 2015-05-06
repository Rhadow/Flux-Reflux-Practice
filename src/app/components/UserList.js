'use strict';

var React = require('react/addons');
var UserListItem = require('./UserListItem.js');

var UserList = React.createClass({

	shouldComponentUpdate() {
   return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  },

	render: function() {
		var listItemNode = this.props.users.map(function(user, i){
			return (
				/* jshint ignore:start */
				<UserListItem user={user} key={i} id={i}/>
				/* jshint ignore:end */
			);
		}, this);
		console.log("list rendered!!");
		return (
			/* jshint ignore:start */
			<table className="table">
			    <thead>
			        <th>Name</th>
			        <th>Age</th>
			        <th>Delete</th>
			    </thead>
			    <tbody>
			        {listItemNode}
			    </tbody>
			</table>
			/* jshint ignore:end */
		);
	}

});

module.exports = UserList;
