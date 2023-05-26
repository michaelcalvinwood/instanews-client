import { Container, Heading, Text, Box, Image } from '@chakra-ui/react'
import {MdOutlineDeleteForever} from 'react-icons/md';
import { setUrls } from '../store/sliceInput';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeUrl } from '../store/sliceInput';

const Url = ({title, link, snippet, domain, id, date}) => {
    const dispatch = useDispatch();

  return (
    <Box display='block' marginTop="2rem">
        <Box display='flex'  justifyContent={'space-between'} alignItems={'center'}>
       
            <Text fontSize='1.25rem' textAlign='left' width="70%" fontWeight={'bold'}>{title}</Text>
            
              <Text textAlign={'left'} width="8rem">{date}&nbsp;</Text>
              <Text textAlign={'left'} width="12rem">{domain}</Text>
              <MdOutlineDeleteForever size="1.75rem" cursor={'pointer'} onClick={() => {
                  dispatch(removeUrl({id}))
              }}/>
            
            
        </Box>
       
       
        
    </Box>
  )
}

export default Url