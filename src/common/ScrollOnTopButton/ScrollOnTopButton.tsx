import { FC, useCallback, useEffect, useRef, useState } from 'react';

import './ScrollOnTopButton.scss';

const ScrollOnTopButton: FC = () => {
  const buttonRef = useRef(null);
  const [isShowScrollTopButton, setShowScrollTopButton] = useState(false);
  const [curPos, setCurPos] = useState(window.innerWidth * 0.02);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollHandler = useCallback(() => {
    const currScroll = window.scrollY;
    if (currScroll > 200) {
      setShowScrollTopButton(true);
    } else setShowScrollTopButton(false);
  }, []);

  const resizeHandler = useCallback((e?: UIEvent | '_', insta = false) => {
    const currWidth = window.innerWidth;

    if (insta) {
      const newWidth = currWidth * 0.02;
      if (newWidth < 40) setCurPos(newWidth);
      else setCurPos(40);
    } else if (currWidth >= 320 && currWidth <= 1920) {
      if (!(currWidth % 16)) {
        setCurPos(currWidth * 0.02);
      }
    }
  }, []);

  useEffect(() => {
    if (!isShowScrollTopButton) return;
    resizeHandler('_', true);
  }, [isShowScrollTopButton, resizeHandler]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, [resizeHandler, scrollHandler]);

  return (
    <div
      ref={buttonRef}
      className="scroll-top-button-container"
      style={
        isShowScrollTopButton
          ? {
              bottom: curPos,
              right: curPos,
            }
          : {
              bottom: curPos,
              right: curPos,
              transform: 'translateY(100px)',
            }
      }
    >
      <button
        className="scroll-top-button__button"
        type="button"
        onClick={handleClick}
      >
        <svg
          width="50px"
          height="50px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          stroke="#000000"
        >
          <g
            id="SVGRepo_bgCarrier"
            strokeWidth="0"
            transform="translate(4.800000000000001,4.800000000000001), scale(0.7)"
          >
            <rect
              x="-3.2"
              y="-3.2"
              width="38.40"
              height="38.40"
              rx="0"
              fill="#ffffff"
              strokeWidth="0"
            />
          </g>

          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="0.064"
          />

          <g id="SVGRepo_iconCarrier">
            {' '}
            <title>arrow-up-square</title>{' '}
            <desc>Created with Sketch Beta.</desc> <defs> </defs>{' '}
            <g id="Page-1" strokeWidth="0.00032" fill="none" fillRule="evenodd">
              {' '}
              <g
                id="Icon-Set-Filled"
                transform="translate(-518.000000, -985.000000)"
                fill="#fd07b2"
              >
                {' '}
                <path
                  d="M540.535,1000.535 C540.145,1000.926 539.512,1000.926 539.121,1000.535 L535,996.414 L535,1007 C535,1007.55 534.552,1008 534,1008 C533.447,1008 533,1007.55 533,1007 L533,996.414 L528.879,1000.535 C528.488,1000.926 527.854,1000.926 527.465,1000.535 C527.074,1000.146 527.074,999.512 527.465,999.121 L533.121,993.465 C533.361,993.225 533.689,993.15 534,993.205 C534.311,993.15 534.639,993.225 534.879,993.465 L540.535,999.121 C540.926,999.512 540.926,1000.146 540.535,1000.535 L540.535,1000.535 Z M546,985 L522,985 C519.791,985 518,986.791 518,989 L518,1013 C518,1015.21 519.791,1017 522,1017 L546,1017 C548.209,1017 550,1015.21 550,1013 L550,989 C550,986.791 548.209,985 546,985 L546,985 Z"
                  id="arrow-up-square"
                >
                  {' '}
                </path>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
      </button>
    </div>
  );
};

export default ScrollOnTopButton;
