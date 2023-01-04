import { styled } from '..';

export const SuccessPageContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: 700,

  '> strong': {
    fontSize: '$2xl',
    color: '$gray100',
    marginBottom: '4rem'
  },

  p: {
    marginTop: '2rem',
    color: '$gray300',
    fontSize: '$xl',
    maxWidth: 560,
    textAlign: 'center',
    lineHeight: '140%',
  },

  a: {
    color: '$green500',
    fontSize: '$lg',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '5rem',

    '&:hover': {
      color: '$green300'
    }
  }
})

export const ProductFigure = styled('figure', {
  padding: '1rem',
  borderRadius: '8px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%);',

  img: {
    width: 114,
    objectFit: 'cover',
  }
})
