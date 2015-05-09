'use strict';

import React from 'react';
import BaseComponent from './BaseComponent.js';

class SearchBar extends BaseComponent {

    constructor(props) {
        super(props);
        this._bind('_handleSearchClick');
    }

    _handleSearchClick(e) {
        e.preventDefault();
		var accountToSearch = React.findDOMNode(this.refs.account).value;
		if(accountToSearch){
            React.findDOMNode(this.refs.account).value = '';
			console.log(`sent ${accountToSearch} to Action`);
		}
    }

    render() {
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
