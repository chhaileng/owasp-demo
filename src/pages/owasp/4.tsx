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
import { CheckIcon, CloseIcon, WarningTwoIcon } from '@chakra-ui/icons'
import React from 'react'

import OwaspLayout from '../../layout/owasp-layout'

const Demo = () => {
  return (
    <OwaspLayout owaspId={4}>
      <Tabs mt={10} isLazy>
        <TabList mb='1em'>
          <Tab>🤔 What ???</Tab>
          <Tab>🖥 Example</Tab>
          <Tab>👮‍♂️ Prevention</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>What is <Text as='span' color='orange.400'>Insecure Design</Text>?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Insecure design is a broad category representing different weaknesses, expressed as "missing or ineffective control design."
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                It happens when the application is not designed with security in mind.
              </ListItem>
            </List>

            <Flex mt={10} justify={'center'}>
              <Image src="/images/deserialization-infographic.jpg" />
              {/* https://portswigger.net/web-security/deserialization */}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>Example</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Missing user input bounds can lead to issues like buffer overflows
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Usage of unsafe APIs or functions can result in compromise
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Applications making use of more privileges than required
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Credential recovery flow which using security questions
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Wrong business logic flow
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                ...
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>How to prevent?</Heading>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Follow best practices, wherever possible
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Build things with security-centric mindset
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Secure design principles must be followed and adhered to for the lifetime of the application/services
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Code reviews must be done thoroughly to avoid any bad code going into the production
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Use a secure development lifecycle with AppSec professionals to help evaluate and design security and privacy-related controls
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Do a source code review and penetration testing.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Develop with test ✌️
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OwaspLayout>
  )
}

export default Demo
