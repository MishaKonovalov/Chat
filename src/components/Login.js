import React, { useContext } from 'react'
import { Context } from '../index'
import firebase from 'firebase'
import { Container, Grid, Button } from '@material-ui/core'

const Login = () => {
    const { auth } = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const { user } = await auth.signInWithPopup(provider)
        console.log(user)
    }
    return (
        <Container>
            <Grid justify={'center'} alignItems={'center'}>
                <Grid
                    style={{
                        height: '300px',
                        background: '#c5c5c5',
                        marginTop: '70px',
                    }}
                    color={'prymari'}
                    container
                    alignItems={'center'}
                    justify={'center'}
                >
                    <Button onClick={login} color={'primary'}>
                        Войти с помощью Google
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Login
