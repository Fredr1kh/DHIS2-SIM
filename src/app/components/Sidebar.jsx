/**
 * Created by Fredr1kh on 15.11.2016.
 */
import React from 'react'
import Dropdown from 'react-dropdown';
import axios from 'axios';

import Listview from './sidebar/Listview.jsx'
import Share from './sidebar/Share.jsx'


export default class Sidebar extends React.Component {

    //Should handle all components for the sidebar:
    // Dropdown (Render dropdown)
    // Listview (Render items)
    // Share (Render sharebuttons)
    //  -> Facebook (Separate code)
    //  -> Twitter  (Separate code)

    constructor(props) {
        super(props);
        this._onSelect = this._onSelect.bind(this); // <--- IMPORTANT RIGHT THERE!!!!!!!!!!!!!!!!
    }


    _onSelect(option) {
        //Insert fetching code here and update the list of available items
        //console.log(this.props.d2.i18n.api.baseUrl + option.value);
        console.log(option.value);
    }

    fetchData() {
        let ax = axios.create({
            auth: {
            username: 'admin',
            password: 'district'
            }
      })  

      ax.get(this.props.d2.models.maps.apiEndpoint+"?paging=false").then(function(response){
         /*for (let i = 0; i < response.data.length; i++){
            this.state.maps.push(response.data[i]);
            console.log("adding "+ response.data[i]);
         }*/
         console.log(response.data);
      });
    }

    componentDidMount() {
        this.fetchData();
    }


    render() {

        console.log(this.props.d2.i18n.api.baseUrl);
        console.log(this.props.d2.models.maps.apiEndpoint);
        const options = [
            {value: `${this.props.d2.models.maps.apiEndpoint}`, label: 'Maps'},
            {value: `${this.props.d2.models.charts.apiEndpoint}`, label: 'Charts'},
            {value: `${this.props.d2.models.reportTables.apiEndpoint}`, label: 'Pivots'}
        ];

        const defaultOption = options[0];

        return (
            <div className="Sidebar-root" style={null}>
                <Dropdown options={options} onChange={this._onSelect} value={this.defaultOption} placeholder="Select an entry"/>
                <Listview />
                <Share />
            </div>
        )
    }
}