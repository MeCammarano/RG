import React, { Component } from 'react';
import * as qs from 'query-string';
import { getData, getTemplate, divStyle } from '../utils';

const scrambleData = (data) => {
    for (let value of data) {
        for (let i = 0; i < 100000000; i++) {
            const [num1, num2] = [Math.floor(Math.random() * value.length), Math.floor(Math.random() * value.length)];
            [value[num1], value[num2]] = [value[num2], value[num1]];
        }
    }
    return data;
}

export class ListReplace extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        try {
            this.setState({ data: scrambleData(await getData(qs.parse(this.props.location.search).rep)) })
        }
        catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div style={divStyle}>
                <h2>List and Replace</h2>
                {getTemplate(this.state.data)}
            </div>
        )
    }
}