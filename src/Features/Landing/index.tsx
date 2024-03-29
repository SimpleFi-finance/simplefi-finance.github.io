import React, { useEffect, useRef, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Hide,
  Image,
  Show,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Socials } from '../../Components'
import { useLocation } from 'react-router-dom'
import { Newsletter } from '../../Components/Newsletter'
import Typewriter from 'typewriter-effect'

export const Landing = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  const trustedBy = [
    {
      name: 'Figment',
      color: 'white',
      img: require('../../Assets/img/partners/figment.png'),
    },
    {
      name: 'NEAR',
      color: 'black',
      img: require('../../Assets/img/partners/near.png'),
    },
    {
      name: 'Stake Capital',
      color: 'white',
      img: require('../../Assets/img/partners/stake.png'),
    },
    {
      name: 'Daedalus',
      color: 'black',
      img: require('../../Assets/img/partners/daedalus.png'),
    },
  ]

  const [hasScrolled, setHasScrolled] = useState(false)
  const faqSectionRef = useRef(null) as any
  const { hash } = useLocation()

  useEffect(() => {
    if (faqSectionRef.current && hash === '#subscribe' && !hasScrolled) {
      faqSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'center',
      })
      setHasScrolled(true)
    }

    return () => {
      setHasScrolled(false)
    }
  }, [faqSectionRef, hash])

  return (
    <Box
      as="section"
      bg="inherit"
      px={2}
      m={{ md: 1, base: 2, lg: 2 }}
    >
      <Box
        position="relative"
        minH="80dvh"
        width="100%"
        margin="auto"
        display="flex"
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '1' }}
          paddingX={{ base: '4', md: '8', lg: '14' }}
          align={{ md: 'center' }}
          margin="auto"
        >
          <Stack
            spacing={{ base: '8', md: '12' }}
            paddingLeft={{ base: '0', md: '0', lg: '10' }}
          > 
            <Stack
              spacing={{ base: '4', md: '6' }}
            >
              <Stack>
                <Heading
                  bgGradient="linear(to-r, #ab5fac 0%, #2665bd 40%)"
                  bgClip="text"
                  as="h1"
                  size={useBreakpointValue({ base: 'md', md: 'xl'})}
                >
                  <Typewriter
                    options={{
                      strings: [
                        'Open source',
                        'Lightning Fast',
                        'Multichain',
                        'Lightweight',
                        'Electrifying',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Heading>
                <Heading
                  bgClip="text"
                  as="h2"
                  size={useBreakpointValue({ base: 'md', md: 'xl'})}
                  color="white"
                >
                  DeFi data analytics
                </Heading>
              </Stack>
              <Text
                fontSize={{ base: 'lg', md: '2xl' }}
                color="white"
              >
                Get DeFi&apos;s most advanced analytics using our open source data engine or our API.
              </Text>
            </Stack>
            {!isDesktop && (
              <Box
                right="0"
                top="0"
                w={{ base: 'full', md: '100%' }}
                h={{ base: '90%', md: '90%' }}
                paddingY={{ base: '10%', md: '0', lg: '0' }}
              >
                <video
                  style={{
                    margin: 'auto',
                    objectFit: 'contain',
                  }}
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src={require('../../Assets/video/NFT4.webm')}
                    type="video/webm"
                  />
                </video>
              </Box>
            )}
            <Stack direction={{ base: 'column', lg: 'row' }} spacing="4">
              <Button
                variant="simplefi-highlighted"
                colorScheme="sip-purple-blue-gradient"
                size={useBreakpointValue({ base: 'md', md: 'lg'})}
                fontSize={{ md: 'lg'}}
                isDisabled={true}
                title="Coming soon"
                onClick={() =>
                  window.open('', '_blank')
                }
              >
                Use API
              </Button>
              <Button
                variant="simplefi-highlighted"
                colorScheme="sip-purple-blue-gradient"
                size={useBreakpointValue({ base: 'md', md: 'lg' })}
                fontSize={{ md: 'lg'}}
                isDisabled={true}
                title="Coming soon"
                onClick={() =>
                  window.open('https://github.com/SimpleFi-finance/', '_blank')
                }
              >
                Run engine
              </Button>
            </Stack>
            {isDesktop && <Socials size="xl" />}
          </Stack>
          {isDesktop && (
            <Box
              w={{ base: 'full', md: '100%', lg: '70%' }}
              display='flex'
              justifyContent="center"
              margin="auto"
            >
              <video
                style={{
                  width: '97%',
                  margin: 'auto',
                  objectFit: 'contain',
                }}
                autoPlay
                loop
                muted
              >
                <source
                  src={require('../../Assets/video/NFT4.webm')}
                  type="video/webm"
                />
              </video>
            </Box>
          )}
        </Stack>
      </Box>
      <Box
        position="relative"
        width="100%"
        paddingX={{ base: '0', md: '4' }}
        paddingY={{ base: '10', md: '4' }}
        minH={useBreakpointValue({
          default: '100vh',
          sm: '100vh',
          md: 'min-content',
        })}
        margin="auto"
      >
        <Card
          bgGradient="linear(to-br, #fcfcffEE 0,#edeeffFE 49.99%,#edeeffEF 60%)"
          borderRadius={useBreakpointValue({ base: 'lg', md: 'lg' })}
          height="full"
          paddingX={{ base: '4', md: '8', lg: '10' }}
          paddingY={{ base: '2', md: '10' }}
        >
          <CardHeader
            paddingLeft={{ base: '2', md: '10' }}
            paddingY={useBreakpointValue({ base: '6', md: '4' })}
          >
            <Heading
              as="h1"
              size={useBreakpointValue({ base: 'xs', md: 'xs' })}
              color="sip-purple.900"
            >
              Explore
            </Heading>
            <Heading
              as="h2"
              size={useBreakpointValue({ base: 'sm', md: 'md' })}
              fontWeight='bold'
              paddingY={{ base: '2', md: '4' }}
              paddingBottom={{ base: '2', md: '8' }}
              color="sip-dark.900"
            >
              SimpleFi your data needs
            </Heading>
          </CardHeader>
          <Card
            bg="transparent"
            border="none"
            boxShadow="none"
            align="center"
          >
            <Show above="md">
              <Image
                src={require('../../Assets/img/illustrations/simplefi-universe-desktop.png')}
                objectFit="scale-down"
                margin="auto"
                alt="simplefi_universe"
                borderRadius="md"
                paddingX={10}
                marginBottom={4}
                width="90%"
              />
            </Show>
            <Hide above="md">
              <Image
                src={require('../../Assets/img/illustrations/simplefi-universe-mobile.png')}
                objectFit="contain"
                margin="auto"
                alt="simplefi_universe"
                borderRadius="md"
                padding={0}
                marginX={50}
                marginBottom={4}
                width="100%"
              />
            </Hide>
          </Card>
          <Card
            direction={useBreakpointValue({ base: 'column', md: 'row' })}
            bg="transparent"
            border="none"
            boxShadow="none"
            justify="space-evenly"
            align="flex-start"
            marginTop={useBreakpointValue({ base: '0', md: '6' })}
            paddingBottom={4}
          >
            <Card
              bg="transparent"
              border="none"
              boxShadow="none"
              marginRight={useBreakpointValue({ base: '0', md: '14' })}
              paddingY={useBreakpointValue({ base: '2', md: '4' })}
              paddingLeft={useBreakpointValue({ base: '2', md: '14' })}
              paddingRight={useBreakpointValue({ base: '2', md: '0' })}
              justify="center"
              width={useBreakpointValue({ base: '100%', md: '45%' })}
              color="sip-dark.900"
            >
              <Heading
                size={useBreakpointValue({ base: 'xs', md: 'md'})}
                fontWeight={'bold'}
                paddingY={4}
                display="flex"
                flexDir="row"
              >
                <Text
                  color="sip-purple.900"
                  style={{padding: "0px 4px 0px 0px"}}>
                  Unified
                </Text>
                <Text color="sip-dark.900">
                  API
                </Text>
              </Heading>
              <Text
                fontSize={useBreakpointValue({base: 'md', md: 'xl'})}
                fontWeight={"500"}
              >
                Advanced, comparable data at your fingertips for all DEX, borrowing, staking and perp protocols via our API.
              </Text>
            </Card>
            {!isDesktop && <Spacer />}
            <Card
              bg="transparent"
              border="none"
              boxShadow="none"
              padding={useBreakpointValue({ base: '2', md: '4' })}
              justify="center"
              width={useBreakpointValue({ base: '100%', md: '44%' })}
              color="sip-dark.900"
            >
              <Heading
                size={useBreakpointValue({ base: 'xs', md: 'md' })}
                fontWeight={'bold'}
                paddingY={4}
                display="flex"
                flexDir="row"
              >
                <Text color="sip-purple.900" style={{padding: "0px 4px 0px 0px"}}>
                  Modular
                </Text>
                <Text color="sip-dark.900"> engine</Text>
              </Heading>
              <Text
                fontSize={useBreakpointValue({base: 'md', md: 'xl'})}
                fontWeight={{md: "500"}}
              >
                Run the engine to self-host your data. Select which chains and protocols to track and bootstrap your database instantly.
              </Text>
            </Card>
          </Card>
        </Card>
      </Box>
      <Box
        position="relative"
        width="100%"
        paddingX={{ base: '0', md: '40px' }}
        minH={useBreakpointValue({
          default: '100vh',
          md: 'min-content',
        })}
        margin="auto"
        mb={4}
      >
        <Card
          bg="transparent"
          paddingX={{ base: '2', lg: '5' }}
          paddingY={{ base: '0', md: '10' }}
          height="full"
        >
          <CardHeader
            py={useBreakpointValue({ base: '8', md: '8' })}
            px={useBreakpointValue({ base: '2', md: '4' })}
            pb={1}
          >
            <Heading
              as="h1"
              size={useBreakpointValue({ base: 'xs', md: 'xs' })}
              color="sip-purple.900"
            >
              Contribute
            </Heading>
            <Heading
              as="h2"
              size={useBreakpointValue({ base: 'sm', md: 'md' })}
              paddingY={{ base: '2', md: '4' }}
              fontWeight='bold'
            >
              Join the open data revolution
            </Heading>
          </CardHeader>
          <CardBody px={useBreakpointValue({ base: '2', md: '4' })}>
            <Text
              fontSize={useBreakpointValue({
                base: 'md',
                md: '2xl'
              })}
              pb={2}
              width={{md: '85%'}}
            >
              Access to DeFi data should be {' '}
              <span style={{ color: '#f636ad' }}>
                uncensorable
              </span>
               , just like the underlying protocols. SimpleFi is open source, and serves analytics as a {' '}
              <span style={{ color: '#f636ad' }}>
                public good
              </span>
              .
              
            </Text>
            <Card
              direction={{ base: 'column', md: 'row' }}
              bg="transparent"
              border="none"
              boxShadow="none"
              justify="space-between"
              paddingTop={{base: '0', md:'6'}}
            >
              <Card
                bg="transparent"
                border="none"
                boxShadow="none"
                justify="center"
                width={useBreakpointValue({
                  base: '100%',
                  md: '45%'
                })}
                px={1}
              >
                <Heading
                  as="h2"
                  size={useBreakpointValue({base: 'xs', md: 'sm',})}
                  paddingY={4}
                  color="white"
                >
                  {' '}
                  Help build SimpleFi
                </Heading>
                <Text
                  fontSize={useBreakpointValue({
                    base: 'md',
                    md: 'xl'
                  })}
                >
                  Our data and analytics pipelines are entirely coded in Rust.
                  Visit our github and help us make the platform even more
                  powerful.
                </Text>
              </Card>
              {!isDesktop && <Spacer />}
              <Card
                bg="transparent"
                border="none"
                boxShadow="none"
                justify="center"
                width={useBreakpointValue({
                  base: '100%',
                  md: '45%'
                })}
                px={1}
              >
                <Heading
                  as="h2"
                  size={useBreakpointValue({ base: 'xs', sm: 'sm', md: 'sm' })}
                  paddingY={4}
                >
                  Join the network
                </Heading>
                <Text
                  fontSize={useBreakpointValue({
                    base: 'md',
                    md: 'xl'
                  })}
                >
                  AI shouldn&apos;t be controlled by private companies. Help
                  serve DeFi data sets as a public good via a decentralized network.
                </Text>
              </Card>
            </Card>
          </CardBody>
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            spacing={{ base: '3', md: '6' }}
            marginTop={5}
            px={useBreakpointValue({ base: '2', md: '4' })}
          >
            <Button
              variant="simplefi-highlighted"
              colorScheme="sip-purple-blue-gradient"
              size={useBreakpointValue({ base: 'md', md: 'md' })}
              fontSize={{ md: 'lg'}}
              isDisabled={true}
              title="Coming soon"
              onClick={() =>
                window.open('https://github.com/SimpleFi-finance/', '_blank')
              }
            >
              Contribute now
            </Button>
          </Stack>
        </Card>
      </Box>
      <Box
        position="relative"
        width="100%"
        paddingX={{ base: '4', md: '40px' }}
        paddingY={{ base: '10', md: '40px' }}
        margin="auto"
        mb={4}
      >
        <Heading
          as="h2"
          size={useBreakpointValue({ base: 'md', md: 'md' })}
          paddingY={{ base: '2', md: '4' }}
          paddingLeft={{ base: '0', md: '10' }}
          marginBottom={4}
          color="white"
          fontWeight='bold'
        >
          Trusted by
        </Heading>
        <SimpleGrid
          columns={useBreakpointValue({ base: 2, lg: 4 })}
          spacing={4}
        >
          {trustedBy.map((el) => (
            <Image
              key={el.name}
              src={el.img}
              alt={el.name}
              objectFit="contain"
              margin="auto"
              bg={el.color === 'white' ? "#fff" : "transparent"}
              borderRadius="xl"
              marginBottom={4}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box
        position="relative"
        width="100%"
        padding={{ base: '4', md: '40px' }}
        margin="auto"
        id="subscribe"
        ref={faqSectionRef}
        mb={4}
      >
        <Newsletter/>
      </Box>
    </Box>
  )
}
