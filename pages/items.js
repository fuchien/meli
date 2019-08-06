import React from 'react';

import Head from 'next/head';

// API
import api from '../src/services/api';

// CONTAINERS
import ItemsUI from '../src/containers/Items';

const Items = ({ data }) => (
    <div>
        <Head>
            <title>Items</title>
        </Head>
        <ItemsUI data={data} />
    </div>
);

Items.getInitialProps = async ({ query }) => {
    // const { data } = await api.get(`/sites/MLA/search?q=${query.search}`);
    const data = {
        site_id: 'MLA',
        query: 'Apple ipod',
        paging: {
            total: 2109,
            offset: 0,
            limit: 50,
            primary_results: 1000
        },
        results: [
            {
                id: 'MLA693874901',
                site_id: 'MLA',
                title: 'iPod Touch 4 Gen 8 Gb',
                seller: {
                    id: 116535333,
                    power_seller_status: null,
                    car_dealer: false,
                    real_estate_agency: false,
                    tags: []
                },
                price: 2000,
                currency_id: 'ARS',
                available_quantity: 1,
                sold_quantity: 0,
                buying_mode: 'buy_it_now',
                listing_type_id: 'gold_special',
                stop_time: '2037-11-20T19:07:07.000Z',
                condition: 'used',
                permalink:
                    'https://articulo.mercadolibre.com.ar/MLA-693874901-ipod-touch-4-gen-8-gb-_JM',
                thumbnail:
                    'http://mla-s2-p.mlstatic.com/807867-MLA26445512265_112017-I.jpg',
                accepts_mercadopago: true,
                installments: {
                    quantity: 12,
                    amount: 272.95,
                    rate: 63.77,
                    currency_id: 'ARS'
                },
                address: {
                    state_id: 'AR-S',
                    state_name: 'Santa Fe',
                    city_id: 'TUxBQ1JPUzg1Yjg3',
                    city_name: 'Rosario'
                },
                shipping: {
                    free_shipping: true,
                    mode: 'me2',
                    tags: [],
                    logistic_type: 'drop_off',
                    store_pick_up: false
                },
                seller_address: {
                    id: '',
                    comment: '',
                    address_line: '',
                    zip_code: '',
                    country: {
                        id: 'AR',
                        name: 'Argentina'
                    },
                    state: {
                        id: 'AR-S',
                        name: 'Santa Fe'
                    },
                    city: {
                        id: 'TUxBQ1JPUzg1Yjg3',
                        name: 'Rosario'
                    },
                    latitude: '',
                    longitude: ''
                },
                attributes: [
                    {
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'BRAND',
                        name: 'Marca',
                        value_id: '9344',
                        value_name: 'Apple',
                        value_struct: null,
                        attribute_group_id: 'OTHERS'
                    },
                    {
                        source: 1,
                        id: 'ITEM_CONDITION',
                        name: 'Condición del ítem',
                        value_id: '2230581',
                        value_name: 'Usado',
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros'
                    },
                    {
                        name: 'Línea',
                        value_id: null,
                        value_name: 'Touch',
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'LINE'
                    },
                    {
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'MODEL',
                        name: 'Modelo',
                        value_id: null,
                        value_name: 'Ipod Touch',
                        value_struct: null
                    }
                ],
                original_price: null,
                category_id: 'MLA7262',
                official_store_id: null,
                catalog_product_id: null,
                tags: [
                    'poor_quality_picture',
                    'immediate_payment',
                    'cart_eligible'
                ]
            },
            {
                id: 'MLA786117240',
                site_id: 'MLA',
                title: 'iPod Touch 5ta Generación 32 Gigas',
                seller: {
                    id: 178460733,
                    power_seller_status: null,
                    car_dealer: false,
                    real_estate_agency: false,
                    tags: []
                },
                price: 3000,
                currency_id: 'ARS',
                available_quantity: 1,
                sold_quantity: 0,
                buying_mode: 'buy_it_now',
                listing_type_id: 'gold_special',
                stop_time: '2039-05-22T20:08:44.000Z',
                condition: 'used',
                permalink:
                    'https://articulo.mercadolibre.com.ar/MLA-786117240-ipod-touch-5ta-generacion-32-gigas-_JM',
                thumbnail:
                    'http://mla-s1-p.mlstatic.com/743054-MLA28371111319_102018-I.jpg',
                accepts_mercadopago: true,
                installments: {
                    quantity: 12,
                    amount: 409.43,
                    rate: 63.77,
                    currency_id: 'ARS'
                },
                address: {
                    state_id: 'AR-B',
                    state_name: 'Buenos Aires',
                    city_id: null,
                    city_name: 'Villa Martelli'
                },
                shipping: {
                    free_shipping: false,
                    mode: 'me2',
                    tags: [],
                    logistic_type: 'drop_off',
                    store_pick_up: false
                },
                seller_address: {
                    id: '',
                    comment: '',
                    address_line: '',
                    zip_code: '',
                    country: {
                        id: 'AR',
                        name: 'Argentina'
                    },
                    state: {
                        id: 'AR-B',
                        name: 'Buenos Aires'
                    },
                    city: {
                        id: null,
                        name: 'Villa Martelli'
                    },
                    latitude: '',
                    longitude: ''
                },
                attributes: [
                    {
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'BRAND',
                        name: 'Marca',
                        value_id: '9344',
                        value_name: 'Apple'
                    },
                    {
                        id: 'ITEM_CONDITION',
                        name: 'Condición del ítem',
                        value_id: '2230581',
                        value_name: 'Usado',
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1
                    },
                    {
                        source: 1,
                        id: 'LINE',
                        name: 'Línea',
                        value_id: null,
                        value_name: 'Touch',
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros'
                    },
                    {
                        name: 'Modelo',
                        value_id: null,
                        value_name: 'Ipod Touch',
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'MODEL'
                    }
                ],
                original_price: null,
                category_id: 'MLA7262',
                official_store_id: null,
                catalog_product_id: null,
                tags: [
                    'poor_quality_picture',
                    'immediate_payment',
                    'cart_eligible'
                ]
            },
            {
                id: 'MLA775501229',
                site_id: 'MLA',
                title: 'iPod Touch 5, 32 Gb. Bateria Agotada',
                seller: {
                    id: 2053935,
                    power_seller_status: null,
                    car_dealer: false,
                    real_estate_agency: false,
                    tags: []
                },
                price: 2750,
                currency_id: 'ARS',
                available_quantity: 1,
                sold_quantity: 0,
                buying_mode: 'buy_it_now',
                listing_type_id: 'gold_special',
                stop_time: '2039-03-07T04:00:00.000Z',
                condition: 'used',
                permalink:
                    'https://articulo.mercadolibre.com.ar/MLA-775501229-ipod-touch-5-32-gb-bateria-agotada-_JM',
                thumbnail:
                    'http://mla-s2-p.mlstatic.com/804343-MLA29620360496_032019-I.jpg',
                accepts_mercadopago: true,
                installments: {
                    quantity: 12,
                    amount: 375.31,
                    rate: 63.77,
                    currency_id: 'ARS'
                },
                address: {
                    state_id: 'AR-C',
                    state_name: 'Capital Federal',
                    city_id: null,
                    city_name: 'Buenos Aires'
                },
                shipping: {
                    free_shipping: false,
                    mode: 'me2',
                    tags: [],
                    logistic_type: 'drop_off',
                    store_pick_up: false
                },
                seller_address: {
                    id: '',
                    comment: '',
                    address_line: '',
                    zip_code: '',
                    country: {
                        id: 'AR',
                        name: 'Argentina'
                    },
                    state: {
                        id: 'AR-C',
                        name: 'Capital Federal'
                    },
                    city: {
                        id: null,
                        name: 'Buenos Aires'
                    },
                    latitude: '',
                    longitude: ''
                },
                attributes: [
                    {
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'BRAND',
                        name: 'Marca',
                        value_id: '9344',
                        value_name: 'Apple',
                        value_struct: null
                    },
                    {
                        name: 'Condición del ítem',
                        value_id: '2230581',
                        value_name: 'Usado',
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1572,
                        id: 'ITEM_CONDITION'
                    },
                    {
                        value_id: null,
                        value_name: 'Touch',
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'LINE',
                        name: 'Línea'
                    },
                    {
                        value_name: 'Ipod Touch',
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'MODEL',
                        name: 'Modelo',
                        value_id: null
                    }
                ],
                original_price: null,
                category_id: 'MLA7262',
                official_store_id: null,
                catalog_product_id: null,
                tags: [
                    'poor_quality_picture',
                    'immediate_payment',
                    'cart_eligible'
                ]
            },
            {
                id: 'MLA788083706',
                site_id: 'MLA',
                title: 'Apple iPod Nano Generacion 7 De 16gb Negro Bluetooth ',
                seller: {
                    id: 29619312,
                    power_seller_status: 'silver',
                    car_dealer: false,
                    real_estate_agency: false,
                    tags: []
                },
                price: 5500,
                currency_id: 'ARS',
                available_quantity: 1,
                sold_quantity: 0,
                buying_mode: 'buy_it_now',
                listing_type_id: 'gold_special',
                stop_time: '2039-05-18T04:00:00.000Z',
                condition: 'used',
                permalink:
                    'https://articulo.mercadolibre.com.ar/MLA-788083706-apple-ipod-nano-generacion-7-de-16gb-negro-bluetooth-_JM',
                thumbnail:
                    'http://mla-s1-p.mlstatic.com/845301-MLA31635615568_072019-I.jpg',
                accepts_mercadopago: true,
                installments: {
                    quantity: 12,
                    amount: 750.61,
                    rate: 63.77,
                    currency_id: 'ARS'
                },
                address: {
                    state_id: 'AR-C',
                    state_name: 'Capital Federal',
                    city_id: null,
                    city_name: 'capital federal'
                },
                shipping: {
                    free_shipping: false,
                    mode: 'me2',
                    tags: [],
                    logistic_type: 'drop_off',
                    store_pick_up: false
                },
                seller_address: {
                    id: '',
                    comment: '',
                    address_line: '',
                    zip_code: '',
                    country: {
                        id: 'AR',
                        name: 'Argentina'
                    },
                    state: {
                        id: 'AR-C',
                        name: 'Capital Federal'
                    },
                    city: {
                        id: null,
                        name: 'capital federal'
                    },
                    latitude: '',
                    longitude: ''
                },
                attributes: [
                    {
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'BRAND',
                        name: 'Marca',
                        value_id: '9344',
                        value_name: 'Apple',
                        value_struct: null,
                        attribute_group_id: 'OTHERS'
                    },
                    {
                        source: 1572,
                        id: 'ITEM_CONDITION',
                        name: 'Condición del ítem',
                        value_id: '2230581',
                        value_name: 'Usado',
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros'
                    },
                    {
                        name: 'Línea',
                        value_id: null,
                        value_name: 'Nano',
                        value_struct: null,
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'LINE'
                    },
                    {
                        attribute_group_id: 'OTHERS',
                        attribute_group_name: 'Otros',
                        source: 1,
                        id: 'MODEL',
                        name: 'Modelo',
                        value_id: null,
                        value_name: 'iPod nano',
                        value_struct: null
                    }
                ],
                original_price: null,
                category_id: 'MLA7262',
                official_store_id: null,
                catalog_product_id: null,
                tags: [
                    'good_quality_picture',
                    'immediate_payment',
                    'cart_eligible'
                ]
            }
        ]
    };
    // const data = { results: [] };
    return { data };
};

export default Items;
