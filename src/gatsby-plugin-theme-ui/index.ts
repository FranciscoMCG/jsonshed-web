export default {
  breakpoints: ['27.5em', '40em', '52em'],
  space: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64],
  fonts: {
    body:
      'Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    heading: 'Comfortaa',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
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
    text: 'white',
    background: '#707793',
    // primary - brand color for links, buttons, etc. light
    primary: '#43455c',
    // secondary - brand color for alternative styling. dark
    secondary: '#2e3047',
    // highlight - A background color for highlighting text
    highlight: '#3bba9c',
    // muted - A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
    muted: '##adedd4',
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
      alignItems: 'center',
      width: '100%',
      bg: 'primary',
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
      bg: 'primary',
      borderTop: '#212933 2px dotted',
    },
  },
  buttons: {
    styleNone: {
      padding: 0,
      border: 'none',
      outline: 'none',
      font: 'inherit',
      color: 'inherit',
      background: 'none',
    },
  },
  cards: {
    primary: {
      bg: 'background',
      p: 3,
      border: '#2e3047 2px solid',
      boxShadow: '10px 10px 0px -5px rgba(46, 48, 71, 1)',
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
    charlie: {
      backgroundImage: `
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='12' viewBox='0 0 20 12'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='charlie-brown' fill='%23212933' fill-opacity='0.4'%3E%3Cpath d='M9.8 12L0 2.2V.8l10 10 10-10v1.4L10.2 12h-.4zm-4 0L0 6.2V4.8L7.2 12H5.8zm8.4 0L20 6.2V4.8L12.8 12h1.4zM9.8 0l.2.2.2-.2h-.4zm-4 0L10 4.2 14.2 0h-1.4L10 2.8 7.2 0H5.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      `,
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
    diagonal: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23212933' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");`,
      width: '100%',
      boxShadow: 'none',
      border: 'none',
      px: 3,
      py: 4,
    },
  },
  styles: {
    sideNav: {
      justifyContent: 'center',
      color: 'primary',
      flexDirection: 'column',
      bg: 'primary',
      height: '100vh',
      textAlign: 'center',
      position: 'absolute',
      maxWidth: '100%',
      width: '100%',
      boxShadow: 'none',
      transition: 'color 3.3s linear',
    },
    sideNavItem: {
      color: 'highlight',
      fontFamily: 'body',
      fontSize: 4,
      p: '1.8rem 0',
      fontWeight: 'bold',
      letterSpacing: 2,
      textDecoration: 'none',
      width: '100%',
      ':not(:last-child)': {
        borderBottom: '#3bba9c 2px solid',
      },
      '&:hover': {
        color: 'text',
        bg: 'primary',
      },
    },
    topNav: {
      textAlign: 'center',
      position: 'relative',
      alignItems: 'center',
      maxWidth: '100%',
      maxHeight: '90%',
      boxShadow: 'none',
      flexDirection: 'row',
      height: 'inherit',
      order: 2,
      justifyContent: 'flex-end',
    },
    topNavItem: {
      color: 'text',
      bg: 'primary',
      fontFamily: 'body',
      py: 2,
      px: 3,
      textDecoration: 'none',
      '&:hover': {
        color: 'white',
        borderBottom: '#212933 2px dotted',
        borderRadius: 1,
        bg: 'highlight',
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
    link: {
      textDecoration: 'none',
      color: 'text',
      fontWeight: 'bold',
      borderBottom: '#3bba9c 2px dotted',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    snippet: {
      py: ['3%', '5%', '3%'],
      px: ['3%', '5%', '10%'],
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  },
}
