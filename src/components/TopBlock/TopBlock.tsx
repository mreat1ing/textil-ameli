import { FC, useEffect, useState } from 'react';

import videoBg from 'src/assets/video/girlBG.mp4';
import Button from 'src/ui/button';
import observer from 'src/utils/observer.utils';
import Video from 'src/common/Video';
import OrderModal from 'src/modals/order';
import { toggleModalOrder } from 'src/utils/modalOrderToggle.utils';

import './TopBlock.scss';

const TopBlock: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const component = document.querySelector('.top-block__text-wrapper');

    const observerFirst = component && observer(component, 'smooth-render');

    component && observerFirst?.observe(component);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

  return (
    <div className="top-block">
      {isModalOpen && (
        <OrderModal
          type="consultation"
          onClose={() => toggleModalOrder(true, () => setModalOpen(false))}
        />
      )}
      <Video src={videoBg} />
      <div className="top-block__text-wrapper animated">
        <div className="top-block__content">
          <p className="top-block__city shadow">Севастополь</p>
          <h2 className="top-block__title shadow">Тюли, портьеры</h2>
          <p className="top-block__description shadow">
            Дизайн, изготовление, монтаж всех видов штор и жалюзи
          </p>
          <Button
            className="top-block__button"
            onClick={() => toggleModalOrder(false, () => setModalOpen(true))}
          >
            Консультация дизайнера
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBlock;
