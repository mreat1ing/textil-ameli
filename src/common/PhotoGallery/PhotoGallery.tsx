import {
  FC,
  useEffect,
  useState,
  ReactElement,
  createElement,
  DetailedReactHTMLElement,
  HTMLAttributes,
  useCallback,
  useRef,
} from 'react';

import './PhotoGallery.scss';
import observer from 'src/utils/observer.utils';
import modalToggle from 'src/utils/modalToggle.utils';

interface IPhotoGallery {
  inLineCount?: number;
  photoHeight?: number | string;
  photoWidth?: number | string;
  children?: ReactElement<HTMLImageElement>[] | ReactElement<HTMLImageElement>;
  type?: 'default' | 'assortment' | 'gallery';
  className?: string;
}

const PhotoGallery: FC<IPhotoGallery> = ({
  children,
  inLineCount,
  photoHeight,
  photoWidth,
  type = 'default',
  className,
}) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const imageBgRef = useRef<HTMLDivElement | null>(null);
  const [items, setItems] = useState<
    DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>[]
  >([]);
  const [isExpanded, setExpanded] = useState(false);
  const [next, setNext] = useState(-1);
  const [prev, setPrev] = useState(-1);
  const [renderedItem, setRenderedItem] = useState<JSX.Element | null>(null);
  const [renderedBluredItem, setRenderedBluredItem] =
    useState<JSX.Element | null>(null);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);
  const [moveDirection, setMoveDirection] = useState<'side' | 'bottom' | null>(
    null
  );
  const additionalClass =
    type === 'default'
      ? ''
      : type === 'assortment'
        ? ' photo-gallery-assortment'
        : ' photo-gallery-gallery';

  useEffect(() => {
    const componentFirst = document.querySelector('.photo-gallery');
    const observerFirst =
      componentFirst && observer(componentFirst, 'smooth-render');

    componentFirst && observerFirst?.observe(componentFirst);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

  const resetAllExpandedItems = () => {
    setNext(-1);
    setPrev(-1);
    setExpanded(false);
    setRenderedBluredItem(null);
    setRenderedItem(null);
    modalToggle();
  };

  const setAllExpandedItems = (direction: 'next' | 'prev') => {
    switch (direction) {
      case 'next':
        setRenderedItem(setItem(items[next]));
        setRenderedBluredItem(setBluredItem(items[next]));
        if (prev < items.length - 1) {
          setPrev(prev + 1);
        } else setPrev(0);
        if (next < items.length - 1) {
          setNext(next + 1);
        } else setNext(0);
        break;
      case 'prev':
        setRenderedItem(setItem(items[prev]));
        setRenderedBluredItem(setBluredItem(items[prev]));
        if (prev > 0) {
          setPrev(prev - 1);
        } else setPrev(items.length - 1);
        if (next > 0) {
          setNext(next - 1);
        } else setNext(items.length - 1);
        break;
    }
  };

  const setItem = (
    item: DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>
  ) => {
    const childNode = item.props.children as DetailedReactHTMLElement<
      HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    const image = childNode.props.style?.backgroundImage;
    return (
      <div
        className="photo-gallery-expanded-item__item"
        style={{ backgroundImage: image }}
        ref={imageRef}
      />
    );
  };

  const setBluredItem = (
    item: DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>
  ) => {
    const childNode = item.props.children as DetailedReactHTMLElement<
      HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    const image = childNode.props.style?.backgroundImage;
    return (
      <div
        className="photo-gallery-expanded-item__item photo-gallery-expanded-item__item-background"
        style={{ backgroundImage: image }}
        ref={imageBgRef}
      />
    );
  };

  const clickHandler = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    if (target.localName === 'ul') return;
    const itemId = items.findIndex((el) => el.key === target.id);
    const clickedItem = items[itemId];
    let nextItem = 0;
    let prevItem = items.length - 1;
    if (itemId > 0) prevItem = itemId - 1;
    if (items.length - 1 !== itemId) nextItem = itemId + 1;
    setNext(nextItem);
    setPrev(prevItem);
    setRenderedBluredItem(setBluredItem(clickedItem));
    setRenderedItem(setItem(clickedItem));
    setExpanded(true);
    modalToggle();
  };

  const normalizeNodes = useCallback(
    (nodes: JSX.Element[]) => {
      const mappedNodes = nodes.map((el) => {
        const key = String(Math.random());
        const { src } = el.props;
        const elementStyles =
          type !== 'assortment'
            ? {
                width: inLineCount
                  ? `calc(100% / ${inLineCount})`
                  : photoWidth
                    ? photoWidth
                    : undefined,
                height: photoHeight ? photoHeight : undefined,
              }
            : undefined;
        return createElement(
          'li',
          {
            key: key,
            id: key,
            style: elementStyles,
            className: `photo-gallery__photo${additionalClass}`,
          },
          <div style={{ backgroundImage: `url(${src})`, height: '100%' }} />
        );
      });

      return mappedNodes.filter((el) => !!el);
    },
    [additionalClass, inLineCount, photoHeight, photoWidth, type]
  );

  const handlerClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('photo-gallery-expanded-item')) {
      resetAllExpandedItems();
    }
  };

  const handlerBack = () => {
    setAllExpandedItems('prev');
  };

  const handlerNext = () => {
    setAllExpandedItems('next');
  };

  const touchMoveStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    const startX = e.changedTouches[0].clientX;
    const startY = e.changedTouches[0].clientY;
    setTouchStartX(startX);
    setTouchStartY(startY);
  };

  const touchMoveEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    // console.log('startX:', touchStartX, 'startY:', touchStartY);
    // console.log('endX:', endX, 'endY:', endY);
    if (moveDirection === 'bottom') {
      if (touchStartY < endY - 200) {
        resetAllExpandedItems();
      }
    } else if (moveDirection === 'side') {
      if (touchStartX > endX + 60) {
        handlerNext();
      } else if (touchStartX < endX - 60) {
        handlerBack();
      }
    }
    setMoveDirection(null);
    const image = imageRef.current;
    const imageBg = imageBgRef.current;
    if (!image || !imageBg) return;
    image.style.transform = 'translateX(0px)';
    imageBg.style.transform = 'translateX(0px)';
  };

  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    const curX = e.changedTouches[0].clientX;
    const curY = e.changedTouches[0].clientY;
    if (!moveDirection) {
      if (touchStartX > curX + 20 || touchStartX < curX - 20) {
        setMoveDirection('side');
      } else if (touchStartY < curY - 20) {
        setMoveDirection('bottom');
      }
    }
    const image = imageRef.current;
    const imageBg = imageBgRef.current;
    if (!image || !imageBg) return;
    if (moveDirection === 'bottom' && touchStartY < curY) {
      image.style.transform = `translateY(${curY - touchStartY}px)`;
      imageBg.style.transform = `translateY(${curY - touchStartY}px)`;
    } else if (moveDirection === 'side') {
      image.style.transform = `translateX(${curX - touchStartX}px)`;
      imageBg.style.transform = `translateX(${curX - touchStartX}px)`;
    } else {
      imageBg.style.transform = 'translateY(0px)';
      image.style.transform = 'translateY(0px)';
    }
  };

  useEffect(() => {
    setItems((state) => {
      if (!children) return state;
      if (!Array.isArray(children)) {
        return normalizeNodes([children]);
      }
      return normalizeNodes(children);
    });
  }, [
    additionalClass,
    children,
    inLineCount,
    normalizeNodes,
    photoHeight,
    type,
  ]);

  return (
    <>
      {isExpanded && (
        <div
          className="photo-gallery-expanded-item"
          onMouseUp={handlerClose}
          onTouchStart={touchMoveStartHandler}
          onTouchEnd={touchMoveEndHandler}
          onTouchMove={touchMoveHandler}
        >
          <button className="photo-gallery-expanded-item__button-close">
            Закрыть
          </button>
          {!(prev < 0) && (
            <button
              className="photo-gallery-expanded-item__button photo-gallery-expanded-item__button-back"
              onClick={handlerBack}
            ></button>
          )}
          {renderedBluredItem}
          {renderedItem}
          {!(next < 0) && (
            <button
              className="photo-gallery-expanded-item__button photo-gallery-expanded-item__button-forward"
              onClick={handlerNext}
            ></button>
          )}
        </div>
      )}
      <ul
        onClick={clickHandler}
        className={`photo-gallery${additionalClass}${className ? ' ' + className : ''}`}
      >
        {items}
      </ul>
    </>
  );
};

export default PhotoGallery;
