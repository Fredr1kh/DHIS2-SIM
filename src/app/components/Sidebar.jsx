/**
 * Created by Fredr1kh on 15.11.2016.
 */
import React from 'react'
import Dropdown from 'react-dropdown';
import axios from 'axios';

import Listview from './sidebar/Listview.jsx'


export default class Sidebar extends React.Component {

    //Should handle all components for the sidebar:
    // Dropdown (Render dropdown)
    // Listview (Render items)

    _onSelect(option) {
        console.log(option.label + " is found at " + option.value+".json?paging=false");
        this.fetchData(option.value+"?paging=false")

        this.props.store.previous = this.props.store.apiEndpoint;
        this.props.store.apiEndpoint = option.value;
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
                console.log(response);
                this.props.store.data = response.data;
            });
    }

    render() {
        
        let {models} = this.props.d2;
        let {store} = this.props;

        console.log(this.props.d2.i18n.api.baseUrl);
        console.log(models.maps.apiEndpoint);
        const options = [
            {value: `${models.maps.apiEndpoint}`, label: 'Maps'},
            {value: `${models.charts.apiEndpoint}`, label: 'Charts'},
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