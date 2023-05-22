import logo from './logo.svg';
import './App.css';
import { Alert, AlertIcon, Box, Container, Heading, Spinner } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function App() {

  const message = useSelector(state => state.setAlert);
  const showSpinner = useSelector(state => state.spinner);

  return (
   <Container >
    
    <Heading textAlign={'center'}>PYMNTS InstaNews</Heading>
    <Alert status={message.status} marginBottom={'0'} visibility={message.status && message.msg ? 'visible' : 'hidden'}>
        <AlertIcon />
        {message.msg}
    </Alert>
    <Box>

    </Box>
    {showSpinner && <Box height='100vh' width="100vw" position='fixed' top='0' left='0' display='flex' justifyContent={'center'} alignItems={'center'}>
        <Spinner size='xl' color='navy'/>
    </Box> }
   </Container>
  );
}

export default App;
