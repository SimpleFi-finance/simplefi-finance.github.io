import React from "react";
import { Text } from "@chakra-ui/react";

export const text = {
    "Latest Updates": {
        paragraphs: [
            [
                {
                    type: "title",
                    item:  "Version 2.2 - deployed on xxx",
                },
            ], [
                {
                    type: "title",
                    item: "Increased coverage: ",
                },
                {
                    type: "list",
                    item: [
                        "added new chains and protocols (and therefore new markets and tokens",
                    ]
                },
            ], [
                {
                    type: "title",
                    item: "Better pricing: ",
                },
                {
                    type: "list",
                    item: [
                        "increased precision of pricing calculations by increasing decimals",
                        "increased accuracy by adding more input token prices to avoid derivations",
                    ]
                },
            ], [
                {
                    type: "title",
                    item: "Better scalability: ",
                },
                {
                    type: "list",
                    item: [
                        "Refactored the database to better filter markets and tokens by chain",
                        "Reduced query resolution times by grouping data in the long-term cache by month (we now use less than 1/2 of space and memory)",
                    ]
                },
            ], [
                {
                    type: "title",
                    item: "Improved consistency: ",
                },
                {
                    type: "list",
                    item: [
                        "introduced option to return less pricing data (only average price or full average + open/high/low/close)",
                        "standardised query parameters across all endpoints (e.g. using timestamps everywhere instead of dates)",
                    ]
                }
            ]
        ],
    },
    "Introduction": {
        "paragraphs": [
            [
                {
                    type: "component",
                    item:  <Text py={2}>Welcome! Here we discuss how our API works and how can youintegrate it into your application to access all our DeFi data. If you want a general overview of SimpleFi, you can check out <a style={{fontWeight: "bold", color: "#D53F8C"}} href="https://medium.com/simplefi/maams-and-sers-we-give-you-simplefi-v2-82ead394d4b6">this link.</a></Text>,
                },
                {
                    type: "component",
                    item: <Text py={2}>If you want to learn more about how you can integrate with Simplefi&apos;s Subgraphs, <a style={{fontWeight: "bold", color: "#D53F8C"}} href="https://docs.simplefi.finance/subgraph-development-documentation/dashboard-integration">click here.</a></Text>,
                }
            ]
        ]
    },
    "Getting Started": {
        "paragraphs": [
            [
                {
                    type: 'title',
                    item: "Authentication",
                },
                {
                    type: "component",
                    item: <Text py={2}>The use of our API requires authentication through an api-key, which for the time being is free. To create your own personal key, complete our online form <a style={{fontWeight: "bold", color: "#D53F8C"}} href="https://docs.google.com/forms/d/e/1FAIpQLScIi27XTe8jMQ5iSlbuomaH62c4WOSwxZTNa10FbYZ2CtSgwQ/viewform">here.</a></Text>,
                },
                {
                    type: "text",
                    item: "Once you've obtained an Api-key, you must attach it to the headers of each request under the header",
                },
                {
                    type: "code",
                    item: "fetch(url, { headers: { Authorization: Bearer < my-api-key > } } )"
                },
                {
                    type: "text",
                    item: "Each Api-key has a personal usage of 100,000 requests a month."
                }
            ], [
                {
                    type: "title",
                    item: "Errors",
                },
                {
                    type: "table",
                    item: {
                        headers: ["Error", "Description"],
                        rows: [
                            ["200s", "Success"],
                            ["400s", "Client error"],
                            ["500s", "Server error"],
                        ]
                    }
                }
            ],
        ]
    },
    "Core Services": {
        services: [
            {"Pricing Data": {
                paragraphs: []
            }},
            {"Core Data": {
                paragraphs: []
            }},
            {"Chains Data": {
                paragraphs: []
            }},
        ]
    }
}