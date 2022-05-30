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
  HStack,
  Tooltip,
  Tag,
  Flex,
  Image,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import React from 'react'

import OwaspLayout from '../../layout/owasp-layout'

const Demo = () => {
  return (
    <OwaspLayout owaspId={2}>
      <Tabs mt={10} isLazy>
        <TabList mb='1em'>
          <Tab>🤔 What ???</Tab>
          <Tab>👮‍♂️ Prevention</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>What is <Text as='span' color='orange.400'>Cryptographic Failures</Text>?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Refers to sensitive data transmission over the network which is required extra protection.
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                Sensitive data are password, bank info, health info and personal info,
              </ListItem>
            </List>

            <Flex mt={10} justify={'center'}>
              <Image src="/images/mitm.jpg" />
            </Flex>
          </TabPanel>

          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>How to prevent?</Heading>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Data transmission must be encrypted 🔒
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Use up-to-date cryptocraphy algorithm or protocol
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Use strong and standard algorithms, protocols
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Validate server certificate and trust chain certificate 👊
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Use two-ways TLS ✌️
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Verify all internal traffic, e.g. between load balancers, web servers, or back-end systems
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Don't forget to take care of your key and secret ^^
              </ListItem>
            </List>

            <Heading mt={4} fontSize={'xl'} as ='h3'>Other Keywords</Heading>
              <HStack mb={8} mt={2}>
                <Tooltip label="Cambodia Data Exchange">
                  <Tag _hover={{cursor: 'pointer'}} colorScheme={'purple'}>CamDX</Tag>
                </Tooltip>
              </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OwaspLayout>
  )
}

export default Demo
