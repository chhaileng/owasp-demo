import React from 'react'
import { Box, Text, FormControl, FormLabel, Input, Button, Tag, HStack, Textarea, Tooltip, Heading } from '@chakra-ui/react'
import axios from 'axios'

const TodoListFetchTool = () => {
  const [url, setUrl] = React.useState('https://jsonplaceholder.typicode.com/todos/1')
  const [output, setOutput] = React.useState({error: false, stdout: '', stderr: '', message: ''})
  const [loading, setLoading] = React.useState(false)

  const onUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const onPingClick = async () => {
    setLoading(true)
    setOutput({error: false, stdout: '', stderr: '', message: ''})
    const res = await axios.post('/api/todo-list', { url })
    setLoading(false)
    setOutput(res.data)
  }

  return (
    <Box>
      <Heading mb={4} fontSize={'xl'} as ='h3'>Todo List API Fetch</Heading>
      <Text>This tool will request to JSON Placeholder API to get todo lists at server side</Text>
      
      <HStack mb={8} mt={2}>
        <Tooltip label="Server Side Request Forgery">
          <Tag _hover={{cursor: 'pointer'}} colorScheme={'red'}>#SSRF</Tag>
        </Tooltip>
        <Tooltip label="Remote Code Execution">
          <Tag _hover={{cursor: 'pointer'}} colorScheme={'red'}>#RCE</Tag>
        </Tooltip>
      </HStack>

      <FormControl display='flex' alignItems='center'>
        <FormLabel w={['40%', '10%']} mb='0' color="orange.400">API URL</FormLabel>
        <Input value={url} onChange={onUrlChange} placeholder='Enter API URL'/>
        <Button isLoading={loading} ml={3} px={8} onClick={onPingClick}>Get Data</Button>
      </FormControl>

      <Textarea resize={'none'} height={300} color={output.error ? 'red' : 'green.400'} value={output.error ? output.message : output.stdout} readOnly mt={8} placeholder='Output' />
    </Box>
  )
}

export default TodoListFetchTool