/**
 * Created by Ma Ming on 2017/3/19.
 */
//
import React from 'react';
import { mobx, observable, computed, autorun } from 'mobx';

import { observer } from 'mobx-react';

let tempIndex = 0;
@observer
class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    // 点击checkbox
    handleChange() {
        this.props.item.toggle();
    }
    // 打开操作框
    operate(e) {
        this.props.list[tempIndex].operation = false;
        this.props.list[this.props.index].operation = true;
        tempIndex = this.props.index;
    }
    // 再来一次
    doAgain() {
        this.props.doAgain(this.props.item.value);
        this.props.list[this.props.index].operation = false;
    }
    // 是否删除
    confirmDelete() {
        this.props.openDialog(true, this.props.index);
        this.props.list[this.props.index].operation = false;
    }

    render() {
        const { value, completed } = this.props.item;
        const spanStyle = {
            width: '450px',
            display: 'inline-block',
            textIndent: '20px',
            color: 'grey',
            height: '45px',
            textDecoration: completed ? 'line-through' : 'none'
        };
        const liStyle = {
            height: '45px',
            lineHeight: '45px',
            listStyleType: 'none',
            borderBottom: '1px solid #afacac',
            borderLeft: '1px solid #afacac',
            borderRight: '1px solid #afacac',
            position: 'relative'
        };
        const imgStyle = {
            verticalAlign: 'middle',
            display: completed ? 'inline-block' : 'none'
        };
        const style = {
            width: '100px',
            display: this.props.list[this.props.index].operation ? 'flex' : 'none',
            height: '60px',
            background: 'lightblue',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'absolute',
            right: '-35px',
            top: '9px',
            zIndex: 1

        };
        const buttonStyle = {
            width: '100px',
            height: '30px',
            border: '0',
            outline: 'none',
            background: '#d7ec83',
            fontSize: '16px'
        };
        return (
            <li style={liStyle}>
                <input type="checkbox" checked={completed} onClick={this.handleChange.bind(this)} />
                <span style={spanStyle}>{value}</span>
                <img style={imgStyle} onClick={this.operate.bind(this)} src="data:image/png;base64,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" />
                <div style={style}>
                    <button style={buttonStyle} onClick={this.doAgain.bind(this)}>再来一次</button>
                    <button style={buttonStyle} onClick={this.confirmDelete.bind(this)}>搞定删除</button>
                </div>
            </li>
        )
    }
}
@observer
export default class List extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul style={{paddingLeft: '0',margin: '0'}}>
                {this.props.list.map((item, key) => {
                    return <Item doAgain={this.props.doAgain} openDialog={this.props.openDialog} list={this.props.list} key={key} index={key}  item={item}/>;
                })}
            </ul>
        )
    }
}

