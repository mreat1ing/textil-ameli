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

import 'swiper/css';
import 'swiper/css/navigation';

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

interface IImage {
  src: string;
  id: string;
}

const initialImage: IImage = { id: '-1', src: '' };

const PhotoGallery: FC<IPhotoGallery> = ({
  children,
  inLineCount,
  photoHeight,
  photoWidth,
  type = 'default',
  className,
}) => {
  const initialScreenW = window.innerWidth > 320 ? window.innerWidth : 320;
  const prevValueX = useRef(0);
  const curValueX = useRef(0);
  const nextValueX = useRef(0);
  const slidePrevRef = useRef<HTMLDivElement | null>(null);
  const slideCurRef = useRef<HTMLDivElement | null>(null);
  const slideNextRef = useRef<HTMLDivElement | null>(null);
  const imagePrevRef = useRef<HTMLImageElement | null>(null);
  const imageCurrRef = useRef<HTMLImageElement | null>(null);
  const imageNextRef = useRef<HTMLImageElement | null>(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const moveDirection = useRef<'horizontal' | 'vertical' | null>(null);
  const [items, setItems] = useState<
    DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>[]
  >([]);
  const [isExpanded, setExpanded] = useState(false);
  const [next, setNext] = useState<IImage>(initialImage);
  const [prev, setPrev] = useState<IImage>(initialImage);
  const [curr, setCurr] = useState<IImage>(initialImage);
  const [screenW, setScreenW] = useState(initialScreenW);
  const [isSliding, setSliding] = useState(false);
  const additionalClass =
    type === 'default'
      ? ''
      : type === 'assortment'
        ? ' photo-gallery-assortment'
        : ' photo-gallery-gallery';

  const handleResizeWindow = () => {
    if (window.innerWidth > 320) setScreenW(window.innerWidth);
  };

  useEffect(() => {
    const slidePrev = slidePrevRef.current;
    const slideNext = slideNextRef.current;
    if (!slidePrev || !slideNext) return;
    slidePrev.style.transform = `translateX(-${screenW}px)`;
    slideNext.style.transform = `translateX(${screenW}px)`;
  }, [screenW]);

  useEffect(() => {
    const componentFirst = document.querySelector('.photo-gallery');
    const observerFirst =
      componentFirst && observer(componentFirst, 'smooth-render');

    window.addEventListener('resize', handleResizeWindow);
    componentFirst && observerFirst?.observe(componentFirst);

    return () => {
      observerFirst?.disconnect();
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const resetAllExpandedItems = (to?: 'top' | 'bottom') => {
    const closedElement = document.querySelector(
      '.photo-gallery-expanded-item'
    );
    closedElement?.classList.add('removing');
    if (to) closedElement?.classList.add(to);
    setTimeout(() => {
      setExpanded(false);
      modalToggle();
      setNext(initialImage);
      setCurr(initialImage);
      setPrev(initialImage);
    }, 200);
  };

  const setItem = (
    item: DetailedReactHTMLElement<HTMLAttributes<HTMLElement>, HTMLElement>,
    id: number
  ): IImage => {
    if (!item) return initialImage;
    const childNode = item.props.children as DetailedReactHTMLElement<
      HTMLAttributes<HTMLElement>,
      HTMLElement
    >;
    const image =
      childNode.props.style?.backgroundImage?.slice(4, -1)?.replace(/"/g, '') ||
      '';
    return { id: String(id), src: image };
  };

  const clickHandler = (e: React.MouseEvent<HTMLUListElement>) => {
    const closedElement = document.querySelector(
      '.photo-gallery-expanded-item'
    );
    if (closedElement?.classList.contains('removing')) return;
    const target = e.target as HTMLElement;
    if (target.localName === 'ul') return;
    const itemId = items.findIndex((el) => el.key === target.id);
    const clickedItem = items[itemId];
    let nextItem = null;
    let prevItem = null;
    if (items[itemId - 1]) prevItem = items[itemId - 1];
    if (items[itemId + 1]) nextItem = items[itemId + 1];
    modalToggle();
    if (nextItem) {
      setNext(setItem(nextItem, itemId + 1));
    }
    if (prevItem) {
      setPrev(setItem(prevItem, itemId - 1));
    }
    setCurr(setItem(clickedItem, itemId));
    setExpanded(true);
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
    if (target.classList.contains('slide')) {
      resetAllExpandedItems('bottom');
    }
  };

  const handlerBack = (e?: React.MouseEvent) => {
    if (isSliding) return;
    const itemId = Number(imagePrevRef.current?.id);
    const prevItem = setItem(items[itemId - 1], itemId - 1);
    const prevRef = imagePrevRef.current as HTMLImageElement;
    const currRef = imageCurrRef.current as HTMLImageElement;
    const nextRef = imageNextRef.current as HTMLImageElement;
    if (Number(currRef.id) - 1 < 0) return;
    if (e) swipeRight();
    setSliding(true);
    setTimeout(() => {
      resetTransition();
      nextRef.src = currRef.src;
      nextRef.id = currRef.id;
      currRef.src = prevRef.src;
      currRef.id = prevRef.id;
      prevRef.src = prevItem.src;
      prevRef.id = prevItem.id;
      setSliding(false);
    }, 200);
  };

  const handlerNext = (e?: React.MouseEvent) => {
    if (isSliding) return;
    const itemId = Number(imageNextRef.current?.id);
    const nextItem = setItem(items[itemId + 1], itemId + 1);
    const prevRef = imagePrevRef.current as HTMLImageElement;
    const currRef = imageCurrRef.current as HTMLImageElement;
    const nextRef = imageNextRef.current as HTMLImageElement;
    if (Number(currRef.id) + 1 === items.length) return;
    if (e) swipeLeft();
    setSliding(true);
    setTimeout(() => {
      resetTransition();
      prevRef.src = currRef.src;
      prevRef.id = currRef.id;
      currRef.src = nextRef.src;
      currRef.id = nextRef.id;
      nextRef.src = nextItem.src;
      nextRef.id = nextItem.id;
      setSliding(false);
    }, 200);
  };

  const swipeRight = () => {
    const slideCur = slideCurRef.current;
    const slideNext = slideNextRef.current;
    const slidePrev = slidePrevRef.current;
    if (!slideCur || !slideNext || !slidePrev) return;
    slideCur.classList.add('smooth-transition');
    slideNext.classList.add('smooth-transition');
    slidePrev.classList.add('smooth-transition');
    slideCur.style.transform = `translateX(${screenW}px)`;
    slideNext.style.transform = `translateX(${screenW * 2}px)`;
    slidePrev.style.transform = 'translateX(0px)';
    const timeout = setTimeout(() => {
      slideCur.classList.remove('smooth-transition');
      slideNext.classList.remove('smooth-transition');
      slidePrev.classList.remove('smooth-transition');
      window.clearTimeout(timeout);
    }, 200);
  };

  const swipeLeft = () => {
    const slideCur = slideCurRef.current;
    const slideNext = slideNextRef.current;
    const slidePrev = slidePrevRef.current;
    if (!slideCur || !slideNext || !slidePrev) return;
    slideCur.classList.add('smooth-transition');
    slideNext.classList.add('smooth-transition');
    slidePrev.classList.add('smooth-transition');
    slideCur.style.transform = `translateX(-${screenW}px)`;
    slideNext.style.transform = 'translateX(0px)';
    slidePrev.style.transform = `translateX(-${screenW * 2}px)`;
    const timeout = setTimeout(() => {
      slideCur.classList.remove('smooth-transition');
      slideNext.classList.remove('smooth-transition');
      slidePrev.classList.remove('smooth-transition');
      window.clearTimeout(timeout);
    }, 200);
  };

  const getTranslateX = (element: HTMLElement) => {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform).m41;
    return matrix;
  };

  const resetTransition = () => {
    const slideCur = slideCurRef.current;
    const slideNext = slideNextRef.current;
    const slidePrev = slidePrevRef.current;
    if (!slideCur || !slideNext || !slidePrev) return;
    slideCur.style.transform = 'translateX(0px)';
    slideNext.style.transform = `translateX(${screenW}px)`;
    slidePrev.style.transform = `translateX(-${screenW}px)`;
  };

  const smoothTranslate = (side: 'next' | 'prev' | null = null) => {
    const slideCur = slideCurRef.current;
    const slideNext = slideNextRef.current;
    const slidePrev = slidePrevRef.current;
    if (!slideCur || !slideNext || !slidePrev) return;
    slideCur.classList.add('smooth-transition');
    slideNext.classList.add('smooth-transition');
    slidePrev.classList.add('smooth-transition');
    if (!side) {
      slideCur.style.transform = 'translateX(0px)';
      slideNext.style.transform = `translateX(${screenW}px)`;
      slidePrev.style.transform = `translateX(-${screenW}px)`;
    } else if (side === 'next') {
      slideCur.style.transform = `translateX(-${screenW}px)`;
      slideNext.style.transform = 'translateX(0px)';
      slidePrev.style.transform = `translateX(-${screenW * 2}px)`;
    } else if (side === 'prev') {
      slideCur.style.transform = `translateX(${screenW}px)`;
      slideNext.style.transform = `translateX(${screenW * 2}px)`;
      slidePrev.style.transform = 'translateX(0px)';
    }
    const timeout = setTimeout(() => {
      slideCur.classList.remove('smooth-transition');
      slideNext.classList.remove('smooth-transition');
      slidePrev.classList.remove('smooth-transition');
      window.clearTimeout(timeout);
    }, 200);
    if (side === 'next') {
      handlerNext();
    } else if (side === 'prev') {
      handlerBack();
    }
  };

  const touchMoveStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isSliding) return;
    const startX = e.changedTouches[0].clientX;
    const startY = e.changedTouches[0].clientY;
    const prevSlide = slidePrevRef.current;
    const curSlide = slideCurRef.current;
    const nextSlide = slideNextRef.current;
    touchStartX.current = startX;
    touchStartY.current = startY;
    if (!prevSlide || !curSlide || !nextSlide) return;
    prevValueX.current = getTranslateX(prevSlide);
    curValueX.current = getTranslateX(curSlide);
    nextValueX.current = getTranslateX(nextSlide);
  };

  const touchMoveEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isSliding) return;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    let action: 'deleting' | 'next' | 'prev' | null = null;
    if (moveDirection.current === 'vertical') {
      if (touchStartY.current < endY - 50) {
        resetAllExpandedItems('bottom');
        action = 'deleting';
      } else if (touchStartY.current > endY + 50) {
        resetAllExpandedItems('top');
        action = 'deleting';
      } else action = null;
    } else if (moveDirection.current === 'horizontal') {
      if (touchStartX.current > endX + 80) {
        if (imageNextRef.current?.id !== '-1') action = 'next';
        else action = null;
      } else if (touchStartX.current < endX - 80) {
        // console.log(imagePrevRef.current?.src);
        if (imagePrevRef.current?.id !== '-1') action = 'prev';
        else action = null;
      } else action = null;
    }
    moveDirection.current = null;
    if (action === 'deleting') return;
    smoothTranslate(action);
  };

  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isSliding) return;
    const curX = e.changedTouches[0].clientX;
    const curY = e.changedTouches[0].clientY;
    const newValueX = curX - touchStartX.current;
    if (!moveDirection.current) {
      if (touchStartX.current > curX + 10 || touchStartX.current < curX - 10) {
        moveDirection.current = 'horizontal';
      } else if (
        touchStartY.current < curY - 10 ||
        touchStartY.current > curY + 10
      ) {
        moveDirection.current = 'vertical';
      }
    }
    const prevSlide = slidePrevRef.current;
    const curSlide = slideCurRef.current;
    const nextSlide = slideNextRef.current;
    if (!prevSlide || !curSlide || !nextSlide) return;
    let newPrevValue = newValueX + prevValueX.current;
    const newCurValue = newValueX + curValueX.current;
    let newNextValue = newValueX + nextValueX.current;
    if (newPrevValue > 0) {
      newPrevValue = 0;
      return;
    } else if (newNextValue < 0) {
      newNextValue = 0;
      return;
    }
    if (moveDirection.current === 'vertical') {
      curSlide.style.transform = `translateY(${curY - touchStartY.current}px)`;
    } else if (moveDirection.current === 'horizontal') {
      prevSlide.style.transform = `translateX(${newPrevValue}px)`;
      curSlide.style.transform = `translateX(${newCurValue}px)`;
      nextSlide.style.transform = `translateX(${newNextValue}px)`;
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
          {imagePrevRef.current?.id !== '-1' && (
            <button
              className="photo-gallery-expanded-item__button photo-gallery-expanded-item__button-back"
              onClick={handlerBack}
            ></button>
          )}
          <div
            className="slide"
            ref={slidePrevRef}
            style={{ transform: `translateX(-${screenW}px)` }}
          >
            <img
              src={prev.src}
              id={prev.id}
              alt=""
              className="photo-gallery-expanded-item__item"
              ref={imagePrevRef}
            />
          </div>
          <div
            className="slide"
            ref={slideCurRef}
            style={{ transform: 'translateX(0px)' }}
          >
            <img
              id={curr.id}
              src={curr.src}
              alt=""
              className="photo-gallery-expanded-item__item"
              ref={imageCurrRef}
            />
          </div>
          <div
            className="slide"
            ref={slideNextRef}
            style={{ transform: `translateX(${screenW}px)` }}
          >
            <img
              src={next.src}
              id={next.id}
              alt=""
              className="photo-gallery-expanded-item__item"
              ref={imageNextRef}
            />
          </div>
          {imageNextRef.current?.id !== '-1' && (
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
