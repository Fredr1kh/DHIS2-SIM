/**
 * Created by Fredr1kh on 18.11.2016.
 */

import {observable} from 'mobx'

class Item {
    @observable id;
    @observable displayName;

    constructor(id, displayName) {
        this.id = id;
        this.displayName = displayName;
    }
}

export class Store {
    @observable items = [];
    @observable apiEndpoint = "";
    @observable shareUrl = "";

    addItem(item) {
       this.items.push(new Item(item.id, item.displayName));
    }

    reset() {
        this.items.replace([]);
    }

    setItem(id) {
        this.shareUrl = this.apiEndpoint+"/"+id;
    }

}

export default new Store
