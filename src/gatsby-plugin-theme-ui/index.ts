export default {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      'Comfortaa, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Comfortaa',
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
    background: '#fff9a6',
    primary: '#fff9a6',
    secondary: '#212933',
  },
  text: {
    logoHeader: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
      color: 'text',
    },
    logoMain: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontSize: '100%',
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
      display: 'flex',
      position: 'fixed',
      top: 0,
      left: 0,
      height: '10vh',
      justifyContent: 'space-between',
      p: '0.5rem 1rem',
      color: 'text',
      alignItems: 'center',
      width: '100%',
      bg: 'background',
      borderBottom: '#212933 2px dotted',
      zIndex: 2,
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: '7vh',
      alignItems: 'center',
      color: 'text',
      p: 3,
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
  },
  cards: {
    primary: {
      bg: 'background',
      p: 3,
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
    stripes: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23212933' fill-opacity='0.31' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");`,
      width: '100%',
      boxShadow: 'none',
      border: 'none',
      px: 3,
      py: 4,
    },
  },
  styles: {
    sideNav: {
      display: 'flex',
      justifyContent: 'center',
      color: 'primary',
      flexDirection: 'column',
      bg: 'secondary',
      height: '100vh',
      textAlign: 'center',
      position: 'absolute',
      maxWidth: '100%',
      width: '100%',
      boxShadow: 'none',
      transition: 'color 3.3s linear',
    },
    topNav: {
      display: 'flex',
      textAlign: 'center',
      position: 'relative',
      alignItems: 'center',
      maxWidth: '100%',
      maxHeight: '90%',
      boxShadow: 'none',
      flexDirection: 'row',
      color: 'secondary',
      bg: 'primary',
      height: 'inherit',
      order: 2,
      justifyContent: 'flex-end',
    },
    sideNavItem: {
      color: 'primary',
      bg: 'secondary',
      fontFamily: 'body',
      fontSize: 4,
      p: '2rem 0',
      fontWeight: 'bold',
      letterSpacing: 2,
      textDecoration: 'none',
      width: '100%',
      ':not(:last-child)': {
        borderBottom: '#fff78c 2px solid',
      },
      '&:hover': {
        color: 'secondary',
        bg: 'primary',
      },
    },
    topNavItem: {
      color: 'primary',
      bg: 'secondary',
      fontFamily: 'body',
      py: 2,
      px: 3,
      textDecoration: 'none',
      '&:hover': {
        border: '#212933 2px dotted',
        borderRadius: 1,
        textTransform: 'uppercase',
        color: 'secondary',
        bg: 'primary',
      },
    },
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
