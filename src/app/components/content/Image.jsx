import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Image extends React.Component {
    render() {
    	// When no item is selected return null
    	if(this.props.src == ""){
    		return (<h2>Please select dataset</h2>)
    	}
        // Return image from list, if error on loading display error-image. 
        //**Careful, if alternate image not available the function will probably infinity loop**
        else {
			return(
            <img src={this.props.src} onError={(e)=>{e.target.src="./src/resources/something_broke.jpg"}}/>
        	);
        }
    }
}