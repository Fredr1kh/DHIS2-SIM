/**
 * Created by Fredr1kh on 15.11.2016.
 */
import React from 'react'
import Dropdown from 'react-dropdown';

import Listview from './sidebar/Listview.jsx'

export default class Sidebar extends React.Component {

    //Should handle all components for the sidebar:
    // Dropdown (Render dropdown)
    // Listview (Render items)
    // Share (Render sharebuttons)
    //  -> Facebook (Separate code)
    //  -> Twitter  (Separate code)


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
            <div className="sidebar-root" style={null}>
                <div>
                    <Dropdown options={options} onChange={this._onSelect} value={this.defaultOption}
                              placeholder="Select an entry"/>
                </div>
            </div>
        )
    }
}