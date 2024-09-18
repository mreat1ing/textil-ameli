import { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import './OrderModal.scss';
import Order from 'src/components/Order';
import CloseButton from 'src/ui/closeButton';
import Textarea from 'src/ui/textarea';
import { disableScroll, enableScroll } from 'src/utils/scrollToggle.utils';

interface IOrderModal {
  type: 'call' | 'consultation' | 'request';
  onClose: () => void;
}

const OrderModal: FC<IOrderModal> = ({ type, onClose }) => {
  const bgRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const timestampStart = useRef(0);
  const prevY = useRef(0);
  const modalsContainer = document.getElementById('modals');

  useEffect(() => {
    disableScroll();

    return () => {
      enableScroll();
    };
  }, []);

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains('modal-background') ||
      target.classList.contains('close-button') ||
      target.classList.contains('close-button__content')
    ) {
      const bg = bgRef.current;
      if (bg) {
        bg.classList.add('removing');
      }
      setTimeout(onClose, 200);
    }
  };

  const touchStartHandler = (e: React.TouchEvent) => {
    const modal = modalRef.current as HTMLDivElement;
    if (!modal) return;
    startY.current = e.touches[0].clientY;
    timestampStart.current = e.timeStamp;
  };

  const touchMoveHandler = (e: React.TouchEvent) => {
    const modal = modalRef.current as HTMLDivElement;
    if (!modal) return;
    const curscroll = modal.scrollTop;
    const cury = e.touches[0].clientY;
    const translate = cury - startY.current;
    const scrollTranslate = prevY.current - translate;
    modal.scrollTop = curscroll + scrollTranslate;
    prevY.current = cury - startY.current;
  };

  const touchEndHandler = () => {
    const modal = modalRef.current as HTMLDivElement;
    if (!modal) return;
    prevY.current = 0;
  };

  if (!modalsContainer) return null;

  const modal = (
    <div className="modal-background" onClick={handleClose} ref={bgRef}>
      <div className="modal" ref={modalRef}>
        <div
          className="modal-content"
          onTouchStart={touchStartHandler}
          onTouchMove={touchMoveHandler}
          onTouchEnd={touchEndHandler}
        >
          <CloseButton handleClick={handleClose} />
          <h1 className="modal-content-h1">Оставьте ваш номер телефона</h1>
          <h2 className="modal-content-h2">
            мы проконсультируем про наличие, оплату, доставку и монтаж.
          </h2>
          <Order
            className="modal-content__order"
            categories={type === 'consultation'}
            image={false}
            description={false}
            title=" "
            textarea={
              <Textarea
                placeholder="Добавьте ваш комментарий"
                label="Комментарий:"
                className="modal-content__order-textarea"
              />
            }
          />
        </div>
      </div>
    </div>
  );

  return createPortal(modal, modalsContainer);
};

export default OrderModal;
