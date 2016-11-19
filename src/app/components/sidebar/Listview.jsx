/**
 * Created by Fredr1kh on 15.11.2016.
 */
import React from 'react'
import { observer } from 'mobx-react'

import Item from './listview/Item.jsx'

@observer
export default class Listview extends React.Component {

    //This should handle the listing of the available resources
    // Resource/List-item

    constructor(props) {
        super(props);
        this.state = { data : null, key : null };
    }

    componentWillReceiveProps(nextProps) {
        console.log(Object.keys(nextProps.list));

        //console.log(nextProps.list[key][0]);
        this.setState( { data : nextProps.list , key : Object.keys(nextProps.list)[0] } );
    }


    render() {
        console.log(this.props.store.apiEndpoint)
        let listItems = [];

        if (this.state.data !== null) {
            let {data:  data, key: key} = this.state;
            //console.log(data[key]);

            let arr = data[key].map((displayName, i) => <Item key={i} text={displayName} store={this.props.store}/>);
            //console.log(arr)
            return (
                <div className="List-root">
                    <ul>{arr}</ul>
                </div>);

        }
        // For logical purposes.
        else {
            return (
                <div className="List-root">
                </div>
            );
        }
    }
}
