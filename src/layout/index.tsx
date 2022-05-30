import { Box, Button, FormControl, useToast, FormLabel, Switch, Flex, Icon, VStack, StackDivider, Text, Heading, IconButton, useColorMode, Drawer, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerContent, DrawerBody, DrawerFooter, useDisclosure, Tooltip, } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

type LayoutProps = {
  children: ReactNode
}


const Layout = ({ children }: LayoutProps) => {
  // Dark Mode
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'


  // Settings Drawer

  // Toast
  const toast = useToast()

  // Router
  const router = useRouter()

  

  return (
    <Box margin={'0 auto'} maxW={1169}>
      <Flex h={'50px'} padding={5} as="header" justifyContent={'space-between'}>
        <Heading color="orange.400" size={'lg'}><Link href='/'>Basic Web App Security</Link></Heading>
        <Flex gap={1}>
          <Link href="/"><Button color="orange.400" variant={router.pathname == '/' ? 'solid' : 'ghost'} size={'sm'}>Home</Button></Link>
          <Link href="/owasp"><Button color="orange.400" variant={router.pathname.startsWith('/owasp') ? 'solid' : 'ghost'} size={'sm'}>OWASP</Button></Link>
          <IconButton variant={'ghost'} color="orange.400" size={'sm'} aria-label='settings' icon={ isDark ? <SunIcon /> : <MoonIcon />} onClick={toggleColorMode} />
        </Flex>
      </Flex>
      <Box margin={5} minH='calc(100vh - 140px)'>
        {children}
      </Box>
      <Flex marginX={5} height={'50px'} justify='center' color="orange.500">
        Made with 💙 by Chhaileng Peng
      </Flex>
    </Box>
  )
}

export default Layout