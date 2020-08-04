export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'Comfortaa, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Jacques Francois Shadow',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    black: '#000',
    white: '#fff',
    text: '#212933',
    background: '#fff78c',
    primary: '#fff78c',
    secondary: '#212933',
  },
  text: {
    logo: {
      fontFamily: 'heading',
      fontSize: 3,
      color: 'text',
    },
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      color: 'text',
    },
    body: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      color: 'text',
    },
  },
  layout: {
    header: {
      display: 'grid',
      position: 'sticky',
      gridGap: 3,
      gridTemplateColumns: 'repeat(3, 1fr)',
      padding: '1rem',
      color: 'text',
      alignItems: 'center',
      width: '100%',
      bg: 'background',
      borderBottom: '#212933 2px dotted',
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      color: 'text',
      padding: '1rem',
      width: '100%',
      bg: 'background',
      borderTop: '#212933 2px dotted',
    },
  },
  buttons: {
    menuBurguer: {
      zIndex: 2,
    },
    menuClose: {
      zIndex: 2,
      color: 'primary',
    },
    navItem: {
      color: 'primary',
      bg: 'secondary',
      fontFamily: 'body',
      fontSize: '2rem',
      padding: '2rem 0',
      fontWeight: 'bold',
      letterSpacing: '0.5rem',
      textDecoration: 'none',
      width: '100%',
      borderBottom: '#fff78c 2px solid',
      transition: 'color 0.3s linear',
      '&:active': {
        textTransform: 'uppercase',
        color: 'secondary',
        bg: 'primary',
      },
    },
  },
  cards: {
    primary: {
      bg: 'background',
      padding: 3,
      border: '#212933 2px solid',
      boxShadow: '10px 10px 0px -5px rgba(33, 41, 51, 0.75)',
    },
    dotted: {
      backgroundImage: `url(
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E"
      )`,
      width: '100%',
      boxShadow: 'none',
      border: 'none',
      px: 3,
      py: 4,
    },
    nav: {
      color: 'primary',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      bg: 'secondary',
      height: '100vh',
      textAlign: 'center',
      padding: '2rem',
      position: 'absolute',
      top: 0,
      left: 0,
      maxWidth: '100%',
      width: '100%',
      boxShadow: 'none',
      transition: 'transform 0.3s ease-in-out',
      zIndex: 1,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0,
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
  },
}
