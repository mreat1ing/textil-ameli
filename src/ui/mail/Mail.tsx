import { FC } from 'react';

import './Mail.scss';

interface IMail {
  className?: string;
}

const Mail: FC<IMail> = ({ className }) => {
  return (
    <a
      className={`mail${className ? ' ' + className : ''}`}
      href="mailto:stdamelie@gmail.com"
    >
      stdamelie@gmail.com
    </a>
  );
};

export default Mail;
