import React from 'react';
import Dropdown from 'react-dropdown';

import HeaderBarComponent from 'd2-ui/lib/app-header/HeaderBar';
import headerBarStore$ from 'd2-ui/lib/app-header/headerBar.store';
import withStateFrom from 'd2-ui/lib/component-helpers/withStateFrom';

const HeaderBar = withStateFrom(headerBarStore$, HeaderBarComponent);



export default class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            d2: this.props.d2,
        };
    }


    _onSelect(option) {
        //Insert fetching code here and update the list of available items
        console.log(option.value);
    }



    render() {
        const options = [
            {value: 'maps', label: 'Maps'},
            {value: 'charts', label: 'Charts'},
            {value: 'reportTables', label: 'Pivots'}
        ];

        const defaultOption = options[0];

        return (
            <div className="app-wrapper">
                <div>
                    <HeaderBar />
                </div>
                <div>
                    <Dropdown options={options} onChange={this._onSelect} value={this.defaultOption}
                              placeholder="Select an entry"/>
                </div>
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
