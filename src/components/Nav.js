import { AppBar, Button, Grid, Toolbar, IconButton } from '@material-ui/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../index'

const Nav = () => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar color={'primary'}>
            <Toolbar>
                <IconButton color="inherit">Chat App</IconButton>
                <Grid container justify="flex-end">
                    {user ? (
                        <Button
                            onClick={() => auth.signOut()}
                            color={'inherit'}
                        >
                            Выйти
                        </Button>
                    ) : (
                        <Button color={'inherit'}>Логин</Button>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
export default Nav
