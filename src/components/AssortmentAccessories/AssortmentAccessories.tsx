import { FC, useEffect } from 'react';

import './AssortmentAccessories.scss';
import PhotoGallery from 'src/common/PhotoGallery';
import Button from 'src/ui/button';

interface IAssortmentAccessories {
  images: string[];
}

const AssortmentAccessories: FC<IAssortmentAccessories> = ({ images }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const normalizedImages = images.map((image) => (
    <img src={image} alt="" key={image} />
  ));

  return (
    <div className="assortment-podhvati">
      <PhotoGallery type="assortment">{normalizedImages}</PhotoGallery>
      <Button className="assortment-item-button">Отправить запрос</Button>
    </div>
  );
};

export default AssortmentAccessories;
