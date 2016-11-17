import React from 'react';
import log from 'loglevel';

import HeaderBarComponent from 'd2-ui/lib/app-header/HeaderBar';
import headerBarStore$ from 'd2-ui/lib/app-header/headerBar.store';
import withStateFrom from 'd2-ui/lib/component-helpers/withStateFrom';
import Charts from './components/Charts.jsx'


import Sidebar from 'd2-ui/lib/sidebar/Sidebar.component';
import {init} from 'd2/lib/d2';


const HeaderBar = withStateFrom(headerBarStore$, HeaderBarComponent);


init({baseUrl: 'localhost:8082/api'})
  .then(d2 => {
    //Your d2 is initialised and ready to use.
    console.log("pro");
  });

export default React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        d2: React.PropTypes.object,
    },

    childContextTypes: {
        d2: React.PropTypes.object,
    },

    getDefaultProps() { 
        return {
            name: 'Crappyengineering',
        };
    },

    getChildContext() {
        return {
            d2: this.props.d2,
        };
    },

    _sidebarItemClicked(sideBarItemKey) {
        console.log('Clicked on', sideBarItemKey);
    },

    render() {
        const sideBarSections = [
            { key: 'Maps', label: 'Maps' },
            { key: 'Charts', label: 'Charts' },
            { key: 'Pivot', label: 'Pivot Table'}
        ];

        return (
            <div className="app-wrapper">
                //<HeaderBar />
                <Sidebar
                sections={sideBarSections}
                   onChangeSection={this._sidebarItemClicked}/>
                //<div className="main-content">{`Hello, ${this.props.name}! You have successfully started your project`}</div>
                <Charts />
            </div>
        );
    },
});
