/**
 * Created by Fredr1kh on 16.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

import ShareFacebook from './share/ShareFacebook.jsx'
import ShareTwitter from './share/ShareTwitter.jsx'

export default class Share extends React.Component {

    //This should render the share to facebook/twitter components
    // ShareFacebook
    // ShareTwitter


    render() {
        let {store} = this.props;

        console.log("Share: " + this.props.store.apiEndpoint);

        return (
            <div className="Share-root">
                <ShareFacebook store={store} />
                <ShareTwitter store={store} />
            </div>
        );
    }
}