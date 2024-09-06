import { FC, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './ExpandableNavLink.scss';

interface IExpandable {
  to: string;
  items?: JSX.Element[];
  direction?: 'bottom' | 'right' | 'left';
  children: React.ReactNode;
  timeoutOver?: number;
  type?: 'burger' | 'default';
}

const ExpandableNavLink: FC<IExpandable> = ({
  to,
  items,
  children,
  direction = 'bottom',
  timeoutOver = 0,
  type = 'default',
}) => {
  const timer = useRef<NodeJS.Timeout>();
  const timer2 = useRef<NodeJS.Timeout>();
  const refList: React.RefObject<HTMLUListElement> | null = useRef(null);
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    if (!refList.current?.style || type !== 'default') return;
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

    if (x < 0) refList.current.style.width = width + x - 16 + 'px';
    if (y < 0) refList.current.style.height = height + y - 16 + 'px';
  }, [direction, isHover, type]);

  const clickHandler = (
    value: boolean,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    if (!value) {
      refList.current?.classList.add('hide');
      setTimeout(() => setHover(false), 400);
    } else {
      setHover(true);
      refList.current?.classList.remove('hide');
    }
  };

  const hoverHandler = (value: boolean) => {
    if (type === 'burger') return;
    clearTimeout(timer.current);
    clearTimeout(timer2.current);
    if (!value) {
      timer2.current = setTimeout(
        () => refList.current?.classList.add('hide'),
        timeoutOver
      );
    } else {
      setHover(true);
      refList.current?.classList.remove('hide');
    }
    timer.current = setTimeout(() => setHover(value), 200 + timeoutOver);
  };

  const structuredItems = items?.map((item) => (
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
      {type === 'burger' && (
        <div className="expandable-nav-link__button-container">
          <button
            style={isHover ? { transform: 'rotate(90deg)' } : undefined}
            className="expandable-nav-link__button"
            onClick={(e) => clickHandler(!isHover, e)}
          />
        </div>
      )}
      {isHover && structuredItems?.length ? (
        <ul
          ref={refList}
          className="expandable-nav-link__list"
          onMouseOver={() => hoverHandler(true)}
          onMouseOut={() => hoverHandler(false)}
        >
          {structuredItems}
        </ul>
      ) : null}
    </>
  );
};

export default ExpandableNavLink;
