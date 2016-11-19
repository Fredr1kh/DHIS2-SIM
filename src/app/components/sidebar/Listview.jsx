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
        //console.log(Object.keys(nextProps.list));
        //const key = Object.keys(nextProps.list)[0];

        //console.log(nextProps.list[key][0]);
        //const { tmp } = nextProps.list;
        //console.log(tmp);
        this.setState( { data : nextProps.list , key : Object.keys(nextProps.list)[0] } );
    }


    render() {
        //Something like this to create the list
        /*const elementList = this.props.data.map( val => (
           <Item value={val.value}/>
        ));*/
        console.log("listView: " + this.props.store.apiEndpoint)
        let listItems = [];

        if(this.state.data !== null) {
            let { data:  data, key: key } = this.state;
            //let as = [];
            //console.log(data[key]);

                let arr = data[key].map((displayName, i) => <Item key={i} text={displayName} store={this.props.store} />);
               // console.log(arr[0].props.text.displayName);
               // console.log(arr)
                return(
                    <div className="List-root">
                        <ul>{arr}</ul>
                    </div>);
            
        }
        // For logical purposes.
        else {
             return (
            <div className="List-root">
                <ul><Item key={1} text="Loading..." store={this.props.store}/></ul>
            </div>
        );
        }
        //console.log("Hello from Listview")
        //console.log(this.state.data);
        //console.log("Hello from Listview");

       
    }
}
