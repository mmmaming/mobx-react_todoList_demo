/**
 * Created by Ma Ming on 2017/3/21.
 */
import React from 'react';
import { observer } from 'mobx-react';
@observer
export default class Dialog extends React.Component {
    constructor(props) {
        super(props);
        this.cancel = this.cancel.bind(this);
    }
    realDelete() {
        this.props.confirmDelete();
    }
    cancel() {
        this.props.cancel();
    }
   render() {
       const style = {
           width: '200px',
           display: this.props.dialogShow ? 'flex' : 'none',
           height: '100px',
           background: 'lightblue',
           flexDirection: 'row',
           justifyContent: 'space-around',
           alignItems: 'center',
           position: 'absolute',
           top: '50%',
           left: '50%',
           borderRadius: '5px',
           transform: 'translate(-50%,-50%)'
       };
       const buttonStyle = {
           width: '60px',
           height: '25px',
           border: '0',
           outline: 'none',
           background: '#d7ec83',
           fontSize: '12px',
           borderRadius: '5px',
           boxShadow: '3px 3px 5px grey'
       };
       return (
           <div style={style}>
               <button style={buttonStyle} onClick={this.realDelete.bind(this)}>删！</button>
               <button style={buttonStyle} onClick={this.cancel}>算了</button>
           </div>
       )
   }
}