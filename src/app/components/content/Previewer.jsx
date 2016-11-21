/**
 * Created by Fredr1kh on 19.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Previewer extends React.Component {


    render() {

        let {apiEndpoint, selectedId, previewId, selectedTitle, previewTitle} = this.props.store;

        let imgUrl = selectedId !== "" && previewId === "" ? `${apiEndpoint}/${selectedId}/data` :
                    previewId !== ""  ? `${apiEndpoint}/${previewId}/data` : "";

        let title = selectedTitle !== "" && previewTitle === "" ? selectedTitle :
                    previewTitle !== ""  ? previewTitle : "";
        return(
            <div>
                <h1>{title}</h1>
                <img src={imgUrl}/>
            </div>
        );
    }
}