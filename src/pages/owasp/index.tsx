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
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import React from 'react'
import { useRouter } from 'next/router'


import Layout from '../../layout'
import PingTool from '../../components/PingTool'

const Demo = () => {
  const router = useRouter()

  return (
    <Layout>
      <Flex pt={100} justify={'center'}>
        <Box>
          <Heading>OWASP</Heading>
          <Text>🟡 A01:2021 Broken Access Control</Text>
          <Text>A02:2021 Cryptographic Failures</Text>
          <Text>✅ A03:2021 Injection</Text>
          <Text>A04:2021 Insecure Design</Text>
          <Text>A05:2021 Security Misconfiguration</Text>
          <Text>A06:2021 Vulnerable and Outdated Components</Text>
          <Text>A07:2021 Identification and Authentication Failures</Text>
          <Text>A08:2021 Software and Data Integrity Failures</Text>
          <Text>A09:2021 Security Logging and Monitoring Failures</Text>
          <Text>A10:2021 Server-side Request Forgery</Text>
        </Box>
      </Flex>
      <Flex justify={'center'}>
        <Button onClick={() => router.push('/owasp/1')} rightIcon={<ArrowForwardIcon />}>Let's Go</Button>
      </Flex>
    </Layout>
  )
}

export default Demo
