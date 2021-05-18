import React, { useContext } from 'react'
import { Route, Switch } from 'react-router'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { FirebaseContext } from '..'
import Chat from './Chat'
import { EmptyPage } from './EmptyPage'
import { SelectPerson } from './SelectPerson'

export const Routes = () => {
    const { firestore } = useContext(FirebaseContext)

    const [dialogues] = useCollectionData(firestore.collection('users'))
    return (
        <Switch>
            {dialogues?.map((route, i) => {
                return (
                    <Route
                        path={`/${route.displayName.split(' ').join('')}`}
                        key={route}
                    >
                        <Chat />
                    </Route>
                )
            })}
            <Route path="/select" component={SelectPerson} />
            <Route path="/" component={EmptyPage} />
        </Switch>
    )
}
