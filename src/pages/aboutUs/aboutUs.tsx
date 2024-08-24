import { FC } from 'react';

import bgCurtains from 'src/assets/img/bg-curtains2.jpg';
import bgRoom from 'src/assets/img/bg-room.jpg';
import ParallaxBgImage from 'src/common/ParallaxBgImage';
import AboutUsTitle from 'src/common/AboutUsTitle';
import AboutUsWorkingTime from 'src/common/AboutUsWorkingTime';
import OurClients from 'src/common/OurClients';
import AboutUsAssortment from 'src/common/AboutUsAssortment';
import AboutUsServices from 'src/common/AboutUsServices';
import AboutUsInvite from 'src/common/AboutUsInvite';

const AboutUs: FC = () => {
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
