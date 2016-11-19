/**
 * Created by Fredr1kh on 19.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Comment extends React.Component{

    _attachToShare(e) {
        e.preventDefault();
       this.props.store.shareText = "Bugger off"
    }

    render() {

        return(
            <div>Current: {this.props.store.apiEndpoint}
                <form id="textfrm" onSubmit={this._attachToShare.bind(this)}>
                    <textarea className="comment-text" form="textfrm" rows="10" columns="100" placeholder="Sharing comments"></textarea>
                    <input type="submit" value="Attach"/>
                </form>
            </div>
        );
    }
}