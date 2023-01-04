import { globalCss } from '.';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 0,
    boxSizing: 'border-box',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900'
  },
  'body, input, button, textarea': {
    fontWeight: 400,
    color: '$gray100'
  },
  ul: {
    listStyle: 'none'
  }
})
