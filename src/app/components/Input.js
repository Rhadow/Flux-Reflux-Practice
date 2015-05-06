'use strict';

var React = require('react/addons');
var appActions = require('../actions/appActions.js');

var Input = React.createClass({

	handleSubmit: function(e){
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
	},

	shouldComponentUpdate() {
     return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
  },

	render: function() {
		console.log("Input rendered!!");
		return (
			/* jshint ignore:start */
			<div>
			  <input type="text" placeholder="Please enter your name" ref="name" />
			  <input type="text" placeholder="Please enter your age" ref="age" />
			  <input type="button" value="Add" onClick={this.handleSubmit} />
			</div>
			/* jshint ignore:end */
		);
	}

});

module.exports = Input;
