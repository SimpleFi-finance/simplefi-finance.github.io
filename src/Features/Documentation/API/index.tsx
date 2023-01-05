import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { SectionHeaderWithDescription } from '../../../Components';
import {text} from  './text';
import { generateParagraph } from './utils';

export const APIDocs = () =>  (
    <>
        {
            Object.entries(text).map(([key, value], index) => {
                return (
                    <SectionHeaderWithDescription title={key} key={`${key.replace(' ', '-')}-section-${index}`}>
                        {"paragraphs" in value && generateParagraph(value.paragraphs, key)}
                        {"services" in  value && value.services.map((service: any, num) => {
                            return Object.entries(service).map(([key, value]: [string, any]) => {
                                return (
                                    <Box key={key} py={2}>
                                        <Text as="u" key={`${key}-${index}`} py={2}>{key}</Text>
                                        <Box px={2}>
                                            {"paragraphs" in value && generateParagraph(value.paragraphs, `${key}-${num}`)}
                                        </Box>
                                    </Box>
                                )
                            })
                        })}
                    </SectionHeaderWithDescription>
                )
            })
        }
    </>
);