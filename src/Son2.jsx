import React from 'react';
import propTypes from 'prop-types';
import EM from './EventEmit.js';
export default class Son2 extends React.Component {
    static contextTypes = {
        // 获取到的父组件的上下文信息是可以修改的；
        // 但是并没影响到祖先！！！
        num: propTypes.number,
        saidToGrandpa: propTypes.func
    }
    // constructor(props, context) {
    //     super(props, context);
    // }
    render() {
        return <div style={{border: '1px solid green'}}>
            <h1>this is son2</h1>
            <button onClick={this.saied}>saied</button>
        </div>;
    }
    saied = () => {
        this.context.saidToGrandpa('hello grandpa im son2');
        EM.$emit('saiedToSon1', 'hello brother im son2');
    }
}