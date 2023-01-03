import Head from "next/head";
import { ProductComponent } from "../components/ProductComponent";
import { HomeContainer } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32,
    },
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <HomeContainer>
        <ul ref={sliderRef} className="keen-slider">
          <li className="keen-slider__slide">
            <ProductComponent index={1} />
          </li>
          <li className="keen-slider__slide">
            <ProductComponent index={2} />
          </li>
          <li className="keen-slider__slide">
            <ProductComponent index={3} />
          </li>
          <li className="keen-slider__slide">
            <ProductComponent index={3} />
          </li>
        </ul>
      </HomeContainer>
    </>
  );
}
