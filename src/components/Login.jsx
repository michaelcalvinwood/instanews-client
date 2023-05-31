import React from 'react'
import { Alert, AlertIcon, Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { setMsg } from '../store/sliceAlert';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setUsername, setIsLoggedIn } from '../store/sliceLogin';
import * as wp from '../utils/wordpress';

const Login = () => {
    const dispatch = useDispatch();
    const message = useSelector(state => state.setAlert);
    const showSpinner = useSelector(state => state.spinner);
    const login = useSelector(state => state.login);
    const input = useSelector(state => state.input);

    const handleSubmit = async () => {
        const token = await wp.getJWT('delta.pymnts.com', login.username, login.password);
        console.log('token', token);

        if (token === false) return dispatch(setMsg({status: 'error', msg: 'invalid credentials'}))
            
        dispatch(setIsLoggedIn(true));
    }

  return (
    <Container>
        <Heading textAlign='center'>PYMNTS InstaNews</Heading>
        {input.articleId && <Heading textAlign={'center'} size={'sm'} color={'navy'}>{input.articleId}</Heading>}
        <Alert status={message.status} marginBottom={'0'} visibility={message.status && message.msg ? 'visible' : 'hidden'}>
        <AlertIcon />
        {message.msg}
        </Alert>
        <Box display="flex" alignItems={'center'} margin=".5rem auto .5rem auto" width="fit-content" flexDirection={'column'}>
            <Text width="5rem;">Username</Text>
            <Input type="text" width="20rem" value={login.username} onChange={(e) => {
                dispatch(setMsg({status: 'success', msg: ''}))
                dispatch(setUsername({ username: e.target.value}));
            }}></Input>
        </Box>
        <Box display="flex" alignItems={'center'} margin="auto" width="fit-content" flexDirection={'column'}>
            <Text width="5rem;">Password</Text>
            <Input type="password" width="20rem" value={login.password} onChange={(e) => {
                dispatch(setMsg({status: 'success', msg: ''}))
                dispatch(setPassword({ password: e.target.value}));
            }}></Input>
        </Box>
        <Button display='flex' margin='1rem auto' width={'fit-content'} onClick={handleSubmit}>Submit</Button>
    </Container>
  )
}

export default Login