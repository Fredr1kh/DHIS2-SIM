/**
 * Created by Fredr1kh on 19.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

import Comment from './content/Comment.jsx'
import Previewer from './content/Previewer.jsx'

@observer
export default class Content extends React.Component{


    render() {


        return(
            <div className="content-root" >
                <Comment store={this.props.store} />
                <Previewer store={this.props.store} />
            </div>
        );
    }
}