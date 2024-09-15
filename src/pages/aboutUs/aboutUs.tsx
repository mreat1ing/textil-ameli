import { FC, useEffect } from 'react';

import ParallaxBgImage from 'src/common/ParallaxBgImage';
import AboutUsTitle from 'src/common/AboutUsTitle';
import AboutUsWorkingTime from 'src/common/AboutUsWorkingTime';
import OurClients from 'src/common/OurClients';
import AboutUsAssortment from 'src/common/AboutUsAssortment';
import AboutUsServices from 'src/common/AboutUsServices';
import AboutUsInvite from 'src/common/AboutUsInvite';
import { hostImages } from 'src/constants/hosting';

const bgCurtains = `${hostImages}/bg-curtains2.jpg`;
const bgRoom = `${hostImages}/bg-room.jpg`;

const AboutUs: FC = () => {
  useEffect(() => {
    document.title = 'О нас';
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div>
      <ParallaxBgImage
        image={bgCurtains}
        padding={75}
        imageHeight="220%"
        top="-60%"
      >
        <AboutUsTitle />
      </ParallaxBgImage>
      <AboutUsWorkingTime />
      <OurClients />
      <AboutUsAssortment />
      <ParallaxBgImage image={bgRoom} imageHeight="200%" padding={100}>
        <AboutUsServices />
      </ParallaxBgImage>
      <AboutUsInvite />
    </div>
  );
};

export default AboutUs;
