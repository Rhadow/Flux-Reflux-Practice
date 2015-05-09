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
			name: this.refs.name.getDOMNode().value,
			age: +this.refs.age.getDOMNode().value
		};
		if(newUser.name && newUser.age){
			this.refs.name.getDOMNode().value = '';
			this.refs.age.getDOMNode().value = '';
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
