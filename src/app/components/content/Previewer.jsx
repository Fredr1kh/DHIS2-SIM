/**
 * Created by Fredr1kh on 19.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'

@observer
export default class Previewer extends React.Component {


    fetchImage() {
        let {apiEndpoint, selectedId, requestHeaders} = this.props.store;
        let a = fetch(`${apiEndpoint}/${selectedId}`, requestHeaders)
            .then(function(response) {
                return response.status >= 200 && response.status < 300 ? Promise.resolve(response) : Promise.reject(response);
            })
            .then(response => response.json())
            .catch(error => console.error(error));

        console.log(a);
    }



    render() {

        let {apiEndpoint, selectedId, previewId, selectedTitle, previewTitle} = this.props.store;

        let imgUrl = selectedId !== "" && previewId === "" ? `${apiEndpoint}/${selectedId}/data` :
                    previewId !== ""  ? `${apiEndpoint}/${previewId}/data` : "";

        let title = selectedTitle !== "" && previewTitle === "" ? selectedTitle :
                    previewTitle !== ""  ? previewTitle : "";

        this.fetchImage();

        return(
            <div>
                <h1>{title}</h1>
                <img src={imgUrl}/>
            </div>
        );
    }
}