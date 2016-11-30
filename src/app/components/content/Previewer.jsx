/**
 * Created by Fredr1kh on 19.11.2016.
 */
import React from 'react'
import {observer} from 'mobx-react'
import axios from 'axios'
import Image from './Image.jsx'
import Pivot from './Pivot.jsx'

@observer
export default class Previewer extends React.Component {
    //Caused too many calls for each preview, slowed things down massively
    //preview on mouseover
    /*fetchImage(param) {
        let {apiEndpoint, selectedId} = this.props.store;
        let ax = axios.create({
            auth: {
                username: 'admin',
                password: 'district'
            },
            headers: {
                'Content-Type' :'image/png'
            }
        });

        ax.get(param)
            .then((response) => {
                console.log(response.data);
                this.props.store.image = response.data;
            });
        
        // fetch(`${apiEndpoint}/${selectedId}`, requestHeaders)
        //     /*.then(function(response) {
        //        return response.status >= 200 && response.status < 300 ? Promise.resolve(response) : Promise.reject(response);
        //     })*/
        //     .then( (response) => {
        //         this.props.store.image = response.data;
        //     })
        //     .catch(error => console.error(error));
    //}

    render() {

        let {apiEndpoint, selectedId, previewId, selectedTitle, previewTitle, image} = this.props.store;

        let imgUrl = selectedId !== "" && previewId === "" ? `${apiEndpoint}/${selectedId}/data` :
            previewId !== "" ? `${apiEndpoint}/${previewId}/data` : "";

        let title = selectedTitle !== "" && previewTitle === "" ? selectedTitle :
            previewTitle !== "" ? previewTitle : "";

        if (imgUrl.includes("reportTables")) {
            return(
              <div>
                  <Pivot src={imgUrl} title={selectedTitle}/>
              </div>
            );
        } else {
            return (
                <div>
                    <Image src={imgUrl} />
                </div>
            );
        }
    }
}