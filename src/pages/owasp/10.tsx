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
  Flex,
  Image,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import React from 'react'

import OwaspLayout from '../../layout/owasp-layout'
import TodoListFetchTool from '../../components/TodoListFetchTool'

const Demo = () => {
  return (
    <OwaspLayout owaspId={10}>
      <Tabs mt={10} isLazy>
        <TabList mb='1em'>
          <Tab>🤔 What ???</Tab>
          <Tab>🖥 Demo</Tab>
          <Tab>👮‍♂️ Prevention</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>What is <Text as='span' color='orange.400'>Server-side Request Forgery</Text>?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                SSRF flaws occur whenever a web application is fetching a remote resource without validating the user-supplied URL.
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                It allows attacker to use the application to send a crafted request to an unexpected destination, even when protected by a firewall, VPN, or another type of network access control list (ACL).
              </ListItem>
            </List>

            <Flex mt={10} justify={'center'}>
              <Image src="/images/server-side request forgery.svg" />
              {/* https://portswigger.net/web-security/ssrf */}
            </Flex>
          </TabPanel>
          <TabPanel>
            <TodoListFetchTool />
          </TabPanel>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>How to prevent?</Heading>

            <Heading mb={4} fontSize={'lg'} as ='h4'>Network Level</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Segment remote resource access functionality in separate networks to reduce the impact of SSRF
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Enforce "deny by default" firewall policies or network access control rules to block all but essential intranet traffic.
              </ListItem>
            </List>

            <Heading my={4} fontSize={'lg'} as ='h4'>Application Level</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Sanitize and validate all client-supplied input data
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Enforce the URL schema, port, and destination with a positive allow list
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Do not send raw responses to clients
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Disable HTTP redirections
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Be aware of the URL consistency to avoid attacks such as DNS rebinding and "time of check, time of use" (TOCTOU) race conditions
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OwaspLayout>
  )
}

export default Demo
