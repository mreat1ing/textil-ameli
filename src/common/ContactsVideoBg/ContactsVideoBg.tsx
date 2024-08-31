import { FC } from 'react';

import Video from 'src/common/Video';
import bgVideo from 'src/assets/video/girlBG.mp4';

import './ContactsVideoBg.scss';

const ContactsVideoBg: FC = () => {
  return (
    <div className="contacts-video">
      <Video src={bgVideo} />
    </div>
  );
};

export default ContactsVideoBg;
