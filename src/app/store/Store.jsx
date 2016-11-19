/**
 * Created by Fredr1kh on 18.11.2016.
 */

import {observable, computed} from 'mobx'

class Item {
    @observable id;
    @observable displayName;

    constructor(id, displayName) {
        this.id = id;
        this.displayName = displayName;
    }
}

class Store {
    @observable items = [];
    @observable apiEndpoint = "";
    @observable shareUrl = "";
    @observable previewUrl = "";
    @observable textArea = "Comments section";


    addItem(item) {
       this.items.push(new Item(item.id, item.displayName));
    }

    reset() {
        this.items.replace([]);
    }

    setItem(id) {
        this.shareUrl = this.apiEndpoint+"/"+id;
        this.previewUrl = this.shareUrl+"/data";
    }

    @computed get preview() {
        return this.previewUrl;
    }




}

export default Store
export { Store }