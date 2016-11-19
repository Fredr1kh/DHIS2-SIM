/**
 * Created by Fredr1kh on 19.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Comment extends React.Component{

    _attachToShare(e) {
        e.preventDefault();
        let {disableText, shareText} = this.props.store;

        if(disableText === false) {
            let tmp = $("#commentsText").val()
            $("#commentsText").val(shareText !== tmp ? tmp : shareText);
            this.props.store.shareText = "";
            $("#detached").slideDown(500, function() {
                setTimeout(function() {
                    $("#detached").slideUp(500);
                }, 500)
            });
        } else {
            this.props.store.shareText = $("#commentsText").val()

            $("#attached").slideDown(500, function() {
                setTimeout(function() {
                    $("#attached").slideUp(500);
                }, 500)
            });
        }
    }

    toggleActive(val) {
        this.props.store.disableText = val;

    }

    render() {

        let { apiEndpoint, disableText, shareText } = this.props.store;

        return(
            <div>Current: {apiEndpoint}
                <form onSubmit={this._attachToShare.bind(this)}>
                    <textarea disabled={disableText} id="commentsText" className="comment-text" form="textfrm" rows="10" columns="100" placeholder="Sharing comments">{shareText}</textarea>
                    <div id="attached">Message Attached</div>
                    <div id="detached">Message Detached</div>
                    <input type="submit" value="Attach" onClick={this.toggleActive.bind(this, true)}/>
                    <input type="submit" value="Reset" onClick={this.toggleActive.bind(this, false)} />
                </form>
            </div>
        );
    }
}