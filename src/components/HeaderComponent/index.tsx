import Image from 'next/image';
import { IMAGES } from '../../settings/images';
import { HeaderComponentContainer } from './styles';

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderComponentContainer>
      <Image src={IMAGES.logo} alt="Logo ignite shop" />
    </HeaderComponentContainer>
  );
};
