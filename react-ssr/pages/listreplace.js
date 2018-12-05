import React from 'react'
import 'isomorphic-fetch';

export default class extends React.Component {
    static async getInitialProps({ req, query }) {
        const promises = [];
        try {
            for (let i = 0; i < query.rep; i++)
                promises.push(await fetch('http://localhost:3000/static/data.json').then(data => data.json()))
            return { data: await Promise.all(promises) }
        }
        catch (err) {
            console.error(err);
        }
    }

    render() {
        return this.props.data.map(x => x.map((y, i) => <p key={'user-' + i}>{y.name}</p>))
    }
}