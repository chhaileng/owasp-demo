import {
  Link,
  Text,
  Code,
  Image,
  Box,
  Flex,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
// import FileUpload from '../components/FileUpload'
import { ArrowForwardIcon, ExternalLinkIcon, HamburgerIcon, CheckIcon } from '@chakra-ui/icons'

import { Button } from '@chakra-ui/react';
import React from 'react'

import Layout from '../layout'
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Layout>
      <Flex pt={100} justify={'center'} >
        <Image src="/images/poster.jpg"/>
      </Flex>
      <Flex m={10} justify={'center'}>
        <Link _hover={{textDecoration: 'none'}} href='https://chhaileng.com/about' isExternal><Button mx={2} colorScheme={'purple'} rightIcon={<ExternalLinkIcon />}>$(whoami)</Button></Link>
        <Button mx={2} colorScheme={'green'} rightIcon={<HamburgerIcon />} onClick={onOpen}>Contents</Button>
        <Button mx={2} colorScheme={'blue'} rightIcon={<ArrowForwardIcon />} onClick={() => router.push('/owasp')}>Getting Started</Button>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contents</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Purpose
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Pentesting
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Web Application Security
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Top 10 OWASP Security Standard
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                How to Protect
              </ListItem>
            </List>
          </ModalBody>

          <ModalFooter>
            <Button size={'sm'} mx={2} colorScheme={'blue'} rightIcon={<ArrowForwardIcon />} onClick={() => router.push('/owasp')}>Getting Started</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Layout>
  )
}

export default Index
