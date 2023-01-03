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
        <Box as="section" bg="inherit">
            <Box position="relative" height={{ lg: '720px' }} width={{ lg: '80%' }} margin="auto">
                <Container py={{ base: '4', md: '8' }} height="full" paddingTop={0}>
                    <Stack
                        direction={{ base: 'column', lg: 'row' }}
                        spacing={{ base: '16' }}
                        align={{ lg: 'center' }}
                        height="full"
                    >
                        <Stack spacing={{ base: '8', md: '12' }}>
                            <Stack spacing={{ base: '4', md: '6' }} maxW={{ md: 'xl', lg: 'md', xl: 'xl' }}>
                                <HStack>
                                    <Heading size={useBreakpointValue({ base: 'md', md: 'xl' })}>
                                        DeFi made 
                                    </Heading>
                                    <Heading bgGradient='linear(to-r, #ab5fac 0%, #2665bd 40%)' bgClip='text'>simple</Heading>
                                </HStack>
                                <Text fontSize={{ base: 'lg', md: 'xl' }} color="white">
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
                            pos={{ lg: 'absolute' }}
                            right="0"
                            top="0"
                            w={{ base: 'full', lg: '50%' }}
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
            <Box position="relative" height={{ lg: '720px' }} width={{ lg: '80%' }} margin="auto">
                <Card 
                    bgGradient="linear(to-br, #fcfcff 0,#edeeff 49.99%,#edeeff 60%)" 
                    p={{ base: '8', md: '12' }} 
                    paddingX={{ base: '20', sm: '4', lg: '20'}}
                    height="full"
                >
                    <CardHeader>
                        <Heading size="xs" color="#bf1d82">Dashboard</Heading>
                        <Heading size="md" py={{ base: '2', md: '4' }}>Actionable data</Heading>
                    </CardHeader>
                    <Card direction={{ base: 'row', lg: 'row', sm: 'column'}} bg="transparent" border="none" boxShadow="none" justify="space-evenly">
                        <Card bg="transparent" border="none" boxShadow="none" p={{ base: '2', md: '4' }} justify="center" width="45%">
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
                            <HStack>
                            <Heading size="sm"
                                paddingY={4} color="#bf1d82">Track</Heading>
                                <Heading size="sm" 
                                    paddingY={4}
                                > your ROI
                                </Heading>
                            </HStack>
                            <Text>
                            Instantly see the profits (or losses) from all your investments in DeFi liquidity pools, yield farms, lending pools and more.
                            </Text>
                        </Card>
                        <Spacer />
                        <Card bg="transparent" border="none" boxShadow="none" p={{ base: '2', md: '4' }} px={{base: '12', md: '4'}} width="45%">
                            <Image 
                                margin="auto"
                                src={require('../../Assets/img/dashboard_2.png')}
                                objectFit="contain"
                                bg="white"
                                padding={2}
                                marginBottom={4}
                                borderRadius="md"
                            />
                            <HStack>
                                <Heading size="sm"
                                    paddingY={4} color="#bf1d82">Boost</Heading>
                                <Heading 
                                    size="sm"
                                    paddingY={4}
                                >
                                     your Portfolio
                                </Heading>

                            </HStack>
                            <Text>
                            Discover ways to increase your returns and find new investment opportunities thanks to our yield optimization tools.
                            </Text>
                        </Card>
                    </Card>
                </Card>
            </Box>
            <Box position="relative" height={{ lg: '720px' }} width={{ lg: '80%' }} margin="auto">
                <Card 
                    bg="transparent" 
                    p={{ base: '8', md: '12' }} 
                    paddingX={{ base: '20', sm: '4', lg: '20'}}
                    height="full"
                >
                    <CardHeader>
                        <Heading size="xs" color="#bf1d82">Api</Heading>
                        <Heading size="md" py={{ base: '2', md: '4' }} color="white">Multichain data API</Heading>
                    </CardHeader>
                    <CardBody>
                        <Heading color="white" size="sm" width="85%"  marginBottom={4}>
                            Our API covers <span style={{color: '#bf1d82'}}>10</span> chains and serves <span style={{color: '#bf1d82'}}>1,578,345,954</span> DeFi data points including pricing, performance and optimization analytics
                        </Heading>
                        <Card direction={{ base: 'row', lg: 'row', sm: 'column'}} bg="transparent" border="none" boxShadow="none" justify="space-evenly">
                            <Card bg="transparent" border="none" boxShadow="none" justify="center" width="45%">
                                <Heading size="sm" 
                                    paddingY={4}
                                    color="white"
                                > Account Data
                                </Heading>
                                <Text fontSize="large"  color="white">
                                Analytics for every DeFi account, including current and historical portfolio positions, ROI and APY, idle and invested assets and portfolio optimization insights.
                                </Text>
                            </Card>
                            <Spacer />
                            <Card bg="transparent" border="none" boxShadow="none" p={{ base: '2', md: '4' }} px={{base: '12', md: '4'}} width="45%">
                            <Heading size="sm" 
                                    paddingY={4}
                                    color="white"
                                > Market Data
                                </Heading>
                                <Text fontSize="large" color="white">
                                General market-level analytics for all DeFi protocols, including pricing for 100k+ tokens (incl. LP tokens), pool ROI and APY, volumetric data, and much more.
                                </Text>
                            </Card>
                        </Card>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing="3" marginY={5}>
                                <Button variant="primary" size={useBreakpointValue({ base: 'md', md: 'md' })} onClick={() => navigate('/api/documentation')}>
                                    API Documentation
                                </Button>
                                <Button variant="primary" size={useBreakpointValue({ base: 'md', md: 'md' })} onClick={() => window.open('https://forms.gle/pa4LonrFE63A2ygU7', '_blank')}>
                                    Get API Key
                                </Button>
                            </Stack>
                    </CardBody>
                </Card>
            </Box>
        </Box>
    )
}