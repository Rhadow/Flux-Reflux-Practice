/** @jsx React.DOM */

'use strict';

var React = require('react'),
    UserList = require('./components/UserList.js'),
    Input = require('./components/Input.js'),
    appStore = require('./stores/appStore.js'),
    ExampleApp;

ExampleApp = React.createClass({
    getInitialState: function(){
        return {
            users: appStore.getUserList()
        };        
    },
    componentWillMount: function(){
        appStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        appStore.removeChangeListener(this._onChange);
    },
    render: function() {
        return (
        	/*jshint ignore:start */
            <div>
                <UserList users={this.state.users}/>
            	<Input />
            </div>
            /*jshint ignore:end */
        );
    },
    _onChange: function(){
        this.setState({
            users: appStore.getUserList()
        });
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
