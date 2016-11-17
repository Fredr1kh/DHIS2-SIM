/**
 * Created by Fredr1kh on 15.11.2016.
 */
import React from 'react'

import Item from './listview/Item.jsx'

export default class Listview extends React.Component {

    //This should handle the listing of the available resources
    // Resource/List-item


    render() {


        //Something like this to create the list
        /*const elementList = this.props.data.map( val => (
           <Item value={val.value}/>
        ));*/

        return (
            <div className="List-root">
                <h2>THIS IS A LIST</h2>
            </div>

        );
    }
}
