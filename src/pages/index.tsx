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
        <Image src="/images/poster.jpg"/>
      </Flex>
      <Flex m={10} justify={'center'}>
        <Button colorScheme={'blue'} rightIcon={<ArrowForwardIcon />} onClick={() => router.push('/owasp')}>Getting Started</Button>
      </Flex>
    </Layout>
  )
}

export default Index
