import { Container, Heading, Text, Box } from '@chakra-ui/react'
import React from 'react'

const Url = ({title, link, snippet}) => {
  return (
    <Box>
        <Heading size='sm' textAlign='center' margin='.5rem'>{title}</Heading>
        <Text>{snippet}</Text>
        <Text fontSize=".75rem" fontStyle='italic' textAlign={'center'}>{link}</Text>
    </Box>
  )
}

export default Url