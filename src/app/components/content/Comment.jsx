import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Comment extends React.Component{

    _attachToShare(e) {
        e.preventDefault();
        let {disableText, shareText} = this.props.store;
        let [ div, det, att] = [ $("#commentsText"), $("#deleted"), $("#attached") ]; //Jquery selectors

        if(disableText === false) {
            let tmp = div.val();

            div.val(shareText !== tmp ? tmp : shareText);
            this.props.store.shareText = "";

            det.slideDown(500, function() {
                setTimeout(function() {
                    det.slideUp(500);
                }, 500)
            });
        } else {
            this.props.store.shareText = div.val();

            att.slideDown(500, function() {
                setTimeout(function() {
                    att.slideUp(500);
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
                    <textarea disabled={disableText} id="commentsText" className="comment-text" form="textfrm" rows="10" columns="100" placeholder="Sharing comments" defaultValue={shareText}></textarea>
                    <div id="attached">Message Attached</div>
                    <div id="deleted">Message Deleted</div>
                    <input type="submit" value="Attach" onClick={this.toggleActive.bind(this, true)}/>
                    <input type="submit" value="Reset" onClick={this.toggleActive.bind(this, false)} />
                </form>
            </div>
        );
    }
}