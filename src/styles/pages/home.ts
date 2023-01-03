import { styled } from '..';

export const HomeContainer = styled('main', {
  ul: {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    minHeight: 656,
    marginLeft: 'auto',
    listStyle: 'none',
  }
})
