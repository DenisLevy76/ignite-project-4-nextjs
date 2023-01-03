import Link from 'next/link';
import { styled } from '../../styles';

export const ProductContainer = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%);',
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: '5.5rem 0',
  overflow: 'hidden',

  img: {
    width: 520,
    height: 480,
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem',
    borderRadius: 8,
    background: '$gray800-popup',

    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      color: '$gray100',
      fontSize: '$lg',
      fontWeight: 'bold',
      lineHeight: '160%',
      letterSpacing: '5%',
    },

    span: {
      fontWeight: 700,
      fontSize: '$xl',
      color: '$green300'
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})
