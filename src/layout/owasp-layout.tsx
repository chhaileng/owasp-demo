import { Box, Button, FormControl, useToast, FormLabel, Switch, Flex, Icon, VStack, StackDivider, Text, Heading, IconButton, useColorMode, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerBody, DrawerFooter, useDisclosure, Tooltip,  Menu,
  MenuButton,
  MenuList,
  MenuItem,  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React, { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from './index';

type LayoutProps = {
  children: ReactNode,
  owaspId: number,
}


const OwaspLayout = ({ children, owaspId }: LayoutProps) => {
  // Dark Mode
  const { colorMode, setColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const router = useRouter()

  const menus = {
    1: 'A01:2021 Broken Access Control',
    2: 'A02:2021 Cryptographic Failures',
    3: 'A03:2021 Injection',
    4: 'A04:2021 Insecure Design',
    5: 'A05:2021 Security Misconfiguration',
    6: 'A06:2021 Vulnerable and Outdated Components',
    7: 'A07:2021 Identification and Authentication Failures',
    8: 'A08:2021 Software and Data Integrity Failures',
    9: 'A09:2021 Security Logging and Monitoring Failures',
    10: 'A10:2021 Server-side Request Forgery'
  }

  return (
    <Layout>
      <Menu>
        <MenuButton mt={8} as={Button} rightIcon={<ChevronDownIcon />}>
          {menus[owaspId]}
        </MenuButton>
        <MenuList>
          { Object.keys(menus).map(key => <Link key={key} href={'/owasp/' + key}><MenuItem color={(key == String(owaspId)) ? 'orange.400' : 'heading'}>{menus[key]}</MenuItem></Link>) }
        </MenuList>
      </Menu>
      {children}
    </Layout>
  )
}

export default OwaspLayout