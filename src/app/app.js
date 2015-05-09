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
import appStore from './stores/appStore.js';


class ExampleApp extends BaseComponent{
    constructor(props) {
        super(props);
        this.state = {
            users: appStore.getUserList(),
            githubInfo: {
                "login": "Rhadow",
                "id": 7846583,
                "avatar_url": "https://avatars.githubusercontent.com/u/7846583?v=3",
                "gravatar_id": "",
                "url": "https://api.github.com/users/Rhadow",
                "html_url": "https://github.com/Rhadow",
                "followers_url": "https://api.github.com/users/Rhadow/followers",
                "following_url": "https://api.github.com/users/Rhadow/following{/other_user}",
                "gists_url": "https://api.github.com/users/Rhadow/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/Rhadow/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/Rhadow/subscriptions",
                "organizations_url": "https://api.github.com/users/Rhadow/orgs",
                "repos_url": "https://api.github.com/users/Rhadow/repos",
                "events_url": "https://api.github.com/users/Rhadow/events{/privacy}",
                "received_events_url": "https://api.github.com/users/Rhadow/received_events",
                "type": "User",
                "site_admin": false,
                "name": "Howard Chang",
                "company": "",
                "blog": "http://rhadow.github.io/",
                "location": "Taipei, Taiwan",
                "email": "howard3433@gmail.com",
                "hireable": true,
                "bio": null,
                "public_repos": 14,
                "public_gists": 0,
                "followers": 6,
                "following": 9,
                "created_at": "2014-06-10T07:30:05Z",
                "updated_at": "2015-05-09T04:46:49Z"
            }
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
