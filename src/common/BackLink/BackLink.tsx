import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './BackLink.scss';

const BackLink: FC = () => {
  const { pathname } = useLocation();
  const splittedPath = pathname.split('/');
  const pathWoId = splittedPath.slice(0, splittedPath.length - 1).join('/');

  return (
    <div className="back-link">
      <div className="back-link__wrapper">
        <NavLink className="back-link__link" to={pathWoId}>
          Назад
        </NavLink>
      </div>
    </div>
  );
};

export default BackLink;
