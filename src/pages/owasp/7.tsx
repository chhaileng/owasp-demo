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
  Image
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, WarningTwoIcon } from '@chakra-ui/icons';
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
                There may be authentication weaknesses if the application permits automated attacks such as credential stuffing, where the attacker has a list of valid usernames and passwords
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Application has flaws in the password reset or recovery flows
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                No validation for session identifiers after email/password update, logout, inactivity, re-login
              </ListItem>
            </List>

            <Flex mt={10} justify={'center'}>
              <Image src="/images/password-reset-poisoning.svg" />
              {/* https://portswigger.net/web-security/authentication */}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>Example</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Application allow weak password and permit brute force.
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                No session validation at server side may lead to session hijacking
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
                Implement strong password policy 💪
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Implement multi-factor authentication (MFA)
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Implement password lockout mechanism
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Implement key rotation for session encryption
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OwaspLayout>
  )
}

export default Demo
