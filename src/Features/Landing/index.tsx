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
      img: require('../../Assets/img/partners/figment.png'),
    },
    {
      name: 'NEAR',
      img: require('../../Assets/img/partners/near.png'),
    },
    {
      name: 'Stake Capital',
      img: require('../../Assets/img/partners/stake.png'),
    },
    {
      name: 'Daedalus',
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
        // minH="calc(100vh - 80px)"
        width="100%"
        margin="auto"
        padding="80px 0"  
        justifyContent="center"
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
              // maxW={{ md: '95%', lg: '90%', xl: '90%' }}
            >
              <Stack>
                <Heading
                  bgGradient="linear(to-r, #ab5fac 0%, #2665bd 40%)"
                  bgClip="text"
                  as="h1"
                  size={useBreakpointValue({ base: 'lg', md: 'xl', sm: 'lg' })}
                >
                  <Typewriter
                    options={{
                      strings: [
                        'Open source',
                        'Lightning Fast',
                        'Multichain',
                        'Lightweight',
                        'Sexy',
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Heading>
                <Heading
                  bgClip="text"
                  as="h2"
                  size={useBreakpointValue({ base: 'md', md: 'lg', sm: 'md' })}
                  pt={{ base: '2', md: '2' }}
                  color="white"
                >
                  DeFi data analytics
                </Heading>
              </Stack>
              <Text fontSize={{ base: 'lg', md: 'xl', sm: 'lg' }} color="white">
                Join DeFi&apos;s open data revolution. Get the most advanced analytics 
                via our API or by running our open-source engine for free.
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
            <Stack direction={{ base: 'column', md: 'row' }} spacing="4">
              <Button
                variant="simplefi-highlighted"
                colorScheme="sip-purple-blue-gradient"
                size={useBreakpointValue({ base: 'md', md: 'lg'})}
                onClick={() =>
                  window.open('https://forms.gle/pa4LonrFE63A2ygU7', '_blank')
                }
              >
                Use our API
              </Button>
              <Button
                variant="simplefi-highlighted"
                colorScheme="sip-purple-blue-gradient"
                size={useBreakpointValue({ base: 'md', md: 'lg' })}
                onClick={() =>
                  window.open('https://github.com/SimpleFi-finance/', '_blank')
                }
              >
                Run your engine
              </Button>
            </Stack>
            {isDesktop && <Socials size="xl" />}
          </Stack>
          {isDesktop && (
            <Box
              w={{ base: 'full', md: '100%', lg: '100%' }}
            >
              <video
                style={{
                  // width: '100%',
                  // height: '80%',
                  margin: 'auto',
                  objectFit: 'contain',
                  transform: 'scale(1.3)'
                }}
                autoPlay
                loop
                muted
              >
                <source
                  src={require('../../Assets/video/NFT4.mp4')}
                  type="video/mp4"
                />
              </video>
            </Box>
          )}
        </Stack>
      </Box>
      <Box
        position="relative"
        width="100%"
        padding={{ base: '0', md: '4' }}
        minH={useBreakpointValue({
          default: '100vh',
          sm: '100vh',
          md: 'min-content',
          lg: 'min-content',
        })}
        margin="auto"
      >
        <Card
          bgGradient="linear(to-br, #fcfcff 0,#edeeff 49.99%,#edeeff 60%)"
          borderRadius={useBreakpointValue({ base: 'lg', sm: 'xs', md: 'md' })}
          height="full"
          padding={{ base: '2', md: '10' }}
          paddingX={{ base: '4', md: '8', lg: '10' }}
          //   color="sip-blue.900"
        >
          <CardHeader
            paddingLeft={{ base: '2', md: '10' }}
            paddingY={useBreakpointValue({ base: '6', md: '4' })}
          >
            <Heading
              as="h1"
              size={useBreakpointValue({ sm: 'xs', md: 'xs', base: 'xs' })}
              color="sip-purple.900"
            >
              Explore
            </Heading>
            <Heading
              as="h2"
              size={useBreakpointValue({ sm: 'sm', md: 'sm', base: 'sm' })}
              py={{ base: '2', md: '4' }}
              color="sip-dark.900"
            >
              SimpleFi your data needs
            </Heading>
          </CardHeader>
          <Card
            direction={useBreakpointValue({ md: 'row', sm: 'column' })}
            bg="transparent"
            border="none"
            boxShadow="none"
            justify="space-evenly"
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
            direction={useBreakpointValue({ md: 'row', sm: 'column' })}
            bg="transparent"
            border="none"
            boxShadow="none"
            justify="space-evenly"
            align="flex-start"
          >
            <Card
              bg="transparent"
              border="none"
              boxShadow="none"
              p={useBreakpointValue({ base: '2', md: '4' })}
              justify="center"
              width={useBreakpointValue({ base: '100%', md: '45%' })}
              color="sip-dark.900"
            >
              <Heading
                size={useBreakpointValue({ base: 'xs', md: 'xs', lg: 'md' })}
                paddingY={4}
                display="flex"
                flexDir="row"
              >
                <Text color="sip-purple.900" style={{padding: "0px 4px 0px 0px"}}>
                  Unified
                </Text>
                <Text color="sip-dark.900"> API</Text>
              </Heading>
              <Text>
                Our API serves comparable, granular data such as pool-level ROI
                and account-level liquidation risk for all DeFi segments
                including AMMs, borrowing, staking & perp protocols.
              </Text>
            </Card>
            {!isDesktop && <Spacer />}
            <Card
              bg="transparent"
              border="none"
              boxShadow="none"
              p={useBreakpointValue({ base: '2', md: '4' })}
              justify="center"
              width={useBreakpointValue({ base: '100%', md: '45%' })}
              color="sip-dark.900"
            >
              <Heading
                size={useBreakpointValue({ base: 'xs', md: 'xs', lg: 'md' })}
                paddingY={4}
                display="flex"
                flexDir="row"
              >
                <Text color="sip-purple.900" style={{padding: "0px 4px 0px 0px"}}>
                  Modular
                </Text>
                <Text color="sip-dark.900"> engine</Text>
              </Heading>
              <Text>
                Run our engine to self-host the data for your DeFi app or
                investment bot. Simply choose which chains and protocols you
                want to cover and bootstrap your database in an instant.
              </Text>
            </Card>
          </Card>
        </Card>
      </Box>
      <Box
        position="relative"
        width="100%"
        padding={{ base: '0', md: '40px' }}
        minH={useBreakpointValue({
          default: '100vh',
          sm: '100vh',
          md: 'min-content',
          lg: 'min-content',
        })}
        margin="auto"
        mb={4}
      >
        <Card
          bg="transparent"
          p={{ base: '0', md: '10' }}
          paddingX={{ base: '0', sm: '2', lg: '5' }}
          height="full"
        >
          <CardHeader
            py={useBreakpointValue({ base: '8', md: '8' })}
            px={useBreakpointValue({ base: '2', md: '4' })}
            pb={1}
          >
            <Heading
              as="h1"
              size={useBreakpointValue({ sm: 'xs', md: 'xs', base: 'xs' })}
              color="sip-purple.900"
            >
              Contribute
            </Heading>
            <Heading
              as="h2"
              size={useBreakpointValue({ sm: 'sm', md: 'sm', base: 'sm' })}
              py={{ base: '2', md: '4' }}
            >
              Join the open data revolution
            </Heading>
          </CardHeader>
          <CardBody px={useBreakpointValue({ base: '2', md: '4' })}>
            <Text
              fontSize={useBreakpointValue({
                sm: 'md',
                md: 'large',
                base: 'md',
              })}
              pb={2}
            >
              Access to DeFi data should be uncensored and permissionless...{' '}
              <span style={{ color: '#f636ad' }}>
                just like DeFi protocols themselves.
              </span>{' '}
              SimpleFi is fully open source, and serves{' '}
              <span style={{ color: '#f636ad' }}>
                DeFi analytics as a public good.{' '}
              </span>{' '}
              Join us!
            </Text>
            <Card
              direction={{ base: 'column', md: 'row', sm: 'column' }}
              bg="transparent"
              border="none"
              boxShadow="none"
              justify="space-between"
            >
              <Card
                bg="transparent"
                border="none"
                boxShadow="none"
                justify="center"
                width={useBreakpointValue({
                  sm: '100%',
                  md: '45%',
                  base: '100%',
                })}
                px={1}
              >
                <Heading
                  as="h2"
                  size={useBreakpointValue({ sm: 'sm', md: 'xs', base: 'xs' })}
                  paddingY={4}
                  color="white"
                >
                  {' '}
                  Help build SimpleFi
                </Heading>
                <Text
                  fontSize={useBreakpointValue({
                    sm: 'md',
                    md: 'large',
                    base: 'md',
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
                  sm: '100%',
                  md: '45%',
                  base: '100%',
                })}
                px={1}
              >
                <Heading
                  as="h2"
                  size={useBreakpointValue({ sm: 'sm', md: 'xs', base: 'xs' })}
                  paddingY={4}
                >
                  Participate in the network
                </Heading>
                <Text
                  fontSize={useBreakpointValue({
                    sm: 'md',
                    md: 'large',
                    base: 'md',
                  })}
                >
                  Don&apos;t let private companies control the era of AI. Help
                  us build and run the decentralized network that serves our
                  open DeFi data sets.
                </Text>
              </Card>
            </Card>
          </CardBody>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '3', md: '6' }}
            marginTop={5}
            px={useBreakpointValue({ base: '2', md: '4' })}
          >
            <Button
              variant="simplefi-highlighted"
              colorScheme="sip-purple-blue-gradient"
              size={useBreakpointValue({ base: 'md', md: 'md' })}
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
        padding={{ base: '0', md: '40px' }}
        margin="auto"
        mb={4}
      >
        <Heading
          as="h2"
          size={useBreakpointValue({ sm: 'md', md: 'md', base: 'md' })}
          py={{ base: '2', md: '4' }}
          mb={4}
          color="white"
        >
          Trusted by
        </Heading>
        <SimpleGrid
          columns={useBreakpointValue({ base: 2, sm: 2, xs: 2, md: 2, lg: 4 })}
          spacing={4}
        >
          {trustedBy.map((el) => (
            <Image
              key={el.name}
              src={el.img}
              alt={el.name}
              objectFit="contain"
              margin="auto"
              bg="#fff"
              borderRadius="xl"
              marginBottom={4}
            />
          ))}
        </SimpleGrid>
      </Box>
      <Box
        position="relative"
        width="100%"
        padding={{ base: '0', md: '40px' }}
        margin="auto"
        id="subscribe"
        ref={faqSectionRef}
        mb={4}
      >
        <Newsletter />
      </Box>
    </Box>
  )
}
