import React from 'react'
import {observer} from 'mobx-react'
import axios from 'axios'
import Image from './Image.jsx'
import Pivot from './Pivot.jsx'

@observer
export default class Previewer extends React.Component {
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