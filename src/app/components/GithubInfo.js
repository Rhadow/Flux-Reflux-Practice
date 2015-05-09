'use strict';

import React from 'react';
import BaseComponent from './BaseComponent.js';

class GithubInfo extends BaseComponent {

    constructor(props) {
        super(props);
        this._bind('_renderContent');
    }

    _renderContent() {
        var resultHTML, info;
        if(this.props.data) {
            info = this.props.data;
            resultHTML = (
                <div>
                    <h1>Profile of {info.login}</h1>
                    <ul>
                        <li>Account Name: {info.login}</li>
                        <li>Public Repo Counts: {info.public_repos}</li>
                        <li>Followers Count: {info.followers}</li>
                        <li>Account Created at: {info.created_at}</li>
                    </ul>
                </div>                
            );
        }
        return resultHTML;
    }

    render() {
        var content = this._renderContent();
        return (
            <div>
                {content}
            </div>
        );
    }
}

GithubInfo.PropTypes = {
    data: React.PropTypes.object
};
GithubInfo.defaultProps = {};

export default GithubInfo;
