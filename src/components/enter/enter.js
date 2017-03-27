/**
 * Created by Ma Ming on 2017/3/19.
 */
import React from 'react';

import button from '../../common/style/_buttonBase';
const ENTERCODE = 13;
export default class Enter extends React.Component {

    constructor(props) {
        super(props);
    }
    handleClick() {
        if (this.text.value.trim() !== "") {
            this.props.getEnter(this.text.value);
            this.text.value = '';
        }

    }
    enterEvent(e) {
        e.keyCode === ENTERCODE && this.text.value.trim() !== "" && this.handleClick();
    }


    render() {
        const inputStyle = {
            outline: 'none',
            border: '0',
            borderBottom: '1px solid #afacac',
            width: '558px',
            height: '34px',
            fontSize: '16px'

        };
        let buttonStyle = {
            ...button,
            marginLeft: '20px'
        };
        const divStyle = {
            marginTop: '25px'
        };
        return (
            <div style={divStyle}>
                <input style={inputStyle} type="text"  onKeyUp={this.enterEvent.bind(this)} placeholder="搞点啥？" ref={(input) => { this.text = input;}} />
                <button style={buttonStyle} onClick={this.handleClick.bind(this)}>搞起</button>
            </div>
        )
    }
}