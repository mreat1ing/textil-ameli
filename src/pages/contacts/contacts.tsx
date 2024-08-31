import { FC } from 'react';

import ContactsContactUs from 'src/common/ContactsContactUs';
import ContactsVideoBg from 'src/common/ContactsVideoBg';

const Contacts: FC = () => {
  return (
    <>
      <ContactsVideoBg />
      <ContactsContactUs />
    </>
  );
};

export default Contacts;
