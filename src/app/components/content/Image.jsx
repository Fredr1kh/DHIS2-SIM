import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Image extends React.Component {

    render() {
    	// When no item is selected
    	if(this.props.src == ""){
    		return null
    	}
        else {
			return(
            <img src={this.props.src} onError={(e)=>{e.target.src="./src/resources/something_broke.jpg"}}/>
        	);
        }
    }

}