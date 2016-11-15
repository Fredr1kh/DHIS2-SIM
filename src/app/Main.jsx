import React from 'react';


import HeaderBarComponent from 'd2-ui/lib/app-header/HeaderBar';
import headerBarStore$ from 'd2-ui/lib/app-header/headerBar.store';
import withStateFrom from 'd2-ui/lib/component-helpers/withStateFrom';

import Sidebar from './components/Sidebar.jsx';

const HeaderBar = withStateFrom(headerBarStore$, HeaderBarComponent);



export default class Main extends React.Component {

    //Should handle the main layout of the application
    // Headerbar
    // Sidebar
    // Live-preview
    // Text-input


    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            d2: this.props.d2,
        };
    }


    render() {
        return (
            <div className="app-wrapper">
                <HeaderBar />
                <Sidebar />
            </div>
        )
    }

}

Main.defaultProps =  {
    name: 'Crappyengineering'
};

Main.propTypes = {
    name: React.PropTypes.string,
    d2: React.PropTypes.object,
};

Main.childContextTypes = {
    d2: React.PropTypes.object,
};
