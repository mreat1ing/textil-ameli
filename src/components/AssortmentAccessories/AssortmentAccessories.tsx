import { FC, useEffect, useState } from 'react';

import './AssortmentAccessories.scss';
import PhotoGallery from 'src/common/PhotoGallery';
import Button from 'src/ui/button';
import { toggleModalOrder } from 'src/utils/modalOrderToggle.utils';
import OrderModal from 'src/modals/order';

interface IAssortmentAccessories {
  images: string[];
}

const AssortmentAccessories: FC<IAssortmentAccessories> = ({ images }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const normalizedImages = images.map((image) => (
    <img src={image} alt="" key={image} />
  ));

  return (
    <div className="assortment-podhvati">
      {isModalOpen && (
        <OrderModal
          type="request"
          onClose={() => toggleModalOrder(true, () => setModalOpen(false))}
        />
      )}
      <PhotoGallery type="assortment">{normalizedImages}</PhotoGallery>
      <Button
        className="assortment-item-button"
        onClick={() => toggleModalOrder(false, () => setModalOpen(true))}
      >
        Отправить запрос
      </Button>
    </div>
  );
};

export default AssortmentAccessories;
