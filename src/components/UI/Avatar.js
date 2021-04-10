import React from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.jpeg'

const AvatarImg = styled.img`
    margin-right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

export const Avatar = () => {
    return <AvatarImg src={avatar} alt="" />
}
