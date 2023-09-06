import React from "react";
import { Box, Stack, Button, useBreakpointValue, Text } from "@chakra-ui/react";
import { Socials } from "../../Components";
export const Careers = (): React.ReactElement => {
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
                    <Stack spacing={{ base: '8', md: '12' }} display="flex" justifyContent="center">
                        <Stack maxW={{ md: 'xl', lg: 'lg', xl: 'xl' }} display="flex" justifyContent="center" textAlign="center">
                            <Text fontSize={{ base: 'md', md: 'lg', sm: 'md' }} color="white" margin="auto">
                                We currently don&apos;t have any vacancies, but we&apos;re always looking for talented people to join our team.
                            </Text>
                        </Stack>
                        <Stack direction={{ base: 'column', md: 'row' }} spacing="3" display="flex" justifyContent="center">
                            <Button variant="simplefi-highlighted" colorScheme="sip-purple-blue-gradient" size={useBreakpointValue({ base: 'md', md: 'lg' })} onClick={() => window.open("mailto:joinus@simplefi.finance?subject=I'm interested in joining the team!", "_blank", "noreferrer")}>
                                Email Us
                            </Button>
                            <Button variant="simplefi-highlighted" colorScheme="sip-dark" size={useBreakpointValue({ base: 'md', md: 'lg' })} onClick={() => window.open("https://discord.gg/hu9mf4u5pM", "_blank")}>
                                Join Discord
                            </Button>
                        </Stack>
                        <Stack justifyContent="center" display="flex">
                            <Socials size="xl" style={{margin: "auto"}}/>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}