import React, { useContext } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import styled from 'styled-components'
import { FirebaseContext } from '..'
import { Avatar } from './UI/Avatar'
import { Flex } from './UI/Flex'

//Style//

const Datails = styled.div`
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid rgb(30, 47, 66);
    padding: 10px;
    margin-top: 5px;
    width: 100%;
    position: relative;
    h5 {
        font-weight: 800;
        color: #fff;
    }
    .massages {
        position: absolute;
        bottom: 2px;
        right: 2px;
        font-size: 13px;
        background-color: rgb(174, 194, 215);
        border-radius: 30%;
        color: rgb(22, 33, 46);
        padding: 5px;
    }
    .time {
        position: absolute;
        top: 2px;
        right: 2px;
        font-size: 13px;
    }
`
//Style//

export const Dialogues = () => {
    const items = [1, 2]
    const { auth, firestore } = useContext(FirebaseContext)
    const [users, loading] = useCollectionData(firestore.collection('users'))

    // .doc('Y1HZMgE4VQdowLlirnAj')

    // to.get()
    //     .then((doc) => {
    //         if (doc.exists) {
    //             console.log('Document data:', doc.data())
    //         } else {
    //              doc.data() will be undefined in this case
    //             console.log('No such document!')
    //         }
    //     })
    //     .catch((error) => {
    //         console.log('Error getting document:', error)
    //     })
    // .orderdBy('createdAt')
    // .then((res) => console.log(res))
    // )
    // const users =

    // .get()
    // .then((res) => console.log(res.docs))
    console.log(users)
    // users
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
        <Flex direction="column">
            {loading ? (
                <span>Подождите...</span>
            ) : (
                users.map(({ displayName, photoURL, text, createdAt }) => {
                    console.log(new Date(1619458004))
                    console.log(createdAt)
                    return (
                        <Datails>
                            <Avatar src={photoURL} />
                            <Flex justify="space-between" direction="column">
                                <h5 className="title">{displayName}</h5>
                                <p>{text}</p>
                                <span className="time">18:00</span>
                            </Flex>
                        </Datails>
                    )
                })
            )}
        </Flex>
    )
}
