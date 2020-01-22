import React from 'react';
import propTypes from 'prop-types';
import EM from './EventEmit.js';
export default class Son1 extends React.Component {
    static propTypes = {
        fathersaiedtoson: propTypes.string
    };
    state = {
        brotherContent: ''
    }
    render() {
        return <div style={{border: '1px solid green'}}>
            <h1>this is son1</h1>
            <button onClick={this.saied}>saied</button>
            <div>father said to Son : {this.props.fathersaiedtoson}</div>
            <div>brother said to me : {this.state.brotherContent}</div>
        </div>;
    }
    saied = () => {
        this.props.sonsaidtofather('son1', 'hello father im son1');
    }
    getBrotherInfo = content => {
        this.setState({
            brotherContent: content
        });
    }
    componentWillMount() {
        EM.$on('saiedToSon1', this.getBrotherInfo);
    }
}