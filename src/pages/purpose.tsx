import {
  Text,
  List,
  ListItem,
  ListIcon,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Heading,
  Box,
  Flex,
  Image,
  Button,
  Tooltip,
} from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


import Layout from '../layout'

const Demo = () => {
  const router = useRouter()

  return (
    <Layout>
      <Heading my={8} as='h3'>Purpose</Heading>
      
      <List spacing={3}>
        <ListItem>✅ Understanding vulnerabilities that is risky for user and system</ListItem>
        <ListItem>✅ Understanding prevention methods</ListItem>
        <ListItem>✅ Type of Penetration Testing</ListItem>
        <ListItem>✅ Web Application Security Standard</ListItem>
        <ListItem>✅ Understanding attacker's purpose 👀</ListItem>
      </List>

      <Flex mt={10} justify={'center'}>
        <Image opacity={0.5} src="/images/security-2337429640.png" />
      </Flex>

      <Flex mt={8} justify="space-between">
        <Tooltip hasArrow label="Home">
          <Button onClick={() => router.push('/')} leftIcon={<ArrowBackIcon />}>Previous</Button>
        </Tooltip>
        <Tooltip hasArrow label="Penetration Test">
          <Button onClick={() => router.push('/pentest')} rightIcon={<ArrowForwardIcon />}>Next</Button>
        </Tooltip>
      </Flex>
    </Layout>
  )
}

export default Demo
