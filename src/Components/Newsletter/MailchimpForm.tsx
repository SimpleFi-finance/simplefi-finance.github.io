import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  useBreakpointValue,
  Input,
  Button,
  Stack
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export const MailchimpForm = ({
  onSubmitted,
  status,
  message,
}: {
  onSubmitted: (formData: any) => void
  status: string | null
  message?: any
}) => {
  const [value, setValue] = useState('')
  const [statusValue, setStatus] = useState('')
  const [isError, setIsError] = useState(false)

  const handleInput = (value: string) => {
    setValue(value)
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setIsError(false)
    } else {
      setIsError(true)
    }
  }

  useEffect(() => {
    if (status === 'error') {
        setStatus(status)
        setIsError(true)
    }
    if (status === 'success') {
        setStatus(status)
        setValue('')
        setIsError(false)
    }
    if (status === 'sending') {
      setStatus(status)
      setIsError(false)
    }
  }, [status])

  const onSubmitEmail = async () => {
    if (isError) {
      return
    } else {
      onSubmitted({ MERGE0: value })
    }
  }
  return (
    <>
    <Stack
      paddingLeft={{ base: '0', md: '10' }}
    >
      <Heading
        as="h2"
        size={useBreakpointValue({ sm: 'md', md: 'md', base: 'md' })}
        paddingY={{ base: '2', md: '4' }}
        marginBottom={3}
        color="white"
        fontWeight='bold'
      >
        Get our newsletter
      </Heading>
      <FormControl
        isInvalid={isError}
      >
        <FormLabel
          color="white"
          size={useBreakpointValue({
            base: 'lg',
            sm: 'md',
            md: 'md',
            lg: 'lg',
          })}
          fontSize={useBreakpointValue({
            sm: 'md',
            md: 'xl',
            base: 'md',
          })}
          paddingBottom={4}
        >
          Stay in the SimpleFi loop!
        </FormLabel>
        <Input
          type="email"
          width={useBreakpointValue({
            default: '100%',
            xs: '80%',
            sm: '80%',
            md: '50%',
          })}
          value={value}
          onChange={(e) => handleInput(e.target.value)}
          placeholder='your email address'
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          background="sip-dark.700"
          color="white"
        />
        {isError ? (
          <FormHelperText color="red" fontStyle="semibold" fontSize="md" width={useBreakpointValue({
            default: '100%',
            xs: '80%',
            sm: '80%',
            md: '50%',
          })}>
            {message || 'Invalid email entered.'}
          </FormHelperText>
        ) : (
          <FormHelperText
            color="white"
            width={useBreakpointValue({
            default: '100%',
            xs: '80%',
            sm: '80%',
            md: '50%',
          })}
          >
            {message || ""}
          </FormHelperText>
        )}
        <Button
          variant="simplefi-highlighted"
          colorScheme="sip-purple-blue-gradient"
          isLoading={statusValue === 'sending'}
          size={useBreakpointValue({ base: 'md', md: 'md', sm: 'md' })}
          width={useBreakpointValue({ base: '30%', sm: '100%', md: '20%' })}
          mt={6}
          onClick={() => onSubmitEmail()}
          isDisabled={isError}
        >
          Submit
        </Button>
      </FormControl>
      </Stack>
    </>
  )
}
