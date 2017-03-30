/**
 * Created by Ma Ming on 2017/3/20.
 */
import React from 'react';
import { observer } from 'mobx-react';
import button from '../../common/style/_buttonBase';
@observer
export default class Label extends React.Component {
    constructor() {
        super();
    }
    // 全选
    allCompleted() {
        this.props.store.allCompleted();
    }
    // 全不选
    allUnCompleted() {
        this.props.store.allUnCompleted();

    }
    // 反选
    unSelect() {
        this.props.store.unSelect();
    }
    // 过滤已完成的
    filterCompleted() {
        this.props.store.filterCompleted();
    }
    // 过滤未完成的
    filterUnCompleted() {
        this.props.store.filterUnCompleted();
    }
    // 筛选出所有
    filterAll() {
        this.props.store.filterAll();
    }

    render() {
        let allCompletedButton = {
            ...button,
            background: 'lightblue'
        };
        const divStyle = {
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            alignContent: 'space-between',
            marginTop: '30px',
            marginBottom: '30px'
        };

        const buttonMargin = {
            margin: '0 50px'
        }
        return (
            <div style={divStyle}>
                <button style={{allCompletedButton, ...buttonMargin}} onClick={this.allCompleted.bind(this)}>全选</button>
                <button style={{button, ...buttonMargin}} onClick={this.allUnCompleted.bind(this)}>全不选</button>
                <button style={{button, ...buttonMargin}} onClick={this.unSelect.bind(this)}>反选</button>
                <button style={{button, ...buttonMargin}} onClick={this.filterCompleted.bind(this)}>已完成</button>
                <button style={{button, ...buttonMargin}} onClick={this.filterUnCompleted.bind(this)}>未完成</button>
                <button style={{button, ...buttonMargin}} onClick={this.filterAll.bind(this)}>所有</button>
            </div>
        )
    }
}