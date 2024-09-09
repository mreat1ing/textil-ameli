import { FC, useEffect } from 'react';

import Error from 'src/common/Error';

const ErrorPage: FC = () => {
  useEffect(() => {
    document.title = 'Амели | Пошив штор в Севастополе';
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Error />
    </>
  );
};

export default ErrorPage;
