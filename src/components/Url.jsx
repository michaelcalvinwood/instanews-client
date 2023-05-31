import { Container, Heading, Text, Box, Image, Link } from '@chakra-ui/react'
import {MdOutlineDeleteForever} from 'react-icons/md';
import { BsFillSquareFill, BsFillCheckSquareFill} from 'react-icons/bs';
import {FaRegSquare, FaRegCheckSquare } from 'react-icons/fa';

import { setUrls } from '../store/sliceInput';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addChosenUrl, removeChosenUrl } from '../store/sliceInput';

const Url = ({title, link, snippet, domain, id, date, chosenUrls}) => {
  //console.log('Url chosenUrls', chosenUrls)
    const dispatch = useDispatch();

    let test = chosenUrls.find(url => url.id === id);
    

  return (
    <Box display='block' marginTop="2rem">
        <Box display='flex'  justifyContent={'space-between'} alignItems={'center'}>
       
        <Link href={link} target='_blank' cursor={'pointer'} textDecoration={'none'} width="75%">
          <Text fontSize='1.25rem' textAlign='left'  fontWeight={'bold'}>{title}</Text>
        </Link>  
              <Text textAlign={'left'} width="8rem">{date}&nbsp;</Text>
              <Link href={link} target='_blank' cursor={'pointer'} textDecoration={'none'}><Text textAlign={'left'} width="12rem">{domain}</Text></Link>
              {test && <FaRegCheckSquare color='green' size="1.75rem" cursor={'pointer'} onClick={() => {
                  dispatch(removeChosenUrl({id}))
              }}/>
              }
              {!test && <FaRegSquare size="1.75rem" cursor={'pointer'} onClick={() => {
                  dispatch(addChosenUrl({id}))
                }}/>
              }
            
            
        </Box>
        
    </Box>
  )
}

export default Url