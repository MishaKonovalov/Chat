import React from 'react'
import styled from 'styled-components'

const FlexComponent = styled.div`
    display: flex;
    position: relative;
    justify-content: ${(props) => props.justify || 'start'};
    flex-direction: ${(props) => props.direction || 'row'};
    align-items: ${(props) => props.alignItems || 'stretch'};
    margin: ${(props) => props.m || '0'};
    padding: ${(props) => props.p || '0'};
    flex: ${(props) => props.flex || '1'};
`
export const Flex = (props) => {
    return <FlexComponent {...props} />
}
