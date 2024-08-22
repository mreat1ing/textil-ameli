import { FC, useEffect } from 'react';

import videoBg from 'src/assets/video/girlBG.mp4';
import Button from 'src/ui/button';

import './BgVideo.scss';

const BgVideo: FC = () => {
  useEffect(() => {
    const component = document.querySelector('.bg-video__text-wrapper');
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        component?.classList.add('render-animation');
        observer.disconnect();
      }
    });

    component && observer.observe(component);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video: HTMLVideoElement | null =
      document.querySelector('.bg-video__video');

    try {
      setTimeout(() => video?.play(), 500);
    } catch (error) {
      return;
    }
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
        >
          <source src={videoBg} />
        </video>
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
