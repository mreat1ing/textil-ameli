import { FC, useCallback, useEffect, useRef } from 'react';

import './ParallaxBgImage.scss';

interface IParallaxBgImage {
  children?: JSX.Element;
  height?: string | number;
  image: string;
}

const ParallaxBgImage: FC<IParallaxBgImage> = ({
  children,
  image,
  height = 400,
}) => {
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
    const imgElement: Element | null = document.querySelector(
      '.parallax-bg__image'
    );
    parallaxImage.current = document.querySelector('.parallax-bg__image');
    const options = {
      root: null,
      rootMargin: '0px 100% 0px 100%',
      threshold: 0,
    };
    const observer = new IntersectionObserver((entries) => {
      handleScroll();
      if (entries[0].isIntersecting) {
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
  }, [handleScroll]);

  return (
    <div className="parallax-bg">
      <div className="parallax-bg__container" style={{ height: height }}>
        <div className="parallax-bg__overlay" />
        <div className="parallax-bg__wrapper">
          <div
            className="parallax-bg__image"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ParallaxBgImage;
