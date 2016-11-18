/**
 * Created by Fredr1kh on 16.11.2016.
 */
import React from 'react'

export default class Share extends React.Component {

    constructor(props) {
        super(props);
        this.state = { displayName : null, id : null };
    }
    _onMouseOver(event) {
        //Do the preview thingy
    }


    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        //console.log(Object.keys(nextProps.list));
        this.setState( { data : nextProps.text.displayName, id : nextProps.text.id } );
    }


    render() {
        return (
            <div className="item" onMouseOver={this._onMouseOver.bind(this)}>
                <b>{this.state.data}</b><br></br>
                <b>{this.state.id}</b>
            </div>
        );
    }
}