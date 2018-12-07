import React, { Component } from 'react';
import * as qs from 'query-string';
import { getData, getTemplate } from '../utils';

export class List extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {
        try {
            this.setState({ data: await getData(qs.parse(this.props.location.search).rep) })
        }
        catch (err) {
            console.error(err)
        }
    }

    render() {
        return getTemplate(this.state.data);
    }
}