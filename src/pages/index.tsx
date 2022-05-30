import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  Image,
  Box,
  Flex,
  Link,
  useToast,
} from '@chakra-ui/react'
// import FileUpload from '../components/FileUpload'
import { ArrowForwardIcon } from '@chakra-ui/icons'

import { Button } from '@chakra-ui/react';
import React from 'react'

import Layout from '../layout'
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  return (
    <Layout>
      <Flex pt={100} justify={'center'} >
        <Image src="https://scontent.fpnh4-1.fna.fbcdn.net/v/t39.30808-6/283301351_472187268039376_334867490802790737_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=340051&_nc_ohc=LEWvqPxo7i8AX_g45-A&_nc_ht=scontent.fpnh4-1.fna&oh=00_AT8XUi8vm7lP3QFpQYV7DyLDqLo8nLAuwg_TZ59nHyCxPQ&oe=629A1C5F"/>
      </Flex>
      <Flex m={10} justify={'center'}>
        <Button colorScheme={'blue'} rightIcon={<ArrowForwardIcon />} onClick={() => router.push('/owasp')}>Getting Started</Button>
      </Flex>
    </Layout>
  )
}

export default Index
