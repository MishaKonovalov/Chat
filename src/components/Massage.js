import React, { useContext } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import styled, { css } from 'styled-components'
import { FirebaseContext } from '..'

//Style//

const MassageSection = styled.div`
    display: flex;
    margin: 5px;
    max-width: 45%;
    padding: 5px 15px;
    border-radius: 15px;
    position: relative;
    line-height: 1.5em;
    p {
        color: #fff;
        word-wrap: break-word;
        overflow: hidden;
    }
    align-self: ${({ left }) => (!left ? 'flex-start' : 'flex-end')};
    background: ${({ left }) =>
        !left ? 'rgb(30, 47, 66)' : 'rgb(52, 103, 155)'};
    ::after,
    ::before {
        ${({ left }) =>
            left
                ? css`
                      left: 100%;
                  `
                : css`
                      right: 100%;
                  `}
        content: '';
        position: absolute;
        bottom: 0.3em;
        width: 2.8em;
        height: 1.8em;
        border-radius: 50%;
        background: rgb(20, 32, 47);
    }

    ::before {
        border-top: none;
        height: 0.9em;
        border-radius: 0 0 50% 50% / 0 0 100% 100%;
        background: ${({ left }) =>
            !left ? 'rgb(30, 47, 66)' : 'rgb(52, 103, 155)'};
        ${({ left }) =>
            left
                ? css`
                      margin-left: -0.9em;
                  `
                : css`
                      margin-right: -0.9em;
                  `}
    }
`

//Style//

export const Massage = ({ massage }) => {
    const { auth } = useContext(FirebaseContext)
    const [user] = useAuthState(auth)

    const { text } = massage
    const left = user.uid === massage.uid
    return (
        <MassageSection left={left}>
            <p>{text}</p>
        </MassageSection>
    )
}
