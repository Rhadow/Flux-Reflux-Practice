'use strict';

import React from 'react/addons';
import BaseComponent from './BaseComponent.js';

class GithubInfo extends BaseComponent {

    constructor(props) {
        super(props);
        this._bind('_renderContent');
    }

    shouldComponentUpdate() {
		return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this, arguments);
	}

    _renderContent() {
        var resultHTML, info;
        if(this.props.data.get('login')) {
            info = this.props.data;
            resultHTML = (
                <div>
                    <h1>Profile of {info.get('login')}</h1>
                    <img src={info.get('avatar_url')} />
                    <ul>
                        <li>
                            Account Name:
                            <strong> {info.get('login')}</strong>
                        </li>
                        <li>
                            Public Repo Counts:
                            <strong> {info.get('public_repos')}</strong>
                        </li>
                        <li>
                            Followers Count:
                            <strong> {info.get('followers')}</strong>
                        </li>
                        <li>
                            Account Created at:
                            <strong> {info.get('created_at')}</strong>
                        </li>
                    </ul>
                </div>
            );
        }
        return resultHTML;
    }

    render() {
        var content = this._renderContent();
        console.log(`${this.props.data.get('login')} rendered!!`);
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
