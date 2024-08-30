import { FC, useEffect } from 'react';

import videoBg from 'src/assets/video/girlBG.mp4';
import Button from 'src/ui/button';
import observer from 'src/utils/observer.utils';

import './BgVideo.scss';

const BgVideo: FC = () => {
  useEffect(() => {
    const component = document.querySelector('.bg-video__text-wrapper');

    const observerFirst = component && observer(component, 'smooth-render');

    component && observerFirst?.observe(component);

    return () => {
      observerFirst?.disconnect();
    };
  }, []);

  const preloadVideo = async (src: string) => {
    const res = await fetch(src);
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  };

  useEffect(() => {
    const videoElement: HTMLVideoElement | null =
      document.querySelector('.bg-video__video');
    if (!videoElement) return;
    let timeoutVideo: NodeJS.Timeout;
    let timeoutAnimation: NodeJS.Timeout;
    preloadVideo(videoBg)
      .then((p) => {
        timeoutAnimation = setTimeout(
          () => videoElement.classList.add('show-content'),
          1000
        );
        return p;
      })
      .then((p) => {
        timeoutVideo = setTimeout(() => {
          if (videoElement.paused) {
            videoElement.src = p;
            videoElement.play();
          }
        }, 2000);
      });

    return () => {
      clearTimeout(timeoutAnimation);
      clearTimeout(timeoutVideo);
    };
  }, []);

  return (
    <div className="bg-video">
      <div className="bg-video__video-wrapper">
        <video
          className="bg-video__video"
          preload="auto"
          playsInline
          loop
          muted
        />
      </div>
      <div className="bg-video__text-wrapper">
        <div className="bg-video__content">
          <p className="bg-video__city shadow">Севастополь</p>
          <h2 className="bg-video__title shadow">Тюли, портьеры</h2>
          <p className="bg-video__description shadow">
            Дизайн, изготовление, монтаж всех видов штор и жалюзи
          </p>
          <Button className="bg-video__button">Консультация дизайнера</Button>
        </div>
      </div>
    </div>
  );
};

export default BgVideo;
