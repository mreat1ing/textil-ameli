import { FC, useCallback, useEffect } from 'react';

import './Video.scss';

interface IVideo {
  src: string;
}

const Video: FC<IVideo> = ({ src }) => {
  const preloadVideo = useCallback(async () => {
    const res = await fetch(src);
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  }, [src]);

  useEffect(() => {
    const videoElement: HTMLVideoElement | null =
      document.querySelector('.bg-video__video');
    if (!videoElement) return;
    let timeoutVideo: NodeJS.Timeout;
    let timeoutAnimation: NodeJS.Timeout;
    preloadVideo()
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
  }, [preloadVideo]);

  return (
    <div className="bg-video">
      <video
        className="bg-video__video"
        preload="auto"
        playsInline
        loop
        muted
      />
    </div>
  );
};

export default Video;
