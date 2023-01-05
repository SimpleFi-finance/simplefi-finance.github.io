import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Heading,
    HStack,
    Image,
    Img,
    SimpleGrid,
    Spacer,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { Socials } from "../../Components";
import BelugaGif from "../../Assets/video/NFT4.gif";
import { useNavigate, useLocation } from "react-router-dom";
import { Newsletter } from "../../Components/Newsletter";

export const Landing = () => {
    const isDesktop = useBreakpointValue({ base: false, lg: true });
    const navigate = useNavigate();

    const trustedBy = [
        {
            name: "Figment",
            img: require('../../Assets/img/partners/figment.png')
        },
        {
            name: "TheGraph",
            img: require('../../Assets/img/partners/graph.png')
        },
        {
            name: "NEAR",
            img: require('../../Assets/img/partners/near.png')
        },
        {
            name: "Stake Capital",
            img: require('../../Assets/img/partners/stake.png')
        }
    ];

    const [hasScrolled, setHasScrolled] = useState(false);
    const faqSectionRef = useRef(null) as any;
    const { hash } = useLocation();

    useEffect(() => {
        if (faqSectionRef.current && hash === "#subscribe" && !hasScrolled) {
            faqSectionRef.current.scrollIntoView({
                behavior: "smooth",
                inline:'center',
                block: "center",
            });
            setHasScrolled(true);
        }

        return () => {
            setHasScrolled(false);
        };

    }, [faqSectionRef, hash]);

    return (
        <Box as="section" bg="inherit" px={2}>
            <Box 
            position="relative" 
            height="calc(100vh - 82px)"
            width={{ lg: '80%', sm: '100%' }} 
            margin="auto"
            justifyContent="center"
            display="flex"
            >
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    spacing={{ base: '8' }}
                    align={{ md: 'center' }}
                    margin="auto"
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
                        w={{ base: 'full', md: '100%', lg: '50%' }}
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
                                height="60%"
                                src={BelugaGif}
                                alt="simplefi beluga"
                            />
                        :
                            <video style={{
                                width: '100%',
                                height: '60%',
                                margin: 'auto',
                                objectFit: 'contain',
                            }} autoPlay loop muted>
                                <source src={require('../../Assets/video/NFT4.mp4')} type="video/mp4" />
                            </video>
                    }
                        
                    </Box>
                </Stack>
            </Box>
            <Box position="relative" width={{ lg: '80%', sm: '100%', md: '80%', base: '100%' }} height="100vh" margin="auto">
                <Card 
                    bgGradient="linear(to-br, #fcfcff 0,#edeeff 49.99%,#edeeff 60%)" 
                    p={{ base: '2', md: '10' }} 
                    borderRadius={useBreakpointValue({ base: 'lg', sm: 'xs', md: "md" })}
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
            <Box position="relative" width={{ lg: '80%', sm: '100%', md: '90%' }} height="100vh"  margin="auto" mb={4}>
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
            <Box position="relative" width={{ lg: '80%', sm: '100%', md: '80%', base: '100%' }} margin="auto" mb={4}>
                <Heading  as='h2' size={useBreakpointValue({ sm: 'sm', md: 'sm', base: 'sm'})} py={{ base: '2', md: '4' }}>Trusted By</Heading>
                <SimpleGrid columns={useBreakpointValue({base: 2, sm: 2, xs: 2, md: 2, lg: 4})} spacing={2}>
                        {trustedBy.map(el=> (
                            <Image
                                key={el.name}
                                src={el.img}
                                alt={el.name}
                                objectFit="contain"
                                margin="auto"
                                bg="white"
                                borderRadius="xl"
                                marginBottom={4}
                            />
                        ))}
                </SimpleGrid>
            </Box>
            <Box position="relative" width={{ lg: '80%', sm: '100%', md: '80%', base: '100%' }} margin="auto" id="subscribe" ref={faqSectionRef}>
                <Newsletter />
            </Box>
        </Box>
    )
}