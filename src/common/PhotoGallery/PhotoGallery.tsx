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
// import modalToggle from 'src/utils/modalToggle.utils';
import { disableScroll, enableScroll } from 'src/utils/scrollToggle.utils';

interface IPhotoGallery {
  inLineCount?: number;
  photoHeight?: number | string;
  photoWidth?: number | string;
  children?: ReactElement<HTMLImageElement>[] | ReactElement<HTMLImageElement>;
  type?: 'default' | 'assortment' | 'gallery';
  className?: string;
  gap?: number;
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
  gap,
}) => {
  // const bodyRef = useRef(document.querySelector('body'));
  // const lastScrollPos = useRef(0);
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
  const [isButtonBack, setButtonBack] = useState(false);
  const [isButtonNext, setButtonNext] = useState(false);
  const [countTouchesOnScreen, setCountTouchesOnScreen] = useState(0);
  const additionalClass =
    type === 'default'
      ? ''
      : type === 'assortment'
        ? ' photo-gallery-assortment'
        : ' photo-gallery-gallery';

  const handleResizeWindow = () => {
    if (window.innerWidth > 320) setScreenW(window.innerWidth);
  };

  const setButtons = useCallback(
    (nextI = next, prevI = prev) => {
      const nextRef = imageNextRef.current;
      const prevRef = imagePrevRef.current;
      if (!nextRef || !prevRef) return;
      const isNext = detectNotExist(nextI, nextRef);
      const isPrev = detectNotExist(prevI, prevRef);
      if (isNext) setButtonNext(false);
      else setButtonNext(true);
      if (isPrev) setButtonBack(false);
      else setButtonBack(true);
    },
    [next, prev]
  );

  //TODO: сделать эту дрочь на айфоны что бы не блымала
  // const lockBody = () => {
  //   lastScrollPos.current = window.scrollY;
  //   const body = bodyRef.current;
  //   if (!body) return;
  //   body.style.overflow = 'hidden';
  //   body.style.position = 'fixed';
  //   body.style.top = `-${lastScrollPos.current}px`;
  //   body.style.width = '100%';
  // };

  // const unlockBody = () => {
  //   const body = bodyRef.current;
  //   if (!body) return;
  //   body.style.removeProperty('overflow');
  //   body.style.removeProperty('position');
  //   body.style.removeProperty('top');
  //   body.style.removeProperty('width');
  //   window.scrollTo(0, lastScrollPos.current);
  // };

  // useEffect(() => {
  //   if (isExpanded) disableScroll();
  //   else enableScroll();
  // }, [isExpanded]);

  useEffect(() => {
    setButtons();
  }, [next, prev, setButtons]);

  useEffect(() => {
    const slidePrev = slidePrevRef.current;
    const slideNext = slideNextRef.current;
    if (!slidePrev || !slideNext) return;
    slidePrev.style.transform = `translateX(-${screenW}px)`;
    slideNext.style.transform = `translateX(${screenW}px)`;
  }, [screenW]);

  useEffect(() => {
    const components = document.querySelectorAll('.photo-gallery');
    const observers: IntersectionObserver[] = [];
    components.forEach((el) => {
      observers.push(observer(el, 'smooth-render'));
    });

    observers.forEach((obs, index) => {
      obs.observe(components[index]);
    });

    window.addEventListener('resize', handleResizeWindow);

    return () => {
      observers.forEach((obs) => {
        obs.disconnect();
      });
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
      enableScroll();
      // modalToggle();
      setNext(initialImage);
      setCurr(initialImage);
      setPrev(initialImage);
    }, 350);
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
    disableScroll();
    // modalToggle();
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

  const detectNotExist = (item: IImage, element: HTMLImageElement) => {
    if (item.id === '-1') {
      const copied = element;
      copied.style.width = '0px';
      copied.style.height = '0px';
      return true;
    }
    return false;
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
      setButtons({ id: nextRef.id, src: nextRef.src }, prevItem);
      nextRef.style.removeProperty('width');
      nextRef.style.removeProperty('height');
      setSliding(false);
    }, 300);
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
      setButtons(nextItem, { id: prevRef.id, src: prevRef.src });
      prevRef.style.removeProperty('width');
      prevRef.style.removeProperty('height');
      setSliding(false);
    }, 300);
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
    setCountTouchesOnScreen(e.touches.length);
    const startX = e.changedTouches[0].clientX;
    const startY = e.changedTouches[0].clientY;
    touchStartX.current = startX;
    touchStartY.current = startY;
    if (isSliding) return;
    const prevSlide = slidePrevRef.current;
    const curSlide = slideCurRef.current;
    const nextSlide = slideNextRef.current;
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
        if (imagePrevRef.current?.id !== '-1') action = 'prev';
        else action = null;
      } else action = null;
    }
    moveDirection.current = null;
    if (action === 'deleting') return;
    smoothTranslate(action);
  };

  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isSliding) {
      touchMoveStartHandler(e);
      return;
    }
    const scale = window.visualViewport?.scale || 1;
    if (scale > 1.2) return;
    if (countTouchesOnScreen > 1) return;
    const curX = e.changedTouches[0].clientX;
    const curY = e.changedTouches[0].clientY;
    const newValueX = curX - touchStartX.current;
    if (!moveDirection.current) {
      if (touchStartX.current > curX + 2 || touchStartX.current < curX - 2) {
        moveDirection.current = 'horizontal';
      } else if (
        touchStartY.current < curY - 5 ||
        touchStartY.current > curY + 5
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
          {isButtonBack && (
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
          {isButtonNext && (
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
        style={gap ? { gap: gap } : undefined}
      >
        {items}
      </ul>
    </>
  );
};

export default PhotoGallery;
