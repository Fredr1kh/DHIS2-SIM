/**
 * Created by Fredr1kh on 19.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Comment extends React.Component{

    render() {

        return(
            <div>Current: {this.props.store.apiEndpoint}</div>
        );
    }
}