import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "../../settings/images";
import { CartComponent } from "../CartComponent";
import { HeaderComponentContainer } from "./styles";

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderComponentContainer>
      <Link href="/">
        <Image src={IMAGES.logo} alt="Logo ignite shop" />
      </Link>
      <CartComponent />
    </HeaderComponentContainer>
  );
};
