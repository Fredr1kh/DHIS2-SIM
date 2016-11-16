/**
 * Created by Fredr1kh on 16.11.2016.
 */
import React from 'react'


export default class ShareFacebook extends React.Component {

    //This should handle the share to facebook function, i.e collect all the necessary information and post it.
    // No known children/subcomponents

    constructor(props) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }


    _onClick() {
        console.log("Pressed the Facebook button")
    }

    render() {
        return (
            <div className="Facebook">
                <button onClick={this._onClick}>Facebook</button>
            </div>
        );
    }
}