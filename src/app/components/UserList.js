'use strict';

import React from 'react/addons';
import BaseComponent from './BaseComponent.js';
import UserListItem from './UserListItem.js';

class UserList extends BaseComponent {

	constructor(props) {
		super(props);
	}

	shouldComponentUpdate() {
		return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	}

	render() {
		let listItemNode = this.props.users.map(function(user, i){
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
}

export default UserList;
