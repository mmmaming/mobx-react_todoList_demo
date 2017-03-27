/**
 * Created by Ma Ming on 2017/3/19.
 */
import React from 'react';

export default class Title extends React.Component {
    render() {
        const titleStyle = {
            borderBottom: '5px solid #e6261d',
            height: '50px',
            width: '100%',
            textAlign: 'center',
            lineHeight: '50px',
            background: '#73c7ef',
            color:' #FFF'
        };
        return (
            <div className="title" style={titleStyle}>我的todoList</div>
        )
    }
}