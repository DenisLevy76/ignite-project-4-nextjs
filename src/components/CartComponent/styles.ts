import { styled } from '@stitches/react';
import * as Dialog from '@radix-ui/react-dialog'
import { keyframes } from '../../styles';

export const CartComponentContainer = styled(Dialog.Root, {})

export const CartTrigger = styled(Dialog.Trigger, {
  background: '$gray800',
  lineHeight: 0,
  padding: '0.75rem',
  borderRadius: 8,
  color: '$gray500',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray300'
  }
})

export const CartClose = styled(Dialog.Close, {
  background: '$transaprent',
  lineHeight: 0,
  padding: '0.75rem',
  borderRadius: 8,
  color: '$gray500',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray300'
  }
})

const ContentAnimation = keyframes({
  '0%': {
    transform: 'translateX(110%)',
  },
  '65%': {
    transform: 'scaleX(1.05)',
  },
  '100%': {
    transform: 'translateX(0%) scaleX(1)',
  },
})

export const CartContent = styled(Dialog.Content, {
  width: 480,
  maxHeight: '100vh',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  animation: `${ContentAnimation} 0.2s ease-in-out`,
  zIndex: 999,

  background: '$gray800',
  padding: '3rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8);',

  header: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  '> main': {
    height: '88%',
  },

  'main > h2': {
    fontSize: '$lg',
    marginBottom: '2rem',
  },

  'main > ul': {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    overflowY: 'auto',
  }
})



export const CartItem = styled('article', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  '> .product__data': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.8rem',

    '> .product__name': {
      fontSize: '$md',
    },

    '> .product__price': {
      fontSize: '$md',
      fontWeight: 'bold',
    },

    '> .product__remove': {
      color: '$green500',
      background: 'transparent',
      fontWeight: 'bold',
      fontSize: '1rem',
      cursor: 'pointer',
    }
  },


  '> figure': {
    width: 100,
    height: 100,
    background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%);',
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '> figure > img': {
    objectFit: 'cover',
  }
})

export const ButtonComponent = styled('button', {
  background: '$green500',
  borderRadius: '8px',
  padding: '1.25rem 2rem',
  fontSize: '$md',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.2s',
  marginTop: 'auto',
  width: '100%',


  '&:not(:disabled):hover': {
    background: '$green300',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed',
  }
})
