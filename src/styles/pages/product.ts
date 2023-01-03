import { styled } from '..';

export const ProductPageContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '4.5rem',
  margin: '0 auto',
  maxWidth: '1180px',


})

export const ProductDetails = styled('article', {
  display: 'flex',
  flexDirection: 'column',

  '.product__name': {
    color: '$gray300',
    fontSize: '$2xl',
    marginBottom: '1rem',
    fontWeight: 'bold',
  },
  '.product__price': {
    color: '$green300',
    fontSize: '$2xl',
    marginBottom: '2.5rem',
  },
  '.product__desc': {
    color: '$gray300',
    fontSize: '$md',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  },
  '.product__shop': {
    background: '$green500',
    borderRadius: '8px',
    padding: '1.25rem 2rem',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginTop: 'auto',


    '&:not(:disabled):hover': {
      background: '$green300',
    },

    '&:disabled': {
      opacity: 0.7,
    }
  }
})
