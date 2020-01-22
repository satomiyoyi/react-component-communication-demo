import React from 'react';
import Son1 from './Son1';
import Son2 from './Son2';
export default class Father extends React.Component {
    state = {
        sonSaiedContent: 'nihao',
        name: 'father'
    };
    render() {
        let {sonSaiedContent, name} = this.state;
        return <div style={{border: '2px solid blue'}}>
            <h1>this is {name}</h1>
            <Son1 fathersaiedtoson='hello son1 im father' sonsaidtofather={this.sonSaied}></Son1>
            <Son2 fathersaiedtoson='hello son2 im father'></Son2>
            <div>son said to father : {sonSaiedContent}</div>
        </div>;
    }
    sonSaied = (name, content) => {
        this.setState({sonSaiedContent: content});
    }
}