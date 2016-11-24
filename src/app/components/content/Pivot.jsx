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
            <iframe src={this.props.src} frameBorder="0" scrolling="yes" width="100%" height="100%"/>
        );
    }

}