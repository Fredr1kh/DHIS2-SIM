import React from 'react'
import {observer} from 'mobx-react'

import Previewer from './content/Previewer.jsx'

import {
    ShareButtons,
    ShareCounts,
    generateShareIcon,
} from 'react-share';

@observer
export default class Content extends React.Component {
    render() {

        let {selectedId, apiEndpoint, selectedTitle, data} = this.props.store;

        const {
            FacebookShareButton,
            TwitterShareButton,
        } = ShareButtons;

        const FacebookIcon = generateShareIcon('facebook');
        const TwitterIcon = generateShareIcon('twitter');
        const shareUrl = `${apiEndpoint}/${selectedId}/data`;

        // Hides social sharing button when no chart is selected.
        let style = {};
        if (!selectedId) {
            style.display = 'none'
        }

        if (data !== undefined) {
            return (
                <div className="content-root">
                    <Previewer store={this.props.store}/>
                    <div id="shareButtons" style={style}>
                        <FacebookShareButton
                            url={shareUrl}
                            title={selectedTitle}
                            className="FbShareButton">
                            <FacebookIcon size={48}/>
                        </FacebookShareButton>
                        <TwitterShareButton
                            url={shareUrl}
                            title={selectedTitle}
                            className="TwShareButton">
                            <TwitterIcon size={48}/>
                        </TwitterShareButton>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="content-root">
                </div>
            );
        }
    }
}