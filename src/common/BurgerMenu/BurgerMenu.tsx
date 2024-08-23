import { FC } from 'react';

import burgerToggle from 'src/utils/burgerToggle.utils';
import { ReactComponent as BurgerIcon } from 'src/assets/icons/burger-menu.svg';

import './BurgerMenu.scss';

const BurgerMenu: FC = () => {
  return (
    <button className="burger__button" onClick={burgerToggle}>
      <span>Меню</span>
      <BurgerIcon width={20} height={20} />
    </button>
  );
};

export default BurgerMenu;
