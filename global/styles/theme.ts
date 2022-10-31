// and extend them!
interface ITheme {
    screen: {
        phone: string;
        tablet: string;
        laptop: string;
        desktop: string;
    }
    readonly fonts_thick: string;
    readonly fonts_prime: string;
    readonly fonts_second: string;
    readonly font_weights: { thin: string, extra_light: string, light: string, redular: string, medium: string, semibold: string, bold: string, extra_bold: string, black: string };
    readonly hexcolors: {
        readonly dark: string;
        readonly ice: string;
        readonly mint: string;
        readonly lemon: string;
        readonly rasberry: string;
        readonly grape: string;
        readonly showroom: string;
        readonly tiger: string;
    }
}

const theme = {
    screen: {
        phone: '500px',
        tablet: '900px',
        laptop: '1799px',
        desktop: '1800px',
    },
    fonts_thick: '\'Noto Sans\', sans-serif;',
    fonts_prime: '\'Playfair Display\', serif;',
    fonts_second: '\'Source Sans Pro\', sans-serif;',
    font_weights: { thin: '100', extra_light: '200', light: '300', redular: '400', medium: '500', semibold: '600', bold: '700', extra_bold: '800', black: '900' },
    hexcolors: {
        dark: '#1a1a1a',
        ice: '#f1fffb',
        mint: '#72ffd4',
        lemon: '#e3ff71',
        rasberry: '#ff719c',
        grape: '#8d71ff',
        showroom: '#fafafa',
        tiger: '#ff6550'
    }
} as ITheme

export default theme

