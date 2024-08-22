import { FC } from 'react';

import bgCurtains from 'src/assets/img/bg-curtains2.jpg';
import ParallaxBgImage from 'src/components/ParallaxBgImage';

const AboutUs: FC = () => {
  return (
    <div>
      <ParallaxBgImage image={bgCurtains} height={256} />
    </div>
  );
};

export default AboutUs;
