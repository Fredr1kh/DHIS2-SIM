/**
 * Created by Fredr1kh on 19.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

import Comment from './content/Comment.jsx'
import Previewer from './content/Previewer.jsx'

import {
  ShareButtons,
  ShareCounts,
  generateShareIcon,
} from 'react-share';

@observer
export default class Content extends React.Component{
    render() {
	
	const {
 	 FacebookShareButton,
 	 TwitterShareButton,
	 } = ShareButtons;

	const FacebookIcon = generateShareIcon('facebook');
	const TwitterIcon = generateShareIcon('twitter');
    const shareUrl = this.props.store.apiEndpoint+"/"+this.props.store.selectedId+"/data";

    // Hides social sharing button when no chart is selected.
  	let style = {};
	if (!this.props.store.selectedId) {
		  	style.display = 'none'
		}

    if(this.props.store.data !== undefined){
    	return(
        <div className="content-root" >
            <Comment store={this.props.store} />
            <Previewer store={this.props.store} />
            <div id="shareButtons" style={style}>
            	<FacebookShareButton
            		url={shareUrl}
            		title={this.props.store.shareText}
            		className="FbShareButton">
 						<FacebookIcon size={48}/>
         		</FacebookShareButton>
         		<TwitterShareButton
            		url={shareUrl}
            		title={this.props.store.shareText}
            		className="TwShareButton">
            		<TwitterIcon size={48} />
          		</TwitterShareButton>
          	</div>
        </div>
        	);
    	}
    	else{
    		return(
    			<div className="content-root" >
    			</div>
    			);
    	}
    }
}