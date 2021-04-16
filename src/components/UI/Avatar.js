import React from 'react'
import styled from 'styled-components'

const LoadingLogo = styled.i`
    color: rgb(175, 175, 175, 0.2);
    font-size: 50px;
`
const AvatarImg = styled.img`
    margin-right: 15px;
    padding: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const Avatar = ({ src, loading }) => {
    return <AvatarImg src={src} />
}
