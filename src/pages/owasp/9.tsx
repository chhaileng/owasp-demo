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
    <OwaspLayout owaspId={9}>
      <Tabs mt={10} isLazy>
        <TabList mb='1em'>
          <Tab>🤔 What ???</Tab>
          <Tab>🖥 Demo</Tab>
          <Tab>👮‍♂️ Prevention</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>What are the <Text as='span' color='orange.400'>Security Logging and Monitoring Failures</Text>?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Login and failed attempts not being logged
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Logs not backed up, in case of failure of the app server holding the logs locally
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Vague or improper logs that do not provide any valuable information or insights
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Monitoring systems not able to detect suspicious activity or not able to raise alerts in (near) real time
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Missing monitoring and alerting systems
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Logs not protected for integrity
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
                Ensure to log all login and failed attempts
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Maintain a copy of the logs in case the server suffers issues
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Ensure that the logs contains all the relevant data and are well-formatted to be consumed by other tools or log management solutions
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Test if your monitoring systems that can suspicious activity and ensure the alerting is done in near real time
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                
Ensure that your logs are tamper-proof
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OwaspLayout>
  )
}

export default Demo
