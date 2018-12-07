import React from 'react'
import { getData, getTemplate } from '../utils';

export default class extends React.Component {
    static async getInitialProps({ query }) {
        return { data: await getData(query.rep) }
    }

    render() {
        return getTemplate(this.props.data);
    }
}