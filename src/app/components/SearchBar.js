'use strict';

import React from 'react';
import BaseComponent from './BaseComponent.js';
import apiActions from '../actions/apiActions.js';

class SearchBar extends BaseComponent {

    constructor(props) {
        super(props);
        this._bind('_handleSearchClick');
    }

    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	}

    _handleSearchClick(e) {
        e.preventDefault();
		let accountToSearch = React.findDOMNode(this.refs.account).value;
		if(accountToSearch){
            React.findDOMNode(this.refs.account).value = '';
            apiActions.getGithubInfo(accountToSearch);
		}
    }

    render() {
        console.log('SearchBar rendered!!');
        return (
            <div>
                <label>Enter Your Github Account: </label>
                <input
                    type="text"
                    ref="account" />
                <input
                    type="button"
                    value="Send"
                    onClick={this._handleSearchClick} />
            </div>
        );
    }
}

export default SearchBar;
