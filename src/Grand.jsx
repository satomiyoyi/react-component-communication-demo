import React from 'react';
import Father from './Father';
import propTypes from 'prop-types';

export default class Grand extends React.Component {
    static childContextTypes = {
        num: propTypes.number,
        saidToGrandpa: propTypes.func
    }
    getChildContext() {
        // 第一次在getIntialState 之后
        // 每当祖先组件中的状态改变，重新渲染的时候 此钩子函数也会被重新执行。
        return {
            num: this.state.num,
            saidToGrandpa: this.saidToGrandpa
        };
    }
    // 一般要把挂载到祖先上下文中的数据 挂载到状态上
    // 后期只需要把祖先的状态改变，上下文中的信息也会跟着改变
    // 祖先和后代元素 均重新渲染 获取到最新的上下文西信息
    state = {
        num: 0,
        grandSonSaied: ''
    };
    render() {
        return <div style = {{border: '3px solid red', width: '300px'}}>
            <h1>this is grandpa</h1>
            <div>{this.state.grandSonSaied}</div>
            <Father></Father>
        </div>;
    }
    saidToGrandpa = content => {
        this.setState({
            grandSonSaied: content
        });
    }
}