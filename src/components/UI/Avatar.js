import React from 'react'
import styled from 'styled-components'

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
