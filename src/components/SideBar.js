import React, { useContext } from 'react'
import styled from 'styled-components'
import { FirebaseContext } from '..'
import { Dialogues } from './Dialogues'
import { SearchPanel } from './SearchPanel'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

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
    const { auth, firestore } = useContext(FirebaseContext)
    // const [massages, loading] = useCollectionData(

    return (
        <SideBarSection>
            <SearchPanel />
            <Dialogues />
            <i
                className="fas fa-sign-out-alt"
                onClick={() => auth.signOut()}
            ></i>
        </SideBarSection>
    )
}
