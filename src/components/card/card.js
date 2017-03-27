/**
 * Created by Ma Ming on 2017/3/18.
 */
import React from 'react';

import Title from '../title/title';
import List from '../list/list';
import Enter from '../enter/enter';
import Label from '../label/label';
import store from '../store/store';
import Dialog from '../dialog/dialog';
import { mobx, observable, computed, autorun } from 'mobx';
import { observer } from 'mobx-react';

let tempIndex = 0;
@observer
export default class Card extends React.Component {
    @observable dialogShow;
    constructor(props) {
        super(props);
    }
    // 添加
    addItem(arg) {
        this.props.store.addItem(arg);
    }
    // 删除
    confirmDelete() {
        this.props.store.removeItem(tempIndex);
        this.dialogShow = false;
    }
    openDialog(flag, index) {
        this.dialogShow = flag;
        tempIndex = index;
    }
    // 取消删除
    cancel() {
        this.dialogShow = false;
    }

    render() {
        const cardStyle = {
            boxShadow: '2px 2px 5px grey',
            width: '700px',
            height: '100%',
            margin: '100px auto',
            display: 'flex',
            justifyContent: 'center',
            position: 'relative'
        };
        const wrapperStyle = {
            width: '100%',
            padding: '20px',
            alignItems: 'flex-start',
        };
        return (
            <div className="card" style={cardStyle}>
                <div className="wrapper" style={wrapperStyle}>
                    <Title />
                    <List openDialog={this.openDialog.bind(this)} doAgain={this.addItem.bind(this)} list={this.props.store.list} clickSelect={this.clickSelect}  />
                    <Enter clickSelect={this.clickSelect} getEnter={this.addItem.bind(this)} store={this.props.store} />
                    <Label store={this.props.store}/>
                    <Dialog dialogShow={this.dialogShow} confirmDelete={this.confirmDelete.bind(this)} cancel={this.cancel.bind(this)} />
                </div>
            </div>
        )
    }
}