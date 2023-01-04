import React from "react";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Container,
    Heading,
    HStack,
    Image,
    Img,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { Socials } from "../../Components";
import BelugaGif from "../../Assets/video/NFT4.gif";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    const navigate = useNavigate();
    return (
        <Box as="section" bg="inherit" px={2}>
            <Box 
            position="relative" 
            height={{ lg: '720px', base: '750px' }} 
            width={{ lg: '80%', sm: '100%' }} margin="auto"
            marginTop={{ lg: '0', base: '25%', md: '0' }}
             justifyContent="center">
                <Container py={{ base: '4', md: '8' }} height="full" paddingTop={0}>
                    <Stack
                        direction={{ base: 'column', lg: 'row' }}
                        spacing={{ base: '16' }}
                        align={{ md: 'center' }}
                        height="full"
                    >
                        <Stack spacing={{ base: '8', md: '12' }}>
                            <Stack spacing={{ base: '4', md: '6' }} maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}>
                                <HStack>
                                    <Heading size={useBreakpointValue({ base: 'md', md: 'lg', sm: 'md' })}>
                                        DeFi made 
                                    </Heading>
                                    <Heading bgGradient='linear(to-r, #ab5fac 0%, #2665bd 40%)' bgClip='text' size={useBreakpointValue({ base: 'md', md: 'lg', sm: 'md' })}>simple</Heading>
                                </HStack>
                                <Text fontSize={{ base: 'md', md: 'lg', sm: 'md' }} color="white">
                                    Make smarter DeFi investments with our powerful data analytics
                                </Text>
                            </Stack>
                            <Stack direction={{ base: 'column', md: 'row' }} spacing="3">
                                <Button variant="primary" size={useBreakpointValue({ base: 'md', md: 'lg' })} onClick={() => window.open('https://forms.gle/pa4LonrFE63A2ygU7', '_blank')}>
                                    Use our API
                                </Button>
                                <Button variant="secondary" size={useBreakpointValue({ base: 'md', md: 'lg' })} isDisabled>
                                    Launch App
                                </Button>
                            </Stack>
                            <Socials size="xl"/>
                        </Stack>
                        <Box
                            // pos={{ lg: 'absolute' }}
                            right="0"
                            top="0"
                            w={{ base: 'full', md: '70%', lg: '50%' }}
                            height={{ base: 'full', lg: 'full' }}
                            sx={{
                                clipPath: { lg: 'polygon(7% 0%, 100% 0%, 100% 100%, 0% 100%)' },
                            }}
                        > 
                        {!isDesktop 
                            ?
                                <Img
                                    // boxSize="full"
                                    objectFit="contain"
                                    width="100%"
                                    src={BelugaGif}
                                    alt="simplefi beluga"
                                />
                            :
                                <video style={{
                                    width: '100%',
                                    height: '80%',
                                    margin: 'auto',
                                    objectFit: 'contain',
                                }} autoPlay loop muted>
                                    <source src={require('../../Assets/video/NFT4.mp4')} type="video/mp4" />
                                </video>
                        }
                            
                        </Box>
                    </Stack>
                </Container>
            </Box>
            <Box position="relative" width={{ lg: '80%', sm: '100%', md: '80%', base: '100%' }} margin="auto">
                <Card 
                    bgGradient="linear(to-br, #fcfcff 0,#edeeff 49.99%,#edeeff 60%)" 
                    p={{ base: '2', md: '10' }} 
                    paddingX={{ base: '4', md: '8', lg: '10'}}
                    height="full"
                >
                    <CardHeader
                        py={useBreakpointValue({ base: '6', md: '4' })}
                    >
                        <Heading as="h1" size={useBreakpointValue({ sm: 'xs', md: 'xs', base: 'xs' })} color="#bf1d82">Dashboard</Heading>
                        <Heading  as='h2' size={useBreakpointValue({ sm: 'sm', md: 'sm', base: 'sm'})} py={{ base: '2', md: '4' }}>Actionable data</Heading>
                    </CardHeader>
                    <Card direction={useBreakpointValue({ md: 'row', sm: 'column'})} bg="transparent" border="none" boxShadow="none" justify="space-evenly" align="flex-start">
                        <Card bg="transparent" border="none" boxShadow="none" p={useBreakpointValue({ base: '2', md: '4' })} justify="center" width={useBreakpointValue({base: '100%', md: '45%'})}>
                            <Image 
                                src={require('../../Assets/img/dashboard_1.png')}
                                objectFit="contain"
                                margin="auto"
                                bg="white"
                                borderRadius="md"
                                padding={2}
                                marginBottom={4}
                                width="100%"
                            />
                            <Heading 
                                size={useBreakpointValue({ base: 'xs', md: 'xs', lg: 'md' })}
                                paddingY={4}>
                                    <span style={{ color:"#bf1d82"}}>Track</span> your ROI
                            </Heading>
                            <Text>
                            Instantly see the profits (or losses) from all your investments in DeFi liquidity pools, yield farms, lending pools and more.
                            </Text>
                        </Card>
                        {!isDesktop && <Spacer />}
                        <Card bg="transparent" border="none" boxShadow="none" p={useBreakpointValue({ base: '2', md: '4' })} justify="center" width={useBreakpointValue({base: '100%', md: '45%'})}>
                            <Image 
                                margin="auto"
                                src={require('../../Assets/img/dashboard_2.png')}
                                objectFit="contain"
                                bg="white"
                                padding={2}
                                marginBottom={4}
                                borderRadius="md"
                            />
                            <Heading 
                                size={useBreakpointValue({ base: 'xs', md: 'xs', lg: 'md' })}
                                paddingY={4}>
                                    <span style={{ color:"#bf1d82"}}>Boost</span> your Portfolio
                            </Heading>
                            <Text>
                            Discover ways to increase your returns and find new investment opportunities thanks to our yield optimization tools.
                            </Text>
                        </Card>
                    </Card>
                </Card>
            </Box>
            <Box position="relative" width={{ lg: '80%', sm: '100%', md: '90%' }} margin="auto">
                <Card 
                    bg="transparent" 
                    p={{ base: '0', md: '10' }} 
                    paddingX={{ base: '0', sm: '2', lg: '10'}}
                    height="full"
                    w={useBreakpointValue({ base: '100%', md: '90%', lg: '90%' })}
                >
                    <CardHeader
                        py={useBreakpointValue({ base: '8', md: '8' })}
                        px={useBreakpointValue({ base: '2', md: '4' })}
                        pb={1}
                    >
                        <Heading as="h1" size={useBreakpointValue({ sm: 'xs', md: 'xs', base: 'xs' })} color="#bf1d82">Api</Heading>
                        <Heading as="h2" size={useBreakpointValue({ sm: 'sm', md: 'sm', base: 'xs'})} py={{ base: '2', md: '4' }} color="white">Multichain data API</Heading>
                    </CardHeader>
                    <CardBody
                        px={useBreakpointValue({ base: '2', md: '4' })}
                    >
                        <Text color="white" fontSize={useBreakpointValue({ sm: 'md', md: 'large', base: 'md' })} pb={2}>
                            Our API covers <span style={{color: '#f636ad'}}>10</span> chains and serves <span style={{color: '#f636ad'}}>1,578,345,954</span> DeFi data points including pricing, performance and optimization analytics
                        </Text>
                        <Card direction={{ base: 'column', md: 'row', sm: 'column'}} bg="transparent" border="none" boxShadow="none" justify="space-between">
                            <Card bg="transparent" border="none" boxShadow="none" justify="center" width={useBreakpointValue({ sm: '100%', md: '45%', base: '100%' })} px={1}>
                                <Heading 
                                    as="h2" 
                                    size={useBreakpointValue({ sm: 'sm', md: 'xs', base: 'xs'})}
                                    paddingY={4}
                                    color="white"
                                > Account Data
                                </Heading>
                                <Text fontSize={useBreakpointValue({ sm: 'md', md: 'large', base: 'md' })}  color="white">
                                Analytics for every DeFi account, including current and historical portfolio positions, ROI and APY, idle and invested assets and portfolio optimization insights.
                                </Text>
                            </Card>
                            {!isDesktop && <Spacer />}
                            <Card bg="transparent" border="none" boxShadow="none" justify="center" width={useBreakpointValue({ sm: '100%', md: '45%', base: '100%' })} px={1}>
                                <Heading 
                                    as="h2" 
                                    size={useBreakpointValue({ sm: 'sm', md: 'xs', base: 'xs'})}
                                    paddingY={4}
                                    color="white"
                                > 
                                    Market Data
                                </Heading>
                                <Text fontSize={useBreakpointValue({ sm: 'md', md: 'large', base: 'md' })} color="white">
                                    General market-level analytics for all DeFi protocols, including pricing for 100k+ tokens (incl. LP tokens), pool ROI and APY, volumetric data, and much more.
                                </Text>
                            </Card>
                        </Card>
                    </CardBody>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '3', md: '6' }} marginTop={5}>
                            <Button variant="primary" size={useBreakpointValue({ base: 'md', md: 'md' })} onClick={() => navigate('/api/documentation')}>
                                API Documentation
                            </Button>
                            <Button variant="primary" size={useBreakpointValue({ base: 'md', md: 'md' })} onClick={() => window.open('https://forms.gle/pa4LonrFE63A2ygU7', '_blank')}>
                                Get API Key
                            </Button>
                        </Stack>
                </Card>
            </Box>
        </Box>
    )
}