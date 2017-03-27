/**
 * Created by Ma Ming on 2017/3/22.
 */
import { mobx, observable, computed, autorun } from 'mobx';
import Model from '../model/model';

class Store {
    @observable isShow = false;
    @observable list = [new Model(this, '吃饭', false, false), new Model(this, '睡觉', false, false), new Model(this, '打豆豆', false, false)];

    // 过滤未完成的

    // 过滤已完成的
    @computed get filterCompleted() {
        // console.log(123);
        // return this.list.filter((item) => {
        //     return item.completed === true;
        // });
        return this.list.pop();

    }
    // 添加
    addItem(value) {
        this.list.push(new Model(this, value, false, false));
    }

    // 删除
    removeItem(index) {
        this.list.splice(index, 1);
    }
    // 全选
    allCompleted () {
         this.list.forEach((item) => {
            item.completed = true;
        });
    }
    // 全不选
    allUnCompleted () {
        this.list.forEach((item) => {
            item.completed = false;
        });
    }

    // 反选
    unSelect() {
        this.list.forEach((item) => {
            item.completed = !item.completed;
        });
    }

}
const store = new Store();
export default store;