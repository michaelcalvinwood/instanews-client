import logo from './logo.svg';
import './App.css';
import { Alert, AlertIcon, Box, Button, Container, Heading, Input, Spinner, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { turnOffSpinner, turnOnSpinner } from './store/sliceSpinner';
import { setTopic, setQuery, approveQuery } from './store/sliceInput';
import * as socket from './utils/socket';

function App() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.setAlert);
  const showSpinner = useSelector(state => state.spinner);
  const input = useSelector(state => state.input);

  console.log(input);

  return (
   <Container >
    <Heading textAlign={'center'}>PYMNTS InstaNews</Heading>
    <Alert status={message.status} marginBottom={'0'} visibility={message.status && message.msg ? 'visible' : 'hidden'}>
        <AlertIcon />
        {message.msg}
    </Alert>
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box display={'flex'} alignItems={'center'}>
        <Text width='7rem'>Topic:</Text>
        <Input type='text' placeholder='Topic to write about' width="50rem" padding=".25rem .5rem" 
          value={input.topic}
          onChange={(e) => dispatch(setTopic({topic: e.target.value}))}
        />
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <Text width='7rem'>Query:</Text>
        <Input type='text' placeholder='Google query to get information' width="50rem" padding=".25rem .5rem" margin=".5rem auto"
          value={input.query}
          onChange={(e) => dispatch(setQuery({query: e.target.value}))}
        />
      </Box>
      <Button margin=".5rem auto" 
        onClick={() => socket.emit('input', input)}>
          Submit Query
      </Button>
      <Button margin=".5rem auto" 
        onClick={() => socket.emit('input', input)}>
          Approve Query
      </Button>
      
    </Box>
      
    {showSpinner && <Box height='100vh' width="100vw" position='fixed' top='0' left='0' display='flex' justifyContent={'center'} alignItems={'center'}>
        <Spinner size='xl' color='navy'/>
    </Box> }
   </Container>
  );
}

export default App;
