import { As, Button, ButtonProps, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'

interface NavButtonProps extends ButtonProps {
  icon: As
  label: string
}

export const NavButton = (props: NavButtonProps) => {
  const { icon, label, ...buttonProps } = props
  return (
    <Button variant="ghost" justifyContent="start" {...buttonProps} _active={{
      bg: 'transparent',
      borderBottom: '2px solid',
      borderRadius: '0px',
      transition: 'all 0.2s ease-in-out',
    }}>
      <HStack spacing="3">
        <Icon as={icon} boxSize="6" color="on-accent" />
        <Text color="on-accent">{label}</Text>
      </HStack>
    </Button>
  )
}