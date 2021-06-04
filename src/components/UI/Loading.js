import React from 'react'
import styled, { keyframes } from 'styled-components'
//Styles//
const LoadingSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const animation = keyframes`
    0%{font-size: 100px; opacity: 0.3}
    50%{font-size: 200px; opacity: 1}
    100%{font-size: 100px; opacity: 0.3}
`
const Logo = styled.i`
    color: rgb(2, 145, 234);
    font-size: 120px;
    animation-name: ${animation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
`
//Styles//
export const Loading = () => {
    return (
        <LoadingSection>
            <Logo className="fab fa-telegram" />
        </LoadingSection>
    )
}
