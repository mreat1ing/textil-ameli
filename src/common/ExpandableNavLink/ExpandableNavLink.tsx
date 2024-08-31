import { FC, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ExpandableNavLink.scss';

interface IExpandable {
  to: string;
  items: JSX.Element[];
  direction?: 'bottom' | 'right' | 'left';
  children: JSX.Element | string;
}

const ExpandableNavLink: FC<IExpandable> = ({
  to,
  items,
  children,
  direction = 'bottom',
}) => {
  const timer = useRef<NodeJS.Timeout>();
  const refList: React.RefObject<HTMLUListElement> | null = useRef(null);
  const [isHover, setHover] = useState(true);

  useEffect(() => {
    if (!refList.current?.style) return;
    if (direction === 'bottom') {
      refList.current.style.bottom = '0px';
      refList.current.style.left = '-1px';
      refList.current.style.transform = 'translateY(100%)';
    } else if (direction === 'right') {
      refList.current.style.top = '0px';
      refList.current.style.right = '0px';
      refList.current.style.transform = 'translateX(100%)';
    } else if (direction === 'left') {
      refList.current.style.top = '0px';
      refList.current.style.left = '0px';
      refList.current.style.transform = 'translateX(-100%)';
    }
    const bounds = refList.current.getBoundingClientRect();
    const { x, y, width, height } = bounds;

    if (x < 0) refList.current.style.width = width + x + 'px';
    if (y < 0) refList.current.style.height = height + y + 'px';
  }, [direction, isHover]);

  const hoverHandler = (value: boolean) => {
    clearTimeout(timer.current);
    if (!value) {
      document
        .querySelector('.expandable-nav-link__list')
        ?.classList.add('hide');
    } else {
      setHover(true);
      document
        .querySelector('.expandable-nav-link__list')
        ?.classList.remove('hide');
    }
    timer.current = setTimeout(() => setHover(value), 500);
  };

  const structuredItems = items.map((item) => (
    <li key={item.key} className={'expandable-nav-link__item'}>
      {item}
    </li>
  ));

  return (
    <>
      <NavLink
        className="expandable-nav-link"
        to={to}
        onMouseOver={() => hoverHandler(true)}
        onMouseOut={() => hoverHandler(false)}
      >
        {children}
      </NavLink>
      {isHover && (
        <ul
          ref={refList}
          className="expandable-nav-link__list"
          onMouseOver={() => hoverHandler(true)}
          onMouseOut={() => hoverHandler(false)}
        >
          {structuredItems}
        </ul>
      )}
    </>
  );
};

export default ExpandableNavLink;
