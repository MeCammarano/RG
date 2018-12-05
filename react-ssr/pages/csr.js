import dynamic from 'next/dynamic'
import 'isomorphic-fetch';
// import HelloComponent from '../components/hello';
import '../components/hello';
// const DynamicComponentWithNoSSR = dynamic(() => import('../components/hello'), {
//     ssr: false
// })

const DynamicComponentWithNoSSR = dynamic({
    loader: () => import("../components/hello"),
    ssr: false
});

import React from 'react'

export default class extends React.Component {
    static async getInitialProps({ req }) {
        const res = await fetch('http://localhost:3000/static/data.json')
        const data = await res.json();
        return { data }
    }

    render() {
        return (
            // <HelloComponent users={this.props.data} />
            <DynamicComponentWithNoSSR />
        )
    }
}

// export default () => (
//     <DynamicComponentWithNoSSR />
// )