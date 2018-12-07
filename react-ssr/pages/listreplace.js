import React from 'react';
import { getData, getTemplate } from './utils';


const scrambleData = (data) => {
    for (let value of data) {
        for (let i = 0; i < 100000000; i++) {
            const [num1, num2] = [Math.floor(Math.random() * value.length), Math.floor(Math.random() * value.length)];
            [value[num1], value[num2]] = [value[num2], value[num1]];
        }
    }
    return data;
}

export default class extends React.Component {
    static async getInitialProps({ query }) {
        const promises = [];
        try {
            return { data: scrambleData(await getData(query.rep)) }
        }
        catch (err) {
            console.error(err);
        }
    }

    render() {
        return getTemplate(this.props.data);
    }
}