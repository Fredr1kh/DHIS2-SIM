/**
 * Created by Fredr1kh on 15.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

import Item from './listview/Item.jsx'

@observer
export default class Listview extends React.Component {

    //This should handle the listing of the available resources
    // Resource/List-item

    render() {
        console.log(this.props.store.apiEndpoint)
        let {data, key} =  this.props.store;

        if (data !== undefined) {
            let key = Object.keys(data)[0];

            let arr = data[key]
                .map((displayName, i) => <Item key={i} text={displayName} store={this.props.store}/>);
            return (
                <div className="List-root">{arr}</div>
            );
        }
        // For logical purposes.
        else {
            return (
                <div className="List-root"></div>
            );
        }
    }
}
