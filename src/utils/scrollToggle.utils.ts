const preventDefault = (e: TouchEvent) => {
  if (e.touches.length < 2) {
    e.preventDefault();
  }
};

export const disableScroll = () => {
  document.body.addEventListener('touchmove', preventDefault, {
    passive: false,
  });
};

export const enableScroll = () => {
  document.body.removeEventListener('touchmove', preventDefault);
};
