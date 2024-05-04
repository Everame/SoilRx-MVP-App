import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'
// TODO: Сделать чтобы alias правильно работали
import { ESpacing } from './src/shared/ui/Enums/Enums'

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './.storybook/**/*.ts',
    ],
    future: {
        hoverOnlyWhenSupported: true,
    },
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1290px',
            '2xl': '1440px',
        },
        container: {
            center: true,
            padding: String(ESpacing.VALUE8),
        },
        extend: {
            colors: {
                info: 'var(--info)',
                success: {
                    DEFAULT: 'var(--success)',
                    primary: 'var(--success-primary)',
                    secondary: 'var(--success-secondary)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    hover: 'var(--secondary-hover)',
                },
                warning: {
                    DEFAULT: 'var(--warning)',
                    bg: 'var(--warning-bg)',
                    secondary: 'var(--warning-secondary)',
                    primary: 'var(--warning-primary)',
                },
                third: 'var(--third)',
                error: {
                    DEFAULT: 'var(--error)',
                    secondary: 'var(--error-secondary)',
                },
                beige: 'var(--beige)',
                black: 'var(--black)',
                border: {
                    primary: 'var(--border-primary)',
                    form: 'var(--border-form)',
                },
                gray: {
                    DEFAULT: 'var(--gray)',
                    '100': 'var(--gray100)',
                    '200': 'var(--gray200)',
                    '300': 'var(--gray300)',
                    '400': 'var(--gray400)',
                    '500': 'var(--gray500)',
                    '600': 'var(--gray600)',
                    '800': 'var(--gray800)',
                    '800-thirty': 'var(--gray800-thirty)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    half: 'var(--accent-half)',
                    hover: 'var(--accent-hover)',
                    dark: 'var(--accent-dark)',
                },
                press: {
                    secondary: 'var(--press-secondary)',
                },
            },
            fontFamily: {
                openSans: ['OpenSans', ...fontFamily.sans],
                inter: ['Inter', ...fontFamily.sans],
                raleway: ['Raleway', ...fontFamily.sans],
            },
            backgroundImage: {
                'add-field': 'url("/images/border-dashed.svg")',
                'main-bg': 'url("/images/main-bg.png")',
            },
            boxShadow: {
                sm: '0px 3px 8px -1px rgba(50, 50, 71, 0.05),0px 0px 1px 0px rgba(12, 26, 75, 0.24)',
            },
            borderWidth: {
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
            },
            borderRadius: {
                none: '0px',
                sm: '2px',
                DEFAULT: '4px',
                md: '6px',
                lg: '8px',
                xl: '12px',
                '2xl': '16px',
                '2sxl': '20px',
                '3xl': '24px',
                full: '50%',
            },
            spacing: {
                adaptive: 'calc(var(--index) * 10)',
                px: '1px',
                0: '0',
                0.5: '2px',
                1: '4px',
                1.5: '6px',
                2: '8px',
                2.5: '10px',
                3: '12px',
                3.5: '14px',
                4: '16px',
                4.5: '18px',
                5: '20px',
                5.5: '22px',
                6: '24px',
                6.5: '26px',
                7: '28px',
                7.5: '30px',
                8: '32px',
                8.5: '34px',
                9: '36px',
                10: '40px',
                11: '44px',
                12: '48px',
                12.5: '50px',
                14: '56px',
                15: '60px',
                16: '64px',
                17: '68px',
                18: '72px',
                20: '80px',
                22.5: '90px',
                24: '96px',
                25: 'var(--minHeight)',
            },
            lineHeight: {
                none: '1',
                tight: '1.25',
                snug: '1.375',
                normal: '1.5',
                relaxed: '1.625',
                loose: '2',
                3: '12px',
                3.5: '14px',
                4: '16px',
                4.5: '18px',
                5: '20px',
                6: '24px',
                7: '28px',
                8: '32px',
                9: '36px',
                10: '40px',
            },
            fontSize: {
                adaptive: ['calc(var(--index) + 10)', { lineHeight: 'normal' }],
                xxs: ['10px', { lineHeight: 'normal' }],
                xs: ['12px', { lineHeight: '15px' }],
                sm: ['14px', { lineHeight: '18px' }],
                base: ['16px', { lineHeight: '18px' }],
                lg: ['18px', { lineHeight: '28px' }],
                xl: ['20px', { lineHeight: '28px' }],
                '2xl': ['24px', { lineHeight: '32px' }],
                '3xl': ['30px', { lineHeight: '36px' }],
                '4xl': ['36px', { lineHeight: '36px' }],
                '5xl': ['48px', { lineHeight: '1' }],
                '6xl': ['60px', { lineHeight: '1' }],
                '7xl': ['72px', { lineHeight: '1' }],
                '8xl': ['96px', { lineHeight: '1' }],
                '9xl': ['144px', { lineHeight: '1' }],
            },
        },
    },
} satisfies Config