/**
 * Created by Ma Ming on 2017/3/23.
 */
import {observable} from 'mobx';

export default class Modal {
    @observable completed;
    @observable value;
    @observable operation;
    constructor(store, value, completed, operation) {
        this.store = store;
        this.value = value;
        this.completed = completed;
        this.operation = operation;
    }
    toggle() {
        this.completed = !this.completed;
    }
}