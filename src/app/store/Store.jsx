/**
 * Created by Fredr1kh on 18.11.2016.
 */

import {observable} from 'mobx'

export class Store {
    @observable apiEndpoint = "";
    @observable shareUrl = "";
    @observable previous = "";
    @observable shareText = "Derpface";
    @observable selectedId = "";
    @observable previewId = "";
    @observable disableText = false;
    @observable data;

}

export default new Store
