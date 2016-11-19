/**
 * Created by Fredr1kh on 19.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Previewer extends React.Component {


    render() {
        
        console.log("Previewer: " + this.props.store.previewUrl);

        return(
            <div>This: {this.props.store.apiEndpoint}</div>
        );
    }
}