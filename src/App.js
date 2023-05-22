import logo from './logo.svg';
import './App.css';
import { Alert, AlertIcon, Container, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function App() {

  const message = useSelector(state => state.setAlert);

  return (
   <Container >
    
    <Heading textAlign={'center'}>PYMNTS InstaNews</Heading>
    <Alert status={message.status} marginBottom={'0'} visibility={message.status && message.msg ? 'visible' : 'hidden'}>
          <AlertIcon />
          {message.msg}
      </Alert>

   </Container>
  );
}

export default App;
