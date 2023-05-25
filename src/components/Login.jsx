import React from 'react'
import { Alert, AlertIcon, Box, Button, Container, Heading, Input, Text } from '@chakra-ui/react';
import { setMsg } from '../store/sliceAlert';
import { useDispatch, useSelector } from 'react-redux';
import { setPassword, setUsername } from '../store/sliceLogin';

const Login = () => {
    const dispatch = useDispatch();
    const message = useSelector(state => state.setAlert);
    const showSpinner = useSelector(state => state.spinner);
    const login = useSelector(state => state.login);

    const handleSubmit = () => {

    }

  return (
    <Container>
        <Heading textAlign='center'>PYMNTS InstaNews</Heading>
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