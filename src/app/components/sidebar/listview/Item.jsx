/**
 * Created by Fredr1kh on 16.11.2016.
 */
import React from 'react'

export default class Share extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data : props.text.displayName, id : props.text.id };
    }
    _onMouseOver(event) {
        //Do the preview thingy
    }

    _onClick(e) {
        console.log(e.target.id);
        this.props.store.selectedId = e.target.id;
    }


    componentWillReceiveProps(nextProps) {
        //console.log(Object.keys(nextProps.list));
        this.setState( { data : nextProps.text.displayName, id : nextProps.text.id } );
    _onMouseOver(e) {
        this.props.store.previewId = e.target.id;
    }


    render() {

        return (

            <button className="item" id={this.state.id} onClick={this._onClick.bind(this)} onMouseOver={this._onMouseOver.bind(this)}>{this.state.data}</button>

           /* <div className="item" onMouseOver={this._onMouseOver.bind(this)}>
                <span>{this.state.data}</span>
                <br></br>
                <span>ID: {this.state.id}</span>
            </div>*/
        );
        console.log("")
    }
}