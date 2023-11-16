import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/*.{js,ts,jsx,tsx}',
        './components/*/*.{js,ts,jsx,tsx}',
        './components/*/*/*.{js,ts,jsx,tsx}',
        './components/*/*/*/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                Prag: ['var(--font-work-sans)'],
            },
            colors: {
                black: 'rgb(0,0,0)',
                gray: '#C0C0C0',
                red: '#C32A3E',
                green: '#D5FF40'
            },
            backgroundColor: {
                black: 'rgb(0,0,0)',
                gray: '#C0C0C0',
            },
            borderColor: {
                black: 'rgb(0,0,0)',
                gray: '#C0C0C0',
            },
            fontSize: {
                'heading-xxl': ['130px', { fontWeight: '500', lineHeight: '130px' }],
                'heading-xl': ['80px', { fontWeight: '500', lineHeight: '80px' }],
                'heading-80': ['80px', { fontWeight: '500', lineHeight: '80px' }],
                'heading-80-bold': ['80px', { fontWeight: '700', lineHeight: '80px' }],
                'heading-64': ['64px', { fontWeight: '500', lineHeight: '64px' }],
                'heading-64-bold': ['64px', { fontWeight: '700', lineHeight: '64px' }],
                'heading-thin-xl': ['100px', { fontWeight: '200' }],
                'heading-pre-xl': ['60px', { fontWeight: '400', lineHeight: '50px' }],
                'heading-l': ['40px', { fontWeight: '500', lineHeight: '40px' }],
                'heading-l-light': ['40px', { fontWeight: '300', lineHeight: '40px' }],
                'heading-l-bold': ['35px', { fontWeight: '500', lineHeight: '30px' }],
                'heading-light-l': ['31px', { fontWeight: '300', lineHeight: '30px' }],
                'heading-light-l-bold': [
                    '24px',
                    { fontWeight: '500', lineHeight: '30px' },
                ],

                '160': ['160px', { fontWeight: '300', lineHeight: '160px' }],
                'text-m': ['20px', { fontWeight: '500', lineHeight: '20px' }],
                'text-m-long': ['18px', { fontWeight: '300' }],
                'text-l': ['24px', { fontWeight: 'Regular', lineHeight: '28px' }],
                'text-l-light': ['20px', { fontWeight: '300', lineHeight: '24px' }],
                'text-l-light-m': ['16px', { fontWeight: '300', lineHeight: '24px' }],
            },
            filter: { 'white-icon': 'brightness(0) invert(1)' },
            spacing: {
                px: '1px',
                0: '0px',
                1: '2px',
                2: '8px',
                3: '12px',
                4: '16px',
                5: '20px',
                6: '24px',
                7: '28px',
                8: '32px',
                9: '36px',
                10: '42px',
                11: '44px',
                12: '48px',
                13: '52px',
                14: '56px',
                15: '60px',
                'icon-1': '24px',
                'icon-2': '32px',
            },

            borderRadius: {
                1: '2px',
                2: '8px',
                3: '12px',
                4: '16px',
                5: '20px',
                6: '24px',
                7: '28px',
                8: '32px',
                9: '36px',
                10: '40px',
                11: '44px',
                12: '48px',
                13: '52px',
                14: '56px',
                15: '60px',
            },
        },
    },
    plugins: [],
};
export default config;
