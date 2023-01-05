import React from "react";
import { Text } from "@chakra-ui/react";
import { LinkToEndpoints } from "./utils";

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
                        {
                            type: "text",
                            item: "added new chains and protocols (and therefore new markets and tokens",
                        }
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
                        {
                            type: "text",
                            item: "increased precision of pricing calculations by increasing decimals"
                        },
                        {
                            type: "text",
                            item: "increased accuracy by adding more input token prices to avoid derivations",
                        }
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
                        {
                            type: "text",
                            item: "Refactored the database to better filter markets and tokens by chain",
                        },
                        {
                            type: "text",
                            item: "Reduced query resolution times by grouping data in the long-term cache by month (we now use less than 1/2 of space and memory)",
                        }
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
                        {
                            type: "text",
                            item: "introduced option to return less pricing data (only average price or full average + open/high/low/close)",
                        },
                        {
                            type: "text",
                            item: "standardised query parameters across all endpoints (e.g. using timestamps everywhere instead of dates)",
                        }
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
                    item:  <Text py={2} key="welcome-1">Welcome! Here we discuss how our API works and how can youintegrate it into your application to access all our DeFi data. If you want a general overview of SimpleFi, you can check out <a style={{fontWeight: "bold", color: "#D53F8C"}} href="https://medium.com/simplefi/maams-and-sers-we-give-you-simplefi-v2-82ead394d4b6">this link.</a></Text>,
                },
                {
                    type: "component",
                    item: <Text py={2} key="welcome-2">If you want to learn more about how you can integrate with Simplefi&apos;s Subgraphs, <a style={{fontWeight: "bold", color: "#D53F8C"}} href="https://docs.simplefi.finance/subgraph-development-documentation/dashboard-integration">click here.</a></Text>,
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
                    item: <Text py={2} key="started-1">The use of our API requires authentication through an api-key, which for the time being is free. To create your own personal key, complete our online form <a style={{fontWeight: "bold", color: "#D53F8C"}} href="https://docs.google.com/forms/d/e/1FAIpQLScIi27XTe8jMQ5iSlbuomaH62c4WOSwxZTNa10FbYZ2CtSgwQ/viewform">here.</a></Text>,
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
                paragraphs: [
                    [
                        {
                            type: "text",
                            item: "Our pricing service provides historical prices for different types of tokens: "
                        }, {
                            type: "list",
                            item: [
                                {
                                    type: "text",
                                    item: "‘base’ tokens (we may also describe these as ‘assets’ in the documentation and API responses): these are simple tokens such as Curve’s governance token. Base tokens don’t represent anything other than themselves.",
                                },
                                {
                                    type: "text",
                                    item: "‘positional’ tokens (we may also refer to these as ‘composed’ tokens, ‘output’ tokens, ‘receipt’ tokens or ‘markets’ in the documentation and API responses):"
                                },
                                {
                                    type: "list",
                                    item: [
                                        {
                                            type: "text",
                                            item: "these tokens represent a position in a &#x27;market’, which can be a liquidity pool, farm, lending pool, etc. The ‘positional’ token in a liquidity pool for example is what is generally called an LP token."
                                        },
                                        {
                                            type: "text",
                                            item: "queries for a positional token will also return the state of the underlying market’s reserves. For example, a query for pricing of a Sushiswap DEX LP token will return how much of each token of the underlying pair was held in reserve by the pool at the specified date(s).",
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    [
                        {
                            type: "text",
                            item: "Prices of all tokens are expressed in USD at the specified timestamp. One of our endpoints allows you to query the price of USD vs. another 13 fiat currencies."
                        },
                    ], [
                        {
                            type: "text",
                            item: "By default, the “daily” price is returned, with a timestamp of midnight UTC. You can specify the “hourly” option in the call to receive prices with a granularity of 1h for base tokens and 3h for positional tokens on the day(s) specified."
                        },
                        {
                            type: "text",
                            item: "The extended option will also provide open, close, high and low prices for the day(s) specified (the reference time being midnight UTC)."
                        },
                    ], [
                        {
                            type: "text",
                            item: "Example use cases: "
                        },
                        {
                            type: "list",
                            item: [
                                {
                                    type: "text",
                                    item: "You you want to get the latest price of an LP token in order to calculate the amount you have locked in that pool.",
                                },
                                {
                                    type: "text",
                                    item: "You want to see the evolution of a pool’s LP token price over time.",
                                },
                                {
                                    type: "text",
                                    item: "You want to see how a pool’s reserves have evolved over time."
                                }
                            ]
                        }
                    ],[
                        {
                            type: "component",
                            item: <LinkToEndpoints 
                                title="Pricing data endpoints" 
                                text="A full interactive documentation of service endpoints can be found" 
                                link="https://api.docs.simplefi.finance/pricing"
                            />
                        }
                    ]
                ]
            }},
            {"Core Data": {
                paragraphs: [
                    [
                        {
                            type: "text",
                            item: "In this service you can find information on all the protocols, markets and tokens (non-pricing data) that we track, as well as the subgraphs that we use."
                        },
                        {
                            type: "text",
                            item: "Protocols are categorised within “Organisations”, which group all instances and deployments pertaining to the same protocol. For example, the Uniswap “Organisation” will return data key data on all its different versions, and the addresses of its deployments on different chains."
                        },
                        {
                            type: "text",
                            item: "Every component within an Organisation has a separate ProtocolId, which is chain specific. For example, each deployment of the Sushiswap DEX on different chains will have its own protocolId. Also, DEXes and their associated farms are generally considered as separate protocols (and therefore for have different protocolId’s)."
                        },
                        {
                            type: "component",
                            item: <Text pb={1}>Subgraphs are the primary source of onchain data we use for our
                            APIs. These may be subgraphs developed by SimpleFi or by
                            partners such as Messari. If you’d like your subgraph to be
                            considered for inclusion, please{' '}
                            <a 
                                style={{fontWeight: "bold", color: "#D53F8C"}}
                                href="https://discord.gg/qDMG7HGnqt">
                                contact the team on Discord
                            </a>
                            !</Text>
                        },
                        {
                            type: "text",
                            item: "Example use cases: "
                        },
                        {
                            type: "list",
                            item: [
                                {
                                    type: "text",
                                    item: "You require more information on a specific protocol, such as which chain it’s deployed on, its factory address, etc."
                                },
                                {
                                    type: "text",
                                    item: "You would like to know, for a specific market, which tokens can be deposited or staked into it."
                                },
                                {
                                    type: "text",
                                    item: "You’d like to know all the farms that a given LP token can be staked in. Or all the liquidity pools that a base token can be deposited in."
                                },
                                {
                                    type: "text",
                                    item: "You would like to find all farms that reward the Sushi token."
                                },
                                {
                                    type: "text",
                                    item: "You would like to see all the protocols that SimpleFi tracks actively."
                                },
                                {
                                    type: "text",
                                    item: "You would like to find the Uniswap DEX factory contract address on Eth mainnet."
                                }
                            ]
                        }
                    ],
                    [
                        {
                            type: "component",
                            item: <LinkToEndpoints 
                                title="Core data endpoints" 
                                text="A full interactive documentation of service endpoints can be found" 
                                link="https://api.docs.simplefi.finance/core-data"
                            />
                        }
                    ]
                ]
            }},
            {"Chains Data": {
                paragraphs: [
                    [
                        {
                            type: "text",
                            item: "In this service you can find information on all the chains that we track, and the blocks they produce."
                        },
                        {
                            type: "text",
                            item: "For blocks data, our endpoints receive a timestamp, or return the latest saved block by default. Please note that blocks are saved with a 5 minute granularity, with the same timestamp for all chains (allowing you, for example, to generate a comparable timeline for all chains with a single call). The block returned for a given timestamp will be the first block saved with an earlier timestamp than the one specified."
                        },
                        {
                            type: 'text',
                            item: "Example use cases:"
                        },
                        {
                            type: "list",
                            item: [
                                {
                                    type: "text",
                                    item: "You have a chainId and require more information on that chain (e.g. its RPC endpoint)."
                                },
                                {
                                    type: "text",
                                    item: "You would like to retrieve a daily timeline of block numbers for one or several chains."
                                },
                                {
                                    type: "text",
                                    item: "You would like to find all blocks across the chains we track for a specific timestamp."
                                }
                            ]
                        }
                    ],
                    [
                        {
                            type: "component",
                            item: <LinkToEndpoints 
                            title="Chain data endpoints" 
                            text="A full interactive documentation of service endpoints can be found" 
                            link="https://api.docs.simplefi.finance/chains-data"
                            />
                        }
                    ]
                ]
            }},
        ]
    }
}