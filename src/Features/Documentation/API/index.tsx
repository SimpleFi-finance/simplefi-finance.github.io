import React from 'react';
import { UnorderedList, ListItem, Text, HStack, Table, Thead, Tr, Th, Td, Tbody, Icon, Container, VStack} from '@chakra-ui/react';
import { AiOutlineApi } from "react-icons/ai";
import { SectionHeaderWithDescription, SubSectionWithText } from '../../../Components';
interface IPropsLink {
    title: string;
    text: string;
    link: string
}
const LinkToEndpoints = (props: IPropsLink) => {
    return (
        <VStack align="left" pt={8}>
            <HStack>
                <Icon as={AiOutlineApi} fontSize="md" fontWeight="semibold"/>
                <Text fontSize="md" fontWeight="semibold">{props.title}</Text>
            </HStack>
            <HStack px={4}>
                <Text>{props.text} <a href={props.link}>here</a>.</Text>
            </HStack>
        </VStack>
    )
}

export const APIDocs = () => {
    const errorsData: {
        code: string;
        message: string;
    }[] = [
        {
            code: '200s',
            message: 'Success'
        },{
            code: '400s',
            message: 'Client error'
        },
        {
            code: '500s',
            message: 'Server error'
        }
    ];
    return (
        <>
            {/* <UnorderedList>
                <ListItem>
                    <a
                    href="#73879203-6f05-4503-840e-4fdec8d275f7"
                    >
                        <em>Latest updates</em>
                    </a>
                </ListItem>
                <ListItem>
                    <a
                    href="#72e602bb-567c-4f46-91ed-c81fba85f0ac"
                    >
                    Introduction
                    </a>
                </ListItem>
                <ListItem>
                <a
                href="#1965581c-7297-4b90-acfe-564a93068f43"
                >
                Getting Started
                </a>
                </ListItem>
                <ListItem>
                <a
                href="#1ce76986-1849-4593-b7ba-23703f00537e"
                >
                Authentication
                </a>
                </ListItem>
                <ListItem>
                <a
                href="#0da28270-b7f4-453d-b51c-b7ad0cd39aaf"
                >
                Rate limiting
                </a>
                </ListItem>
                <ListItem>
                <a
                href="#1ce76986-1849-4593-b7ba-23703f00537e"
                >
                Authentication
                </a>
                </ListItem>
                <ListItem>
                <a
                href="#0ce9c381-8494-4213-af46-53a0469069c9"
                >
                Errors
                </a>
                </ListItem>
                <ListItem>
                <a
                href="#c26781e3-e889-4662-8999-33816a1ecc15"
                >
                Core Services
                </a>
                </ListItem>
                <ListItem>
                <a
                href="#c668cdad-6cc3-479f-9d80-4d0744c1a3c9"
                >
                Pricing Data
                </a>
                </ListItem>
                <ListItem>
                <a
                href="#0b38047b-cba9-447e-b452-9f2b65a7fc14"
                >
                Core Data
                </a>
                </ListItem>
                <ListItem>
                <a
                href="#b9f00bd5-2dad-4985-830a-b682029d899b"
                >
                Chains Data
                </a>
                </ListItem>
            </UnorderedList> */}
            <SectionHeaderWithDescription title="Latest updates">
                <p id="518f3f06-adbe-4f4e-8632-264729c10ee2" className="">
                    <em>Version 2.2 - deployed on xxx</em>
                </p>
                <p id="1b8242c6-eb9b-4973-be95-53a434dc6dba" className="">
                    <em>
                        <strong>Increased coverage:</strong>
                    </em>
                </p>
                <ul
                id="80ef90f4-45cb-4efc-8fc3-dca6e2f956ce"
                className="bulleted-list"
                >
                <li style={{ listStyleType: 'disc' }}>
                    <em>
                    added new chains and protocols (and therefore new markets
                    and tokens
                    </em>
                </li>
                </ul>
                <p id="bdf4a743-856b-4b93-bbba-9f7817af084c" className="">
                <em>
                    <strong>Better pricing:</strong>
                </em>
                </p>
                <ul
                id="df49c01e-e993-41f8-8426-9ffbf5936f57"
                className="bulleted-list"
                >
                <li style={{ listStyleType: 'disc' }}>
                    <em>
                    increased precision of pricing calculations by increasing
                    decimals
                    </em>
                </li>
                </ul>
                <ul
                id="98aa890f-e5b1-4adc-947b-50b9deea6f55"
                className="bulleted-list"
                >
                <li style={{ listStyleType: 'disc' }}>
                    <em>
                    increased accuracy by adding more input token prices to
                    avoid derivations
                    </em>
                </li>
                </ul>
                <p id="8f441b99-3891-4cd4-87b6-4adeb35f51ec" className="">
                <em>
                    <strong>Better scalability:</strong>
                </em>
                </p>
                <ul
                id="82e5f721-0d46-4a61-994a-1d44970777a1"
                className="bulleted-list"
                >
                <li style={{ listStyleType: 'disc' }}>
                    <em>
                    Refactored the database to better filter markets and tokens
                    by chain
                    </em>
                </li>
                </ul>
                <ul
                id="4881137f-8037-4fff-a886-0d8ab3d7555b"
                className="bulleted-list"
                >
                <li style={{ listStyleType: 'disc' }}>
                    <em>
                    Reduced query resolution times by grouping data in the
                    long-term cache by month (we now use less than 1/2 of space
                    and memory)
                    </em>
                </li>
                </ul>
                <p id="02047012-51e1-41dc-b8e6-38f51b43ed8a" className="">
                <em>
                    <strong>Improved consistency:</strong>
                </em>
                </p>
                <ul
                id="77411c21-d604-4c0e-9bbb-19c8a99e1abf"
                className="bulleted-list"
                >
                <li style={{ listStyleType: 'disc' }}>
                    <em>
                    introduced option to return less pricing data (only average
                    price or full average + open/high/low/close)
                    </em>
                </li>
                </ul>
                <ul
                id="05876510-8eab-4000-8915-0d6e11f131da"
                className="bulleted-list"
                >
                <li style={{ listStyleType: 'disc' }}>
                    <em>
                    standardised query parameters across all endpoints (e.g.
                    using timestamps everywhere instead of dates)
                    </em>
                </li>
                </ul>
            </SectionHeaderWithDescription>
            <SectionHeaderWithDescription title="Introduction">
                <HStack>
                    <Text>
                    Welcome! Here we discuss how our API works and how can you
                    integrate it into your application to access all our DeFi data.
                    If you want a general overview of SimpleFi, you can check out{' '}
                    <a href="https://medium.com/simplefi/maams-and-sers-we-give-you-simplefi-v2-82ead394d4b6">
                        this link
                    </a>
                    , and if you want to learn more about how you can integrate with
                    Simplefi’s Subgraphs,{' '}
                    <a href="https://docs.simplefi.finance/subgraph-development-documentation/dashboard-integration">
                        click here.
                    </a>
                    </Text>
                </HStack>
            </SectionHeaderWithDescription>
            <SectionHeaderWithDescription title="Getting Started">
                <SubSectionWithText title="Authentication">
                        
                        <HStack>
                            <Text>The use of our API requires authentication through and Api-key, which for the time being is free. To create your own personal key, complete our online form <a href="https://docs.google.com/forms/d/e/1FAIpQLScIi27XTe8jMQ5iSlbuomaH62c4WOSwxZTNa10FbYZ2CtSgwQ/viewform">
                                here.   
                            </a></Text> 
                            
                        </HStack>
                        <Text>
                        Once you&apos;ve obtained an Api-key, you must attach it to the headers of each request under the header
                        </Text>
                        <code>
                            <strong>Authorization</strong>
                        </code>
                        <pre id="a5a00bc8-a96e-4ca0-8eb3-189e5f87a100" className="code">
                        {/* <code>fetch(url, {headers: { Authorization: Bearer &lt;my-api-key&gt;}})</code> */}
                        </pre>
                </SubSectionWithText>
                <SubSectionWithText title="Rate Limiting"> 
                    <Text>
                        Each Api-key has a personal usage of 100,000 requests a month.
                    </Text>
                </SubSectionWithText>
                <SubSectionWithText title="Errors"> 
                        <Container width="container.md">
                            <Table variant='simple'  size="lg" bg="inherit" width="100%" p={0}>
                                <Thead>
                                    <Tr>
                                        <Th>Error Code</Th>
                                        <Th>Code Definition</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {errorsData.map((error) => (
                                        <Tr key={error.code}>
                                            <Td>{error.code}</Td>
                                            <Td>{error.message}</Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </Container>
                </SubSectionWithText>
            </SectionHeaderWithDescription>
            <SectionHeaderWithDescription title="Core Services">
                <SubSectionWithText title="Pricing Data">
                    <Text pb={1}>
                    Our pricing service provides historical prices for different types of tokens:
                    </Text>
                    <UnorderedList pl={4} pb={1}>
                        <ListItem>‘base’ tokens (we may also describe these as ‘assets’ in the documentation and API responses): these are simple tokens such as Curve’s governance token. Base tokens don’t represent anything other than themselves.</ListItem>
                        <ListItem>
                        ‘positional’ tokens (we may also refer to these as ‘composed’ tokens, ‘output’ tokens, ‘receipt’ tokens or ‘markets’ in the documentation and API responses):
                        <UnorderedList pl={4} pb={1}>
                            <ListItem>
                            these tokens represent a position in a &#x27;market’,
                    which can be a liquidity pool, farm, lending pool, etc.
                    The ‘positional’ token in a liquidity pool for example is
                    what is generally called an LP token.
                            </ListItem>
                            <ListItem>
                            queries for a positional token will also return the state
                    of the underlying market’s reserves. For example, a query
                    for pricing of a Sushiswap DEX LP token will return how
                    much of each token of the underlying pair was held in
                    reserve by the pool at the specified date(s).
                            </ListItem>
                        </UnorderedList>
                        </ListItem>
                    </UnorderedList>
                    <Text  pb={1}>
                    Prices of all tokens are expressed in USD at the specified
                    timestamp. One of our endpoints allows you to query the price of
                    USD vs. another 13 fiat currencies.
                    </Text>
                    <Text  pb={1}>
                    By default, the “daily” price is returned, with a timestamp of
            midnight UTC. You can specify the “hourly” option in the call to
            receive prices with a granularity of 1h for base tokens and 3h
            for positional tokens on the day(s) specified.
                    </Text>
                    <Text  pb={1}>
                    The extended option will also provide open, close, high and low
            prices for the day(s) specified (the reference time being
            midnight UTC).
                    </Text>
                    <Text  pb={1}>
                    Example use cases:
                    </Text>
                    <UnorderedList pl={4} pb={1}>
                        <ListItem>You you want to get the latest price of an LP token in
                    order to calculate the amount you have locked in that
                    pool.</ListItem>
                        <ListItem>You want to see the evolution of a pool’s LP token price
                    over time.</ListItem>
                        <ListItem>You want to see how a pool’s reserves have evolved over
                    time.</ListItem>
                    </UnorderedList>
                    <LinkToEndpoints 
                        title="Pricing data endpoints" 
                        text="A full interactive documentation of service endpoints can be found" 
                        link="https://api.docs.simplefi.finance/pricing"
                    />
                </SubSectionWithText>
                <SubSectionWithText title="Core Data">
                    <Text pb={1}> In this service you can find information on all the protocols,
                    markets and tokens (non-pricing data) that we track, as well as
                    the subgraphs that we use.</Text>
                    <Text pb={1}>Protocols are categorised within “Organisations”, which group
                    all instances and deployments pertaining to the same protocol.
                    For example, the Uniswap “Organisation” will return data key
                    data on all its different versions, and the addresses of its
                    deployments on different chains.</Text>
                    <Text pb={1}>Every component within an Organisation has a separate
                    ProtocolId, which is chain specific. For example, each
                    deployment of the Sushiswap DEX on different chains will have
                    its own protocolId. Also, DEXes and their associated farms are
                    generally considered as separate protocols (and therefore for
                    have different protocolId’s).</Text>
                    <Text pb={1}>Subgraphs are the primary source of onchain data we use for our
                    APIs. These may be subgraphs developed by SimpleFi or by
                    partners such as Messari. If you’d like your subgraph to be
                    considered for inclusion, please{' '}
                    <a href="https://discord.gg/qDMG7HGnqt">
                        contact the team on Discord
                    </a>
                    !</Text>
                    <Text>
                    Example use cases:
                    </Text>
                    <UnorderedList pl={4} pb={1}>
                        <ListItem>You require more information on a specific protocol, such
                    as which chain it’s deployed on, its factory address, etc.</ListItem>
                        <ListItem>You would like to know, for a specific market, which
                    tokens can be deposited or staked into it.</ListItem>
                        <ListItem>You’d like to know all the farms that a given LP token can
                    be staked in. Or all the liquidity pools that a base token
                    can be deposited in.</ListItem>
                    <ListItem>You would like to find all farms that reward the Sushi
                    token.</ListItem>
                    <ListItem>You would like to see all the protocols that SimpleFi
                    tracks actively.</ListItem>
                    <ListItem>You would like to find the Uniswap DEX factory contract
                    address on Eth mainnet.</ListItem>
                    </UnorderedList>
                    <LinkToEndpoints 
                        title="Core data endpoints" 
                        text="A full interactive documentation of service endpoints can be found" 
                        link="https://api.docs.simplefi.finance/core-data"
                    />
                </SubSectionWithText>
                <SubSectionWithText title="Chains Data">
                    <Text pb={1}>
                    In this service you can find information on all the chains that
            we track, and the blocks they produce.
                    </Text>
                    <Text pb={1}>For blocks data, our endpoints receive a timestamp, or return
            the latest saved block by default. Please note that blocks are
            saved with a 5 minute granularity, with the same timestamp for
            all chains (allowing you, for example, to generate a comparable
            timeline for all chains with a single call). The block returned
            for a given timestamp will be the first block saved with an
            earlier timestamp than the one specified.</Text>
                    <Text pb={1}>
                    Example use cases:
                    </Text>
                    <UnorderedList pl={4} pb={1}>
                        <ListItem>You have a chainId and require more information on that
                    chain (e.g. its RPC endpoint).</ListItem>
                        <ListItem>You would like to retrieve a daily timeline of block
                    numbers for one or several chains.</ListItem>
                        <ListItem>You would like to find all blocks across the chains we
                    track for a specific timestamp.</ListItem>
                    </UnorderedList>
                </SubSectionWithText>
                <LinkToEndpoints 
                    title="Chain data endpoints" 
                    text="A full interactive documentation of service endpoints can be found" 
                    link="https://api.docs.simplefi.finance/chains-data"
                />
            </SectionHeaderWithDescription>
        </>
    )
}