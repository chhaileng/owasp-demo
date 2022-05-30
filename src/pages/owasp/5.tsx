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

const Demo = () => {
  return (
    <OwaspLayout owaspId={5}>
      <Tabs mt={10} isLazy>
        <TabList mb='1em'>
          <Tab>🤔 What ???</Tab>
          {/* <Tab>🖥 Demo</Tab> */}
          <Tab>👮‍♂️ Prevention</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>What are the <Text as='span' color='orange.400'>security mis-configurations</Text>?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Over-permissive privileges are assigned to entities
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Unnecessary features or services are enabled
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Default accounts remain active with unchanged passwords
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Security headers are not sent or are overly permissive
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Over-permissive CORS
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Directory listing
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Sensitive data exposure
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Detail information in error messages that lead attacker to guess more about the system
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Misconfiguration on server tools 🔧
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Security features are not enabled (firewall rules, SELinux, Windows Defender, etc…)
              </ListItem>
            </List>
          </TabPanel>
          {/* <TabPanel>
            <PingTool />
          </TabPanel> */}
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>How to prevent?</Heading>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Disable unnecessary features that are not required in the production environments.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Follow "Principle of Least Privilege". Assign only the required privileges to the entities, to carry out their tasks effectively.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Configure the security headers properly: they should not be over-permissive, else they tend to become ineffective!
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Make sure to update the services and packages being used
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Services must be configured with security in mind.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Follow repeated hardening and patching procedure.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Audit your infrastructure and get regular pentest to ensure high security of your apps/services.
              </ListItem>

            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OwaspLayout>
  )
}

export default Demo
