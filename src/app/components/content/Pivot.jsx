/**
 * Created by Fredrik on 24/11/2016.
 */
/**
 * Created by Fredrik on 24/11/2016.
 */

import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Pivot extends React.Component {


    render() {

        return(
            <iframe src={this.props.src} frameborder="0" scrolling="no" width="500" height="500"/>
        );
    }

}