import React from 'react'
import styled from 'styled-components'

const LoaderSection = styled.div`
    flex: 0.9;
    height: 50px;
    border-radius: 50px;
    background-color: rgb(10, 10, 10, 0.2);
`
export const Loader = () => {
    return <LoaderSection />
}
