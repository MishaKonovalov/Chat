import React, { useContext } from 'react'
import { Route, Switch } from 'react-router'
import Chat from './Chat'
import { EmptyPage } from './EmptyPage'
import { SelectPerson } from './SelectPerson'
import { DialoguesContext } from '../App'

export const Routes = () => {
    const { dialogues } = useContext(DialoguesContext)

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
