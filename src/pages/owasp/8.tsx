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
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import React from 'react'

import OwaspLayout from '../../layout/owasp-layout'
import PingTool from '../../components/PingTool'

const Demo = () => {
  return (
    <OwaspLayout owaspId={8}>
      <Tabs mt={10} isLazy>
        <TabList mb='1em'>
          <Tab>🤔 What ???</Tab>
          <Tab>🖥 Demo</Tab>
          <Tab>👮‍♂️ Prevention</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>What is <Text as='span' color='orange.400'>Software and Data Integrity Failures</Text>?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                An application is vulnerable to attack when user-supplied data is not validated, filtered, or sanitized by the application
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                The malicious data sent by attacker will trick the interpreter to execute bad command to stole data or control the system
              </ListItem>
            </List>

            <Heading my={4} fontSize={'xl'} as='h3'>What are the injections?</Heading>
            <Text>SQL Injection, NoSQL Injection, Remote Code Execution, XSS, Local File Inclusion, ...</Text>
          </TabPanel>
          <TabPanel>
            <PingTool />
          </TabPanel>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>How to prevent?</Heading>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Validate and sanitize user input 💪
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Clean user input data and take care of keywords, commands, special characters
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                use up-to-date external libraries
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OwaspLayout>
  )
}

export default Demo
