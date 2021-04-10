import React from 'react'
import styled from 'styled-components'
import { Dialogues } from './Dialogues'
import { SearchPanel } from './SearchPanel'

//Style//
const SideBarSection = styled.section`
    flex: 0.25;
    position: relative;
    border-right: 1px solid rgb(30, 47, 66);
    height: 100vh;
    color: rgb(200, 200, 200);
    overflow-y: auto;
`
//Style//

export const SideBar = () => {
    return (
        <SideBarSection>
            <SearchPanel />
            <Dialogues />
        </SideBarSection>
    )
}
