/**
 * Created by Fredrik on 24/11/2016.
 */

import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Image extends React.Component {


    render() {


        return(
            <img src={this.props.src}/>
        );
    }

}