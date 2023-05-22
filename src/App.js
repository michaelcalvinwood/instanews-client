import logo from './logo.svg';
import './App.css';
import { Alert, AlertIcon, Box, Container, Heading, Input, Spinner, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { turnOffSpinner, turnOnSpinner } from './store/sliceSpinner';

function App() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.setAlert);
  const showSpinner = useSelector(state => state.spinner);

  return (
   <Container >
    <Heading textAlign={'center'}>PYMNTS InstaNews</Heading>
    <Alert status={message.status} marginBottom={'0'} visibility={message.status && message.msg ? 'visible' : 'hidden'}>
        <AlertIcon />
        {message.msg}
    </Alert>
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box display={'flex'} alignItems={'center'}>
        <Text width='7rem'>Source URL:</Text>
        <Input type='text' placeholder='URL of the story source' width="50rem" textAlign={'center'} padding=".25rem .5rem" />
      </Box>
    </Box>
    {showSpinner && <Box height='100vh' width="100vw" position='fixed' top='0' left='0' display='flex' justifyContent={'center'} alignItems={'center'}>
        <Spinner size='xl' color='navy'/>
    </Box> }
   </Container>
  );
}

export default App;
