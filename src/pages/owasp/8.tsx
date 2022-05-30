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
import PingTool from '../../components/PingTool'

const Demo = () => {
  return (
    <OwaspLayout owaspId={8}>
      <Tabs mt={10} isLazy>
        <TabList mb='1em'>
          <Tab>🤔 What ???</Tab>
          <Tab>🖥 Example</Tab>
          <Tab>👮‍♂️ Prevention</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>What is <Text as='span' color='orange.400'>Software and Data Integrity Failures</Text>?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Relate to code and infrastructure that does not protect against integrity violations.
              </ListItem>
            </List>

            <Flex mt={10} justify={'center'}>
              <Image src="/images/software-integrity.jpeg" />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>Example</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                An application relies upon auto-update functionality, where updates are downloaded without sufficient integrity verification and applied to the previously trusted application.
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Attackers could potentially upload their own updates to be distributed and run on all installations.
              </ListItem>
            </List>
          </TabPanel>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>How to prevent?</Heading>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Use external libraries, modules, dependency with integrity checksum verification
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Use trusted content delivery networks (CDNs)
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Update libraries, modules, software, tools with integrity verification
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OwaspLayout>
  )
}

export default Demo
