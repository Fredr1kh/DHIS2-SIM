import React from 'react'

export default class Share extends React.Component {

    _onClick(e) {
        this.props.store.selectedId = e.target.id;
        this.props.store.selectedTitle = this.props.text.displayName;
    }

    _onMouseOver(e) {
        this.props.store.previewId = e.target.id;
        this.props.store.previewTitle = this.props.text.displayName;
    }

    _onMouseOut() {
        this.props.store.previewId = "";
        this.props.store.previewTitle = "";
    }

    render() {
        let {id, displayName} = this.props.text;
        return (
            <button className="item" id={id} onClick={this._onClick.bind(this)} onMouseOut={this._onMouseOut.bind(this)}>{displayName}</button>
        );
    }
}