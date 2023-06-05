import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  useBreakpointValue,
  Input,
  Button,
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
      <Heading
        as="h2"
        size={useBreakpointValue({ sm: 'sm', md: 'sm', base: 'sm' })}
        py={{ base: '2', md: '4' }}
        mb={5}
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
        >
          Stay updated on our product launches and network updates
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
          color="black"
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
          <FormHelperText color="white" width={useBreakpointValue({
            default: '100%',
            xs: '80%',
            sm: '80%',
            md: '50%',
          })}>
            {message || "We'll never share your email."}
          </FormHelperText>
        )}
        <Button
          variant="primary"
          isLoading={statusValue === 'sending'}
          
          size={useBreakpointValue({ base: 'md', md: 'md', sm: 'md' })}
          width={useBreakpointValue({ base: '30%', sm: '100%', md: '20%' })}
          mt={2}
          onClick={() => onSubmitEmail()}
          isDisabled={isError || value === ''}
        >
          Submit
        </Button>
      </FormControl>
    </>
  )
}
