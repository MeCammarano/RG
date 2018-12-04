import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./ssr'), {
    ssr: false
})

export default () => (
    <DynamicComponentWithNoSSR />
)