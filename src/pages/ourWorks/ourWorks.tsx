import { FC, useEffect } from 'react';

import OurWorksCards from 'src/common/OurWorksCards';

const OurWorks: FC = () => {
  useEffect(() => {
    document.title = 'Наши работы';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return <OurWorksCards />;
};

export default OurWorks;
