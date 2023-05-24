import { Container, Heading, Text, Box, Image } from '@chakra-ui/react'
import {MdOutlineDeleteForever} from 'react-icons/md';
import { setUrls } from '../store/sliceInput';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUrl } from '../store/sliceInput';

const Url = ({title, link, snippet, domain, id}) => {
    const dispatch = useDispatch();

  return (
    <Box display='block' marginTop="2rem">
        <Box display='flex' alignItems={'center'} justifyContent={'space-between'}>
       
            <Heading size='xs' textAlign='center'>{title}</Heading>
            <MdOutlineDeleteForever size="1.75rem" cursor={'pointer'} onClick={() => {
                dispatch(removeUrl({id}))
            }}/>
            
        </Box>
        <Text textAlign={'left'}>{snippet}</Text>
        <Text textAlign={'left'} fontWeight='bold'> {link}</Text>
        
    </Box>
  )
}

export default Url