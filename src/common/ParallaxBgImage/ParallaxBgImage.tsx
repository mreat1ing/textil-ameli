import { FC, useCallback, useEffect, useRef } from 'react';

import './ParallaxBgImage.scss';

interface IParallaxBgImage {
  children?: JSX.Element;
  padding?: string | number;
  image: string;
  imageHeight?: string;
  top?: string;
}

const ParallaxBgImage: FC<IParallaxBgImage> = ({
  children,
  image,
  padding = 75,
  imageHeight,
  top,
}) => {
  const uniqueId = String(Math.random()).slice(2);
  const parallaxImage: React.MutableRefObject<HTMLElement | null> =
    useRef<HTMLElement | null>(null);
  const windowScrollY = useRef(window.scrollY);
  const imageScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currScrollY = window.scrollY;

    if (parallaxImage.current?.style) {
      parallaxImage.current.style.transform = `translateY(${currScrollY * -0.15}px)`;
      imageScrollY.current = Number(currScrollY * -0.15);
    }

    windowScrollY.current = currScrollY;
  }, []);

  useEffect(() => {
    const imgElement: Element | null = document.getElementById(uniqueId);
    parallaxImage.current = document.getElementById(uniqueId);
    const options = {
      root: null,
      rootMargin: '0px 100% 0px 100%',
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleScroll();
        document.addEventListener('scroll', handleScroll);
      } else {
        document.removeEventListener('scroll', handleScroll);
      }
    }, options);
    imgElement && observer.observe(imgElement);

    return () => {
      observer.disconnect();
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, uniqueId]);

  return (
    <div className="parallax-bg">
      <div
        className="parallax-bg__container"
        style={{ paddingTop: padding, paddingBottom: padding }}
      >
        <div className="parallax-bg__overlay" />
        <div className="parallax-bg__wrapper">
          <div
            className="parallax-bg__image"
            id={uniqueId}
            style={{
              backgroundImage: `url(${image})`,
              height: `${imageHeight}`,
              top: `${top}`,
            }}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ParallaxBgImage;
