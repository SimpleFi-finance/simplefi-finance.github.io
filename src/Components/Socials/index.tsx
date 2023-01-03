import React from 'react';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaMedium, FaTwitter} from "react-icons/fa";

export const Socials = (props: {size: string}) => {
  const socials = [
    {
      name: 'twitter',
      icon: <FaTwitter/>,
      url: 'https://twitter.com/simpleFi_',
    },
    {
      name: 'discord',
      icon: <FaDiscord/>,
      url: 'https://discord.gg/hu9mf4u5pM',
    },
    {
      name: 'medium',
      icon: <FaMedium/>,
      url: 'https://medium.com/simplefi',
    },
    {
      name: 'github',
      icon: <FaGithub/>,
      url: 'https://github.com/SimpleFi-finance/',
    }
  ]

  return (
    <ButtonGroup variant="ghost" color="white" size={props.size || "lg"}>
      {socials.map((social) => (
        <IconButton 
          key={social.name}
          aria-label={social.name}
          fontSize={"x-large"}
          colorScheme='whiteAlpha'
          icon={social.icon}
          variant="link"
          onClick={() => window.open(social.url, '_blank')}
        />
      ))}
    </ButtonGroup>
  )
};