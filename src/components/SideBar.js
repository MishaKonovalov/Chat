import React, { useContext } from 'react'
import styled from 'styled-components'
import { FirebaseContext } from '..'
import { Dialogues } from './Dialogues'
import { SearchPanel } from './SearchPanel'
import { SideBarFooter } from './SideBarFooter'

//Style//
const SideBarSection = styled.section`
    min-width: 25%;
    position: relative;
    border-right: 1px solid rgb(30, 47, 66);
    height: 100vh;
    color: rgb(200, 200, 200);
`
//Style//

export const SideBar = () => {
    const { windowInnerWidth } = useContext(FirebaseContext)
    console.log(windowInnerWidth)
    return (
        <SideBarSection>
            <SearchPanel />
            <Dialogues />
            <SideBarFooter />
        </SideBarSection>
    )
}
