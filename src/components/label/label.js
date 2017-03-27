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

    render() {
        let allCompletedButton = {
            ...button,
            background: 'lightblue'
        };
        const divStyle = {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '30px',
            marginBottom: '30px'
        };
        return (
            <div style={divStyle}>
                <button style={allCompletedButton} onClick={this.allCompleted.bind(this)}>全选</button>
                <button style={button} onClick={this.allUnCompleted.bind(this)}>全不选</button>
                <button style={button} onClick={this.unSelect.bind(this)}>反选</button>
            </div>
        )
    }
}