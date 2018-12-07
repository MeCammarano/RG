import React from 'react';
import 'isomorphic-fetch';

const divStyle = {
    textAlign: 'center'
}

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
    static async getInitialProps({ req, query }) {
        const promises = [];
        try {
            for (let i = 0; i < query.rep; i++)
                promises.push(await fetch('http://localhost:3000/static/data.json').then(data => data.json()))
            return { data: scrambleData(await Promise.all(promises)) }
        }
        catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div style={divStyle}>
                <h2>List and Replace</h2>
                <h2>Size: {this.props.data ? this.props.data.length * this.props.data[0].length : null}</h2>
                <ol>
                    {this.props.data.map(x => x.map((user, i) => <li key={'user-' + i}>{user.name} ({user.email})</li>))}
                </ol>
            </div>
        )
    }
}