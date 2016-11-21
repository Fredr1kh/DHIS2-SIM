/**
 * Created by Fredr1kh on 16.11.2016.
 */
import React from 'react'

export default class Share extends React.Component {

    _onClick(e) {
        console.log(e.target.id);
        this.props.store.selectedId = e.target.id;
    }

    _onMouseOver(e) {
        this.props.store.previewId = e.target.id;
    }

    _onMouseOut() {
        this.props.store.previewId = "";
    }

    render() {

        let {id, displayName} = this.props.text;

        return (
            <button className="item" id={id} onClick={this._onClick.bind(this)} onMouseOver={this._onMouseOver.bind(this)} onMouseOut={this._onMouseOut.bind(this)}>{displayName}</button>
        );
    }
}