// export default (props) => {
//     return props.users.map(x => <p>{x.name}</p>)
// }
import 'isomorphic-fetch';

import React from 'react';
export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    async componentDidMount() {
        const res = await fetch('http://localhost:3000/static/data.json')
        const data = await res.json();
        this.setState({
            users: data
        })
    }

    render() {
        return this.state.users.map(x => <p>{x.name}</p>)
    }

}