'use strict';

import React from 'react/addons';
import BaseComponent from './BaseComponent.js';
import appActions from '../actions/appActions.js';

class UserListItem extends BaseComponent {

	constructor(props) {
		super(props);
		this._bind('_handleDelete');
	}

	shouldComponentUpdate() {
		return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	}

	_handleDelete(e){
		e.preventDefault();
		appActions.deleteUser(this.props.id);
	}

	render() {
		console.log(`${this.props.user.get('name')} rendered!!`);
		return (
			/* jshint ignore:start */
			<tr>
                <td>{this.props.user.get('name')}</td>
		        <td>{this.props.user.get('age')}</td>
		        <td><input type="button" value="delete" onClick={this._handleDelete}/></td>
		    </tr>
	    /* jshint ignore:end */
		);
	}
}
export default UserListItem;
