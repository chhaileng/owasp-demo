import {
  Text,
  List,
  ListItem,
  Heading,
  Flex,
  Image,
  Button,
  Tooltip,
} from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'


import Layout from '../../layout'

const Demo = () => {
  const router = useRouter()

  return (
    <Layout>
      <Heading my={8} as='h3'>OWASP: Open Web Application Security Project</Heading>
      <List spacing={3}>
        <ListItem>
          <Text as="span" color="orange.500" fontWeight={'bold'}>OWASP</Text> is a security standard of Web Application for developers to understand risks of Web Application.
        </ListItem>
        <ListItem>
        <Text as="span" color="orange.500" fontWeight={'bold'}>OWASP</Text> is a security standard of Web Application for developers to understand risks of Web Application.
        </ListItem>
      </List>
      
      <Heading my={8} as='h3' fontSize={'xl'}>OWASP Top Ten 2021</Heading>
      <Flex justify={'space-between'}>
        <List spacing={3}>
          <ListItem><Link href="/owasp/1">✅ A01:2021 Broken Access Control</Link></ListItem>
          <ListItem><Link href="/owasp/2">✅ A02:2021 Cryptographic Failures</Link></ListItem>
          <ListItem><Link href="/owasp/3">✅ A03:2021 Injection</Link></ListItem>
          <ListItem><Link href="/owasp/4">✅ A04:2021 Insecure Design</Link></ListItem>
          <ListItem><Link href="/owasp/5">✅ A05:2021 Security Misconfiguration</Link></ListItem>
          <ListItem><Link href="/owasp/6">✅ A06:2021 Vulnerable and Outdated Components</Link></ListItem>
          <ListItem><Link href="/owasp/7">✅ A07:2021 Identification and Authentication Failures</Link></ListItem>
          <ListItem><Link href="/owasp/8">✅ A08:2021 Software and Data Integrity Failures</Link></ListItem>
          <ListItem><Link href="/owasp/9">✅ A09:2021 Security Logging and Monitoring Failures</Link></ListItem>
          <ListItem><Link href="/owasp/10">✅ A10:2021 Server-side Request Forgery</Link></ListItem>
        </List>
        <Image h={150} objectFit={'cover'} src="/images/owasp.jpg" />
      </Flex>
      <Flex mt={8} justify="space-between">
        <Tooltip hasArrow label="Penetration Test">
          <Button onClick={() => router.push('/pentest')} leftIcon={<ArrowBackIcon />}>Previous</Button>
        </Tooltip>
        <Tooltip hasArrow label="Broken Access Control">
          <Button onClick={() => router.push('/owasp/1')} rightIcon={<ArrowForwardIcon />}>Let's Go</Button>
        </Tooltip>
      </Flex>
    </Layout>
  )
}

export default Demo
