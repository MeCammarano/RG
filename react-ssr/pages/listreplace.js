import React from 'react'

export default class extends React.Component {
    static async getInitialProps({ req }) {
        const res = await fetch('http://localhost:3000/static/data.json')
        const data = await res.json();
        return { data }
    }

    render() {
        return this.props.data.map(x => <p>{x.name}</p>)
    }
}