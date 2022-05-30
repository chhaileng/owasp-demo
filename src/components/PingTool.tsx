import React from 'react'
import { Box, Text, FormControl, FormLabel, Input, Button, Tag, HStack, Textarea, Tooltip, Heading } from '@chakra-ui/react'
import axios from 'axios'

const PingTool = () => {
  const [host, setHost] = React.useState('')
  const [output, setOutput] = React.useState({error: false, stdout: '', stderr: '', message: ''})
  const [loading, setLoading] = React.useState(false)

  const onHostChange = (e) => {
    setHost(e.target.value)
  }

  const onPingClick = async () => {
    setLoading(true)
    setOutput({error: false, stdout: '', stderr: '', message: ''})
    const res = await axios.post('/api/ping', { host })
    setLoading(false)
    setOutput(res.data)
  }

  return (
    <Box>
      <Heading mb={4} fontSize={'xl'} as ='h3'>Networking Tool: Ping</Heading>
      <Text>This tool will send 1 ping to destination domain or IP address</Text>
      
      <HStack mb={8} mt={2}>
        <Tooltip label="Remote Code Execution">
          <Tag _hover={{cursor: 'pointer'}} colorScheme={'red'}>#RCE</Tag>
        </Tooltip>
        <Tooltip label="Server Side Request Forgery">
          <Tag _hover={{cursor: 'pointer'}} colorScheme={'red'}>#SSRF</Tag>
        </Tooltip>
      </HStack>

      <FormControl display='flex' alignItems='center'>
        <FormLabel w={['40%', '20%']} mb='0' color="orange.400">Domain or IP Address</FormLabel>
        <Input value={host} onChange={onHostChange} placeholder='Enter Domain or IP Address'/>
        <Button isLoading={loading} ml={3} px={8} onClick={onPingClick}>Send 1 Ping</Button>
      </FormControl>

      <Textarea resize={'none'} height={300} color={output.error ? 'red' : 'green.400'} value={output.error ? output.message : output.stdout} readOnly mt={8} placeholder='Output' />
    </Box>
  )
}

export default PingTool