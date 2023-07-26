import React from 'react';
import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaMedium, FaTwitter} from "react-icons/fa";

interface IProps extends React.ComponentProps<"div"> {
  size: string;
}
export const Socials = (props: IProps) => {
  const {size, ...otherProps} = props;
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
    <ButtonGroup size={size || "lg"} {...otherProps}>
      {socials.map((social) => (
        <IconButton 
          key={social.name}
          aria-label={social.name}
          fontSize={"x-large"}
          colorScheme='gray'
          icon={social.icon}
          variant="link"
          onClick={() => window.open(social.url, '_blank')}
        />
      ))}
    </ButtonGroup>
  )
};