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
  Code
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, WarningTwoIcon } from '@chakra-ui/icons';
import React from 'react'

import OwaspLayout from '../../layout/owasp-layout'
import PingTool from '../../components/PingTool'

const Demo = () => {
  return (
    <OwaspLayout owaspId={6}>
      <Tabs mt={10} isLazy>
        <TabList mb='1em'>
          <Tab>🤔 What ???</Tab>
          <Tab>🖥 Example</Tab>
          <Tab>👮‍♂️ Prevention</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as='h3'>What is <Text as='span' color='orange.400'>Vulnerable and Outdated Components</Text>?</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                An application is likely vulnerable if the developer do not know the versions of all components they use (both client-side and server-side).
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                This includes components that the developer directly use as well as nested dependencies.
              </ListItem>
              <ListItem>
                <ListIcon as={CloseIcon} color='red.500' />
                The tools or software that are vulnerable may have been discovered by security researchers.
              </ListItem>
            </List>

            <Flex mt={10} justify={'center'}>
              <Image src="/images/http-header-exploit.png" />
              {/* https://devopedia.org/web-exploitation */}
            </Flex>
          </TabPanel>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>Example</Heading>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Apache Log4j 2 RCE
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Spring Cloud Gateway 3.1.0 RCE
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Node.JS 'node-serialize' RCE
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                Using known vulnerability functions (e.g. in Python <Code>eval()</Code>, <Code>input()</Code>, <Code>exec()</Code>, ...)
              </ListItem>
              <ListItem>
                <ListIcon as={WarningTwoIcon} color='yellow.500' />
                ...
              </ListItem>
            </List>

            <Heading my={4} fontSize={'xl'} as ='h3'>Other Keywords</Heading>
            <HStack mb={8} mt={2}>
              <Tooltip label="Exploit Database">
                <Tag _hover={{cursor: 'pointer'}} colorScheme={'purple'}>exploit-db</Tag>
              </Tooltip>
            </HStack>
          </TabPanel>
          <TabPanel>
            <Heading mb={4} fontSize={'xl'} as ='h3'>How to prevent?</Heading>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Maintain an inventory of components you are using and ensure that they are kept up-to-date
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Remove unused dependencies and components to reduce the attack surface
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Install the components via trusted channels and make sure to validate their integrity
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Do not expose the libraries, file, log, version, document infomation
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Use signed packages if available
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color='green.500' />
                Be on the lookout for any security patches for the components you are relying on
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OwaspLayout>
  )
}

export default Demo
