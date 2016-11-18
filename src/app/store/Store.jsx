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

    addItem(item) {
       this.items.push(new Item(item.id, item.displayName));
    }

    reset() {
        this.items.replace([]);
    }

}

export default new Store
