'use strict';

import React from 'react/addons';
import BaseComponent from './BaseComponent.js';
import appActions from '../actions/appActions.js';

class Input extends BaseComponent {

	constructor(props) {
		super(props);
		this._bind('_handleSubmit');
	}

	shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	}

	_handleSubmit(e) {
		e.preventDefault();
		var newUser = {
			name: React.findDOMNode(this.refs.name).value,
			age: +React.findDOMNode(this.refs.age).value
		};
		if(newUser.name && newUser.age){
			React.findDOMNode(this.refs.name).value = '';
			React.findDOMNode(this.refs.age).value = '';
			appActions.addUser(newUser);
		}
	}

	render() {
		console.log("Input rendered!!");
		return (
			/* jshint ignore:start */
			<div>
			    <input type="text" placeholder="Please enter your name" ref="name" />
			    <input type="text" placeholder="Please enter your age" ref="age" />
			    <input type="button" value="Add" onClick={this._handleSubmit} />
			</div>
			/* jshint ignore:end */
		);
	}
}

export default Input;
