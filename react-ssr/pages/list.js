import React from 'react'
import { getData, getTemplate, divStyle } from '../utils';

export default class extends React.Component {
    static async getInitialProps({ query }) {
        return { data: await getData(query.rep) }
    }

    render() {
        return (
            <div style={divStyle}>
                <h2>List</h2>
                {getTemplate(this.props.data)}
            </div>
        )
    }
}