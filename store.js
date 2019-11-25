export const store = {
    countriesOverview: [
        {
            name: 'Thailand',
            introduction: 'Thailand is the only country in south-east Asia to have escaped colonial rule. Buddhist religion, the monarchy and the military have helped to shape its society and politics.',
            id: 'thailand',
            img: 'thailand-country-image.jpg'
        },
        {
            name: 'Vietnam',
            introduction: 'Vietnam, a one-party Communist state, has one of south-east Asia\'s fastest-growing economies and has set its sights on becoming a developed nation by 2020.',
            id: 'vietnam',
            img: 'vietnam-country-list-image.jpg'

        },
        {
            name: 'Cambodia',
            introduction: 'Heir to the ancient Khmer Empire, modern-day Cambodia is benefiting from two decades of relative stability, having endured civil war and the murderous rule of the Khmer Rouge in the 1970s.',
            id: 'cambodia',
            img: 'cambodia-country-list-image.jpg'

        },
        {
            name: 'Philippines',
            introduction: 'More than 7,000 islands make up the Philippines, but the bulk of its fast-growing population lives on just 11 of them.',
            id: 'philippines',
            img: 'philippines-country-list-image.jpg'

        }
    ],
    countries: {
        thailand: {
            name: 'Thailand',
            description: 'Thailand is the only country in south-east Asia to have escaped colonial rule. Buddhist religion, the monarchy and the military have helped to shape its society and politics.',
            currency: 'Thai baht',
            travelInformation: '',
            id: 'thailand',
            locationsOverview: [
                {
                    name: 'Koh Toa',
                    description: 'Island off the coast of Thailand',
                    id: 'kohToa'
                },
                {
                    name: 'Bangkok',
                    description: 'The capital of Thailand',
                    id: 'bangkok'
                }
            ]
        },
        vietnam: {
            name: 'Vietnam',
            description: 'Vietnam, a one-party Communist state, has one of south-east Asia\'s fastest-growing economies and has set its sights on becoming a developed nation by 2020.',
            currency: 'Vietnamese dong',
            travelInformation: '',
            id: 'vietnam',
            locationsOverview: [
                {
                    name: 'Ho Chi Minh City',
                    description: 'The capital of Vietnam',
                    id: 'hoChiMinhCity'
                }
            ]
        },
        cambodia: {
            name: 'Cambodia',
            description: 'Heir to the ancient Khmer Empire, modern-day Cambodia is benefiting from two decades of relative stability, having endured civil war and the murderous rule of the Khmer Rouge in the 1970s.',
            currency: 'Cambodian riel',
            travelInformation: '',
            id: 'cambodia',
            locationsOverview: [
                {
                    name: 'Phnom Penh',
                    description: 'The capital of Cambodia',
                    id: 'phnomPenh'
                }
            ]
        },
        philippines: {
            name: 'Philippines',
            description: 'More than 7,000 islands make up the Philippines, but the bulk of its fast-growing population lives on just 11 of them.',
            currency: 'Philippine peso',
            travelInformation: '',
            id: 'philippines',
            locationsOverview: [
                {
                    name: 'Manila',
                    description: 'The capital of the Philippines',
                    id: 'manila'
                }
            ]
        }
    },
    locations: {
        kohToa: {

        },
        bangkok: {

        },
        hoChiMinhCity: {

        },
        phnomPenh: {

        },
        manila: {

        }
    },
    attractions: {
        thailand: [],
        vietnam: [],
        cambodia: [],
        philippines: []
    },
    accommodation: {
        thailand: [],
        vietnam: [],
        cambodia: [],
        philippines: []
    }
};




// export const store = {
//     countriesOverview: [
//         {
//             name: 'Thailand',
//             introduction: 'Thailand is the only country in south-east Asia to have escaped colonial rule. Buddhist religion, the monarchy and the military have helped to shape its society and politics.',
//             id: 'thailand',
//             img: 'thailand-country-image.jpg'
//         },
//         {
//             name: 'Vietnam',
//             introduction: 'Vietnam, a one-party Communist state, has one of south-east Asia\'s fastest-growing economies and has set its sights on becoming a developed nation by 2020.',
//             id: 'vietnam',
//             img: 'vietnam-country-list-image.jpg'
//
//         },
//         {
//             name: 'Cambodia',
//             introduction: 'Heir to the ancient Khmer Empire, modern-day Cambodia is benefiting from two decades of relative stability, having endured civil war and the murderous rule of the Khmer Rouge in the 1970s.',
//             id: 'cambodia',
//             img: 'cambodia-country-list-image.jpg'
//
//         },
//         {
//             name: 'Philippines',
//             introduction: 'More than 7,000 islands make up the Philippines, but the bulk of its fast-growing population lives on just 11 of them.',
//             id: 'philippines',
//             img: 'philippines-country-list-image.jpg'
//
//         }
//      ],
//     countries: {
//         thailand: {
//             name: 'Thailand',
//             description: 'Thailand is the only country in south-east Asia to have escaped colonial rule. Buddhist religion, the monarchy and the military have helped to shape its society and politics.',
//             currency: 'Thai baht',
//             travelInformation: '',
//             id: 'thailand'
//         },
//         vietnam: {
//             name: 'Vietnam',
//             description: 'Vietnam, a one-party Communist state, has one of south-east Asia\'s fastest-growing economies and has set its sights on becoming a developed nation by 2020.',
//             currency: 'Vietnamese dong',
//             travelInformation: '',
//             id: 'vietnam'
//         },
//         cambodia: {
//             name: 'Cambodia',
//             description: 'Heir to the ancient Khmer Empire, modern-day Cambodia is benefiting from two decades of relative stability, having endured civil war and the murderous rule of the Khmer Rouge in the 1970s.',
//             currency: 'Cambodian riel',
//             travelInformation: '',
//             id: 'cambodia'
//         },
//         philippines: {
//             name: 'Philippines',
//             description: 'More than 7,000 islands make up the Philippines, but the bulk of its fast-growing population lives on just 11 of them.',
//             currency: 'Philippine peso',
//             travelInformation: '',
//             id: 'philippines'
//         }
//     },
//     locationsOverview: {
//         thailand: [
//             {
//                 name: 'Koh Toa',
//                 description: 'Island off the coast of Thailand',
//                 id: 'kohToa'
//             },
//             {
//                 name: 'Bangkok',
//                 description: 'The capital of Thailand',
//                 id: 'bangkok'
//             }
//         ],
//         vietnam: [
//             {
//                 name: 'Ho Chi Minh City',
//                 description: 'The capital of Vietnam',
//                 id: 'hoChiMinhCity'
//             }
//         ],
//         cambodia: [
//             {
//                 name: 'Phnom Penh',
//                 description: 'The capital of Cambodia',
//                 id: 'phnomPenh'
//             }
//         ],
//         philippines: [
//             {
//                 name: 'Manila',
//                 description: 'The capital of the Philippines',
//                 id: 'manila'
//             }
//         ]
//     },
//     locations: {
//            kohToa: {
//
//            },
//            bangkok: {
//
//            },
//            hoChiMinhCity: {
//
//            },
//            phnomPenh: {
//
//            },
//            manila: {
//
//            }
//     },
//     attractions: {
//         thailand: [],
//         vietnam: [],
//         cambodia: [],
//         philippines: []
//     },
//     accommodation: {
//         thailand: [],
//         vietnam: [],
//         cambodia: [],
//         philippines: []
//     }
// };
