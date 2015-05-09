'use strict';

import React from 'react';
import BaseComponent from './components/BaseComponent.js';
import UserList from './components/UserList.js';
import Input from './components/Input.js';
import appStore from './stores/appStore.js';


class ExampleApp extends BaseComponent{
    constructor(props) {
        super(props);
        this.state = {
            users: appStore.getUserList()
        };
        this._bind('_onChange');
    }
    componentWillMount() {
        appStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        appStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState({
            users: appStore.getUserList()
        });
    }
    render() {
      return (
          /*jshint ignore:start */
          <div>
              <UserList users={this.state.users}/>
              <Input />
          </div>
          /*jshint ignore:end */
      );
    }
}

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
