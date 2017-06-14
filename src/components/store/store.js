/**
 * Created by Ma Ming on 2017/3/22.
 */
import {mobx, observable, computed, autorun, action} from 'mobx';
import Model from '../model/model';

class Store {
  @observable list   = [new Model(this, '吃饭', false, false), new Model(this, '睡觉', false, false), new Model(this, '打豆豆', false, false)];

  constructor() {
    this.listCopy = this.list;
    this.destroyAutorun = autorun(() => {
      console.log(`总共有${this.list.length}条数据`);
    })
  }

  @computed get listLength() {
    return this.list.length;
  }

  // 也可以在列表循环展示时，做数据过滤，而不是提供已经过滤好的数组
  // 过滤未完成的
  @action filterUnCompleted() {
    this.list = this.listCopy.filter((item) =>
        item.completed === false
    );
  }

  // 过滤已完成的
  @action filterCompleted() {
    this.list = this.listCopy.filter((item) =>
        item.completed === true
    );
  }

  // 展示所有
  @action filterAll() {
    this.list = this.listCopy;
  }

  // 添加
  @action addItem(value) {
    this.list.push(new Model(this, value, false, false));
  }

  // 删除
  @action removeItem(index) {
    this.list.splice(index, 1);
  }

  // 全选
  @action allCompleted() {
    this.list.forEach((item) => {
      item.completed = true;
    });
  }

  // 全不选
  @action allUnCompleted() {
    this.list.forEach((item) => {
      item.completed = false;
    });
  }

  // 反选
  @action unSelect() {
    this.list.forEach((item) => {
      item.completed = !item.completed;
    });
  }

}
const store = new Store();
export default store;