/**
 * Created by Fredr1kh on 18.11.2016.
 */

import {observable} from 'mobx'

export class Store {
    @observable apiEndpoint = "";

    @observable shareUrl = "";

    @observable selectedId = "";
    @observable selectedTitle = "";

    @observable previewId = "";
    @observable previewTitle = "";

    @observable data;

}

export default new Store
