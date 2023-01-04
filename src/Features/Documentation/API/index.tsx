import React from 'react';
import { UnorderedList, ListItem, Text, HStack, Table, Thead, Tr, Th, Td, Tbody, Icon, VStack, useBreakpointValue, Box, Stack} from '@chakra-ui/react';
import { AiOutlineApi } from "react-icons/ai";
import { SectionHeaderWithDescription, SubSectionWithText } from '../../../Components';
import {text} from  './text';

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

const generateParagraph = (paragraphs: any[], key: string) => {
    return paragraphs.map(p => {
        return (
            <>
                <Box as="section" bg="inherit" p={{ base: '1', md: '1' }}>
                    <Stack spacing="1">
                        {p.map((el: any) => {
                            if (el.type === "title" && typeof el.item === 'string') return (
                                <Text fontSize={useBreakpointValue({ base: 'md', md: 'md', lg: 'lg' })} fontWeight="semibold" paddingBottom={4} paddingTop={4}>
                                    {el.item}
                                </Text>
                            )
                            if (el.type === "text" && typeof el.item === 'string') return (
                                <Text key={el.item.replace(' ', '-')} px={0} pt={1}>{el.item}</Text>
                            )
                            if (el.type === "list" && Array.isArray(el.item)) return (
                                // todo make recursive
                                <UnorderedList pl={useBreakpointValue({base: 2, md: 4, sm: 1, lg: 6})} pb={1}>
                                    {el.item.map((item: string) => (<ListItem key={item.replace(' ', '-')}>{item}</ListItem>))}
                                </UnorderedList>
                            )
                            if (el.type === "component") return el.item as JSX.Element;
                            if (el.type === "code") return (
                                <Text as="pre" left={5} position="relative" width="fit-content" mx={8} px={4} py={2} bg="gray.100" borderRadius="md" overflow="auto" whiteSpace="pre-wrap" wordBreak="break-word" fontSize="sm" lineHeight="tall" color="black">
                                    {el.item as string}
                                </Text>
                            )
                            if (el.type === "table" && typeof el.item === 'object' && "headers" in el.item && "rows" in el.item) return (
                                <Table variant='simple'  
                                    size={useBreakpointValue({default: "lg", sm: 'xs', md: 'md', lg: 'lg' })} 
                                    bg="inherit" 
                                    width={useBreakpointValue({default: "100%", sm: '100%', md: '100%', lg: '100%' })} 
                                    p={0}
                                >
                                    <Thead>
                                        <Tr>
                                            {el.item.headers.map((header: string) => (<Th key={`${header}-${key}`}>{header}</Th>))}
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {el.item.rows.map((row: any[], index: number) => (
                                            <Tr key={row[0]}>
                                                {row.map((cell: string, indexCell: number) => (<Td key={`${index}-${indexCell}-${key}`}>{cell}</Td>))}
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            )   
                        })}
                    </Stack>
                </Box>
            </>
        )
    })
}
export const APIDocs = () => {

    return (
        <>
        {
            Object.entries(text).map(([key, value]) => {
                return (
                    <SectionHeaderWithDescription title={key} key={key.replace(' ', '-')}>
                        {"paragraphs" in value && generateParagraph(value.paragraphs, key)}
                        {"services" in  value && value.services.map((service: any) => (<Text key={Object.keys(service)[0]}>{Object.keys(service)[0]}</Text>))}
                    </SectionHeaderWithDescription>
                )
            })
        }
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