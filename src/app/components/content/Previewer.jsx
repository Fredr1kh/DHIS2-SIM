/**
 * Created by Fredr1kh on 19.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Previewer extends React.Component {


    render() {

        let {apiEndpoint, selectedId, previewId} = this.props.store;
        let imgUrl = selectedId === "" ? "" : `${apiEndpoint}/${selectedId}/data`
        return(
            <div>Previous: {this.props.store.previous}
            <br />Text: {this.props.store.shareText}
            <br />Selected Id: {selectedId}
            <br />Preview Id: {previewId}
            <br />Selected Image: {imgUrl}
            <br /><img src={imgUrl}/>
            </div>
        );
    }
}