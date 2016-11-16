/**
 * Created by Fredr1kh on 16.11.2016.
 */import React from 'react'

export default class ShareTwitter extends React.Component {

    //This should handle the share to twitter function, i.e collect all the necessary information and post it.
    // No known children/subcomponents


    constructor(props) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }


    _onClick() {
        console.log("Pressed the twitter button");
    }

    render() {
        return (
            <div className="Twitter">
                <button onClick={this._onClick}>Twitter</button>
            </div>
        );
    }
}