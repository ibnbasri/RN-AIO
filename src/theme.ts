const palette = {
  mauve: '#592941',
  tree: '#498467',
  aqua: '#52B788',
  blue: '#2f3c7e',
  celadon: '#B2D3A8',
  gingger: '#EDE5A6',
  purple: '#5A31F4',
  green: '#0ECD9D',
  red: '#CD0E61',
  black: '#0B0B0B',
  white: '#102E4A',
};

export const theme = {
  colors: {
    //background: '#f0f3bd',
    background: palette.blue,
    foreground: palette.black,
    celadon: palette.celadon,
    aqua: palette.aqua,
    tree: palette.tree,
    mauve: palette.mauve,
    gingger: palette.gingger,
    primary: palette.purple,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    white: '#FFF',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    xs: 0,
    s: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
  },
  textVariants: {
    header: {
      fontFamily: 'Raleway',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Merriweather',
      fontSize: 16,
    },
  },
};
