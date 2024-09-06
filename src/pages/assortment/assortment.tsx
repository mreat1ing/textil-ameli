import { FC, useEffect } from 'react';

const Assortment: FC = () => {
  useEffect(() => {
    document.title = 'Ассортимент';
    window.scrollTo({ top: 0 });
  }, []);

  return <h3>Assortment</h3>;
};

export default Assortment;
