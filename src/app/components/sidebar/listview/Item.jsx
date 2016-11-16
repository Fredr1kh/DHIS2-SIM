/**
 * Created by Fredr1kh on 16.11.2016.
 */
import React from 'react'

export default class Share extends React.Component {

    _onMouseOver(event) {
        //Do the preview thingy
    }

    render() {
        return (
            <div className="item" onMouseOver={this._onMouseOver.bind(this)}>
                <b>Booya</b>
            </div>
        );
    }
}