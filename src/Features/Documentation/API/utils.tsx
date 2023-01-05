import React from 'react';
import { AiOutlineApi } from "react-icons/ai";
import { UnorderedList, ListItem, HStack, Icon, VStack, Text , Table, Thead, Tr, Th, Td, Tbody, useBreakpointValue, Box, Stack} from '@chakra-ui/react';

interface IPropsLink {
    title: string;
    text: string;
    link: string
}

export const LinkToEndpoints = (props: IPropsLink) => {
    return (
        <VStack align="left" pt={8}>
            <HStack>
                <Icon as={AiOutlineApi} fontSize="md" fontWeight="semibold"/>
                <Text fontSize="md" fontWeight="semibold">{props.title}</Text>
            </HStack>
            <HStack px={4}>
                <Text>{props.text} <a style={{fontWeight: "bold", color: "#D53F8C"}} href={props.link}>here</a>.</Text>
            </HStack>
        </VStack>
    )
}

export const resolveObjType = ({type, item, key}: {type: string; item: any; key: string;}) => {
    if (type === "title" && typeof item === 'string') return (
        <Text 
            fontSize={useBreakpointValue({ base: 'md', md: 'md', lg: 'lg' })} 
            fontWeight="semibold" 
            key={`title-${key}`}
            paddingBottom={4} 
            paddingTop={4}>
            {item}
        </Text>
    )
    if (type === "text" && typeof item === 'string') return (
        <Text key={`text-${key}`} px={0} pt={1}>{item}</Text>
    )
    if (type === "list" && Array.isArray(item)) return (
        <>
            {generateList({type, item}, `list-${key}`)}
        </>
    )
    if (type === "component") return item as JSX.Element;
    if (type === "code") return (
        <Text as="pre" key={`code-${key}`} left={5} position="relative" width="fit-content" mx={8} px={4} py={2} bg="gray.100" borderRadius="md" overflow="auto" whiteSpace="pre-wrap" wordBreak="break-word" fontSize="sm" lineHeight="tall" color="black">
            {item as string}
        </Text>
    )
    if (type === "table" && typeof item === 'object' && "headers" in item && "rows" in item) return (
        <Table variant='simple'  
            size={useBreakpointValue({default: "lg", sm: 'xs', md: 'md', lg: 'lg' })} 
            bg="inherit" 
            key={`table-${key}`}
            width={useBreakpointValue({default: "100%", sm: '100%', md: '100%', lg: '100%' })} 
            p={0}
        >
            <Thead>
                <Tr>
                    {item.headers.map((header: string) => (<Th key={`${header}-table-${key}`}>{header}</Th>))}
                </Tr>
            </Thead>
            <Tbody>
                {item.rows.map((row: any[], index: number) => (
                    <Tr key={row[0]}>
                        {row.map((cell: string, indexCell: number) => (<Td key={`${index}-${indexCell}-table-${key}`}>{cell}</Td>))}
                    </Tr>
                ))}
            </Tbody>
        </Table>
    )
    return <></>
};

export const generateList = (data: any, key: string) => {
    if (data.type ==="list") {
        return (
            <UnorderedList pl={useBreakpointValue({base: 2, md: 4, sm: 1, lg: 6})} pb={1} key={key.replace(' ','-')}>
                {data.item.map((item: {type: string, item: any}, num: number) => {
                    if (item.type === "text") {
                        return <ListItem key={`${key.replace(' ','-')}-item-${num}`}>{item.item}</ListItem>
                    }
                    if (item.type === "list") {
                        return generateList(item, `${key}-nested`)
                    }
                })}
            </UnorderedList>
        )
    }
    return
};

export const generateParagraph = (paragraphs: any[], key: string) => {
    return paragraphs.map((p, index) => {
        return (
            <>
                <Box as="section" bg="inherit" p={{ base: '1', md: '1' }} key={`${key}-${index}`}>
                    <Stack spacing="1">
                        {p.map((el: any, num: number) => (
                            resolveObjType({type: el.type, item: el.item, key: `${key}-${index}-${num}`})
                        ))}
                    </Stack>
                </Box>
            </>
        )
    })
}