import React from 'react'
import { Container, Grid, CircularProgress } from '@material-ui/core'

export const Loader = () => {
    return (
        <Container>
            <Grid justify={'center'} alignItems={'center'}>
                <Grid
                    color={'prymari'}
                    container
                    alignItems={'center'}
                    justify={'center'}
                >
                    <CircularProgress />
                </Grid>
            </Grid>
        </Container>
    )
}
