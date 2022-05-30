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
  Tag,
  HStack,
  Tooltip,
  Image,
  Flex,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, WarningTwoIcon } from '@chakra-ui/icons'
import React from 'react'

import OwaspLayout from '../../layout/owasp-layout'
import PingTool from '../../components/PingTool'

const Demo = () => {
  return (
    <OwaspLayout owaspId={1}>
      <Tabs mt={10} isLazy>
        <TabList mb='1em'>
          <Tab>🤔 What ???</Tab>
          <Tab>🐛 Example</Tab>
          <Tab>👮‍♂️ Prevention</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>What is <Text as='span' color='orange.400'>Broken Access Control</Text>?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Access control enforces policy such that users cannot act outside of their intended permissions.
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Failures may lead to unauthorized information disclosure, modification, or destruction of all data or performing a business function outside the user's limits.
              </ListItem>
            </List>
            <Flex mt={10} justify={'center'}>
              <Image src="/images/access-control.svg" />
              {/* https://portswigger.net/web-security/access-control */}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>Example</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Unauthenticated user can make a request to API for viewing all users
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                User A can modify information of User B
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Normal user has a permission to access Admin user
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
                Implement user role and permission
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Configure CORS (Cross Origin Resource Sharing)
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Access controls for all HTTP methods
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Implement two-ways TLS
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Server-side valiation
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Use private network
              </ListItem>

              <Heading mt={4} fontSize={'xl'} as ='h3'>Other Keywords</Heading>
              <HStack mb={8} mt={2}>
                <Tooltip label="Insecure Direct Object References">
                  <Tag _hover={{cursor: 'pointer'}} colorScheme={'purple'}>IDOR</Tag>
                </Tooltip>
                <Tooltip label="User Privilege Escalation">
                  <Tag _hover={{cursor: 'pointer'}} colorScheme={'purple'}>Privilege Escalation</Tag>
                </Tooltip>
                <Tooltip label="File Upload Vulnerability">
                  <Tag _hover={{cursor: 'pointer'}} colorScheme={'purple'}>File Upload Vulnerability</Tag>
                </Tooltip>
              </HStack>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OwaspLayout>
  )
}

export default Demo
