import { FC, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './BackLink.scss';

const BackLink: FC = () => {
  const [isError, setError] = useState(false);
  const { pathname } = useLocation();
  const splittedPath = pathname.split('/');
  const pathWoId = splittedPath.slice(0, splittedPath.length - 1).join('/');

  useEffect(() => {
    const errorElement = document.querySelector('.error');
    if (errorElement) setError(true);
    else setError(false);
  }, []);

  if (isError) return null;

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
