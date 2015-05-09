'use strict';

//Libraries
import React from 'react';

// Components
import BaseComponent from './components/BaseComponent.js';
import UserList from './components/UserList.js';
import Input from './components/Input.js';
import SearchBar from './components/SearchBar.js';
import GithubInfo from './components/GithubInfo.js';

//Store
import AppStore from './stores/AppStore.js';
import GithubStore from './stores/GithubStore.js';


class ExampleApp extends BaseComponent{
    constructor(props) {
        super(props);
        this.state = {
            users: AppStore.getUserList(),
            githubInfo: GithubStore.getCurrentInfo()
        };
        this._bind('_onChange');
    }
    componentWillMount() {
        AppStore.addChangeListener(this._onChange);
        GithubStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
        GithubStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState({
            users: AppStore.getUserList(),
            githubInfo: GithubStore.getCurrentInfo()
        });
    }
    render() {
      return (
          /*jshint ignore:start */
          <div>
              <UserList users={this.state.users}/>
              <Input />
              <hr/>
              <SearchBar/>
              <GithubInfo data={this.state.githubInfo}/>
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
