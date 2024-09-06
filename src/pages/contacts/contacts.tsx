import { FC, useEffect } from 'react';

import ContactsContactUs from 'src/common/ContactsContactUs';
import ContactsVideoBg from 'src/common/ContactsVideoBg';

const Contacts: FC = () => {
  useEffect(() => {
    document.title = 'Контакты';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <ContactsVideoBg />
      <ContactsContactUs />
    </>
  );
};

export default Contacts;
