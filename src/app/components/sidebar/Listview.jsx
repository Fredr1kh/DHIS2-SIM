/**
 * Created by Fredr1kh on 15.11.2016.
 */
import React from 'react'

import Item from './listview/Item.jsx'

export default class Listview extends React.Component {

    //This should handle the listing of the available resources
    // Resource/List-item

    constructor(props) {
        super(props);
        this.state = { data : null, key : null };
    }

    componentWillReceiveProps(nextProps) {
        console.log(Object.keys(nextProps.list));
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

        let listItems = [];

        if(this.state.data !== null) {
            let { data:  data, key: key } = this.state;
            //let as = [];
            console.log(data[key]);
            /*listItems = data[key]
                .map( (obj) => {
                    let {displayName : name , id: id} = obj;
                    return 
                    (
                    <div>
                    <Item name={name} id={id} />;
                    </div>
                    ) //TODO Understand this.
                });*/

            console.log(listItems);
            /*return(
                <ul>
                {data[key].map(function(key, result){
                    return(<Item key={key}  />);
                })}
                </ul>
                );*/

                let arr = data[key].map((displayName, i) => <Item key={i} text={displayName}/>);
                console.log(arr[0].props.text.displayName);
                console.log(arr)
                return(<span>{arr}</span>);
            
        }
        // For logical purposes.
        else {
             return (
            <div className="List-root">
                <h2>THIS IS A LIST</h2>
            </div>
        );
        }
        //console.log("Hello from Listview")
        //console.log(this.state.data);
        //console.log("Hello from Listview");

       
    }
}
