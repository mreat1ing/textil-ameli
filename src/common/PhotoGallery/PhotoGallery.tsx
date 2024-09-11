import {
  FC,
  useEffect,
  useState,
  ReactElement,
  createElement,
  DetailedReactHTMLElement,
  HTMLAttributes,
  useCallback,
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
  const [items, setItems] = useState<
    DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>[]
  >([]);
  const [isExpanded, setExpanded] = useState(false);
  const [next, setNext] = useState<boolean | number>(false);
  const [prev, setPrev] = useState<boolean | number>(false);
  const [renderedItem, setRenderedItem] = useState<JSX.Element | null>(null);
  const [renderedBluredItem, setRenderedBluredItem] =
    useState<JSX.Element | null>(null);
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
    setNext(false);
    setPrev(false);
    setExpanded(false);
    setRenderedBluredItem(null);
    setRenderedItem(null);
    modalToggle();
  };

  const setAllExpandedItems = (direction: 'next' | 'prev') => {
    const nextItem = typeof next === 'number' && items[next];
    const prevItem = typeof prev === 'number' && items[prev];
    const isPrev = typeof prev === 'number';
    const isNext = typeof next === 'number';
    const nextItemExist = isNext && items[next + 1];
    const prevItemExist = isPrev && items[prev - 1];
    switch (direction) {
      case 'next':
        if (nextItem) {
          setRenderedItem(setItem(nextItem));
          setRenderedBluredItem(setBluredItem(nextItem));
          isPrev ? setPrev(prev + 1) : setPrev(0);
          nextItemExist ? setNext(next + 1) : setNext(false);
        }
        break;
      case 'prev':
        if (prevItem) {
          setRenderedItem(setItem(prevItem));
          setRenderedBluredItem(setBluredItem(prevItem));
          isNext ? setNext(next - 1) : setNext(items.length - 1);
          prevItemExist ? setPrev(prev - 1) : setPrev(false);
        }
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
      />
    );
  };

  const clickHandler = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    if (target.localName === 'ul') return;
    const itemId = items.findIndex((el) => el.key === target.id);
    let nextItem: number | boolean = false;
    let prevItem: number | boolean = false;
    if (itemId > 0) prevItem = itemId - 1;
    if (items.length - 1 !== itemId) nextItem = itemId + 1;
    const clickedItem = items[itemId];
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
        <div className="photo-gallery-expanded-item" onClick={handlerClose}>
          <button className="photo-gallery-expanded-item__button-close">
            Закрыть
          </button>
          {prev !== false && (
            <button
              className="photo-gallery-expanded-item__button photo-gallery-expanded-item__button-back"
              onClick={handlerBack}
            ></button>
          )}
          {renderedBluredItem}
          {renderedItem}
          {next && (
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
