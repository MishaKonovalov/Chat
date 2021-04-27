import React, { useContext } from 'react'
import styled from 'styled-components'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import { Massage } from './Massage'
import { Flex } from './UI/Flex'
import { FirebaseContext } from '../index'
import { Loader } from './Loader'
//Style//

const TalkSection = styled.section`
    border-top: 1px solid rgb(30, 47, 66);
    height: 100vh;
    overflow-y: auto;
`
//Style//

export const Talk = () => {
    const { auth, firestore } = useContext(FirebaseContext)
    // const [massages, loading] = useCollectionData(
    const massages = firestore.collection('test')

    // console.log(items())
    // massages.forEach((item) => console.log(item))
    // massages
    //     .get()
    //     .then((doc) => {
    //         if (doc.exists) {
    //             console.log('Document data:', doc.data())
    //         } else {
    //             console.log('No such document!')
    //         }
    //     })
    //     .catch((error) => {
    //         console.log('Error getting document:', error)
    //     })

    return (
        <TalkSection>
            <Flex direction="column" justify="end" m="70px 10px 0 10px">
                {/* {massages?.map((item) => (
                    <Massage massage={item} />
                ))} */}
            </Flex>
        </TalkSection>
    )
}
