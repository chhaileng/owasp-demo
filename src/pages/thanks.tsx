import {
  Link,
  Image,
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
  ListIcon,
  Heading,
  Tooltip,
} from '@chakra-ui/react'
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
        <Heading as="h3" fontSize={'9xl'}>Thanks ^^</Heading>
      </Flex>
    </Layout>
  )
}

export default Index
