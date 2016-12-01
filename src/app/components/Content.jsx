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

        // Hides social sharing button when no data is selected.
        let style = {};
        if (!selectedId) {
            style.display = 'none'
        }
        // If dataset is selected, display previewfield and sharebuttons
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
                    <h2>Welcome to DHIS-Social Integration Management</h2>
                    <h3>Please select a dataset</h3>
                </div>
            );
        }
    }
}