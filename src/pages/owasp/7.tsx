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
    <OwaspLayout owaspId={7}>
      <Tabs mt={10} isLazy>
        <TabList mb='1em'>
          <Tab>🤔 What ???</Tab>
          <Tab>🖥 Example</Tab>
          <Tab>👮‍♂️ Prevention</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>What is <Text as='span' color='orange.400'>Identification and Authentication Failures</Text>?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                There may be authentication weaknesses if the application permits automated attacks such as credential stuffing, where the attacker has a list of valid usernames and passwords.
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                The malicious data sent by attacker will trick the interpreter to execute bad command to stole data or control the system
              </ListItem>
            </List>
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
