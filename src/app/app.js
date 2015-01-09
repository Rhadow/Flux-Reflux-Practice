/** @jsx React.DOM */

'use strict';

var React = require('react'),
    reflux = require('reflux'),
    UserList = require('./components/UserList.js'),
    Input = require('./components/Input.js'),
    appStore = require('./stores/appStore.js'),
    ExampleApp;

ExampleApp = React.createClass({
    mixins: [reflux.ListenerMixin],
    getInitialState: function(){
        return {
            users: appStore.getUserList()
        };        
    },
    componentDidMount: function(){
        this.listenTo(appStore, this._onChange);
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
    _onChange: function(userList){
        this.setState({
            users: userList
        });
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
