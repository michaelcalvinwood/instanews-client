import logo from './logo.svg';
import './App.css';
import { Alert, AlertIcon, Box, Button, Container, Heading, Input, Spinner, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { turnOffSpinner, turnOnSpinner } from './store/sliceSpinner';
import { setTopic, setQuery, approveQuery, setUrls, setSeed } from './store/sliceInput';
import { setMsg } from './store/sliceAlert';
import Url from './components/Url';
import * as socket from './utils/socket';
import Login from './components/Login';

function App() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.setAlert);
  const showSpinner = useSelector(state => state.spinner);
  const input = useSelector(state => state.input);
  const login = useSelector(state => state.login);
  
  console.log(login, input);

  const createArticle = () => {
    if (!input.topic) {
      dispatch(setMsg({status: 'error', msg: 'Please enter a topic'}));
      return;
    }

    socket.emit('urls', {urls: input.urls, topic: input.topic, login});

    dispatch(setTopic({topic: ''}));
    dispatch(setQuery({query: ""}));
    dispatch(setSeed({seed: ''}));
    dispatch(setUrls({urls: []}))

  }

  if (!login.isLoggedIn) return <Login />
  
  return (
   <Container marginBottom="2rem">
    <Heading textAlign={'center'}>PYMNTS InstaNews</Heading>
    <Alert status={message.status} marginBottom={'0'} visibility={message.status && message.msg ? 'visible' : 'hidden'}>
        <AlertIcon />
        {message.msg}
    </Alert>
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
      <Box display={'flex'} alignItems={'center'} marginTop=".5rem">
        <Text width='7rem'>Story Angle:</Text>
        <Input type='text' placeholder='Topic to write about' width="50rem" padding=".25rem .5rem" 
          value={input.topic}
          onChange={(e) => {
            dispatch(setMsg({status: 'error', msg: ''}));
            dispatch(setTopic({topic: e.target.value}))
        }}
        />
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <Text width='7rem'>Seed:</Text>
        <Input type='text' placeholder='Optional seed URL' width="50rem" padding=".25rem .5rem" margin=".5rem auto"
          value={input.seed}
          onChange={(e) => dispatch(setSeed({seed: e.target.value}))}
        />
      </Box>
      <Box display={'flex'} alignItems={'center'}>
        <Text width='7rem'>Search:</Text>
        <Input type='text' placeholder='What you would input into Google search' width="50rem" padding=".25rem .5rem" margin=".5rem auto"
          value={input.query}
          onChange={(e) => dispatch(setQuery({query: e.target.value}))}
        />
      </Box>
   
      <Button margin=".5rem auto" width="10rem"
        onClick={() => { 
          dispatch(setUrls({urls: []}))
          dispatch(turnOnSpinner({}));
          socket.emit('input', input)
        
        }}>
          Submit Query
      </Button>
      <Button margin=".5rem auto" width="10rem"
        onClick={createArticle}>
          Create Article
      </Button>
      <Box marginTop=".5rem">
        {input.urls.map(url => {
          return <Url 
            key={url.link}
            title={url.title}
            link={url.link}
            domain={url.domain}
            snippet={url.snippet}
            id={url.id}
            date={url.date}
          />
        })}
        </Box>
      
    </Box>
      
    {showSpinner && <Box height='100vh' width="100vw" position='fixed' top='0' left='0' display='flex' justifyContent={'center'} alignItems={'center'}>
        <Spinner size='xl' color='navy'/>
    </Box> }
   </Container>
  );
}

export default App;
