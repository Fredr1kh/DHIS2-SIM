import React from 'react'
import Dropdown from 'react-dropdown';
import axios from 'axios';

import Listview from './sidebar/Listview.jsx'


export default class Sidebar extends React.Component {

    // Should handle all components for the sidebar:
    // Dropdown (Render dropdown)
    // Listview (Render items)

    _onSelect(option) {
        this.fetchData(option.value+"?paging=false")
        this.props.store.previous = this.props.store.apiEndpoint;
        this.props.store.apiEndpoint = option.value;
        this.props.store.selectedId = ""
    }


    fetchData(param) {
        let ax = axios.create({
            auth: {
            username: 'admin',
            password: 'district'
            }
        });

        let {requestHeaders} = this.props.store;
        ax.get(param)
            .then( (response) => {
                this.props.store.data = response.data;
            });
    }

    render() {
        
        let {models} = this.props.d2;
        let {store} = this.props;

        const options = [
            {value: `${models.maps.apiEndpoint}`, label: 'Maps'},
            {value: `${models.charts.apiEndpoint}`, label: 'Charts'},
            {value: `${models.eventCharts.apiEndpoint}`, label: 'Event Charts'},
            {value: `${models.reportTables.apiEndpoint}`, label: 'Pivots'}
        ];

        const defaultOption = options[0];

        return (
            <div className="Sidebar-root" style={null}>
                <Dropdown options={options} onChange={this._onSelect.bind(this)} value={this.defaultOption} placeholder="Select favorite"/>
                <Listview store={store} />
            </div>
        )
    }
}