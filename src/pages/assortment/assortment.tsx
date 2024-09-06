import { FC, useEffect } from 'react';

const Assortment: FC = () => {
  useEffect(() => {
    document.title = 'Ассортимент';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return <h3>Assortment</h3>;
};

export default Assortment;
