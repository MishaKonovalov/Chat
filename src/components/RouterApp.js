import React, { useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'
import Login from './Login'
import Chat from './Chat'

const RouterApp = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    const publicRoutes = [{ path: '/', Component: Chat }]
    const privateRoutes = [{ path: '/login', Component: Login }]

    return user ? (
        <Switch>
            {publicRoutes.map(({ path, Component }) => {
                return (
                    <Route key={path} to={path} component={Component} exect />
                )
            })}
            <Redirect path="/" />
        </Switch>
    ) : (
        <Switch>
            {privateRoutes.map(({ path, Component }) => {
                return (
                    <Route key={path} to={path} component={Component} exect />
                )
            })}
            <Redirect path="/login" />
        </Switch>
    )
}
export default RouterApp
