'use strict';

import React from 'react';
import BaseComponent from './BaseComponent.js';

class Loading extends BaseComponent {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('Loading rendered!!');
        if(this.props.show){
            return (
                <div>Loading...</div>
            );
        }else{
            return (
                <div className="hide">Loading...</div>
            );
        }
    }
}

export default Loading;
