import { BURGER_EXPANDED } from 'src/constants/classes';

export default function burgerToggle() {
  let isExpanded = false;
  const divBurger = document.querySelector('.burger');
  const rootElement = document.querySelector('body');
  const bgElement = document.querySelector('.burger-bg');

  const isBgElementExpanded = bgElement?.classList.contains(BURGER_EXPANDED);
  const isDivBurgerExpanded = divBurger?.classList.contains(BURGER_EXPANDED);
  const isRootElementExpanded =
    rootElement?.classList.contains(BURGER_EXPANDED);

  if (isDivBurgerExpanded || isRootElementExpanded || isBgElementExpanded)
    isExpanded = true;

  if (isExpanded) {
    isDivBurgerExpanded && divBurger?.classList.remove(BURGER_EXPANDED);
    isBgElementExpanded && bgElement?.classList.remove(BURGER_EXPANDED);
    setTimeout(
      () =>
        isRootElementExpanded && rootElement?.classList.remove(BURGER_EXPANDED),
      200
    );
  } else {
    !isDivBurgerExpanded && divBurger?.classList.add(BURGER_EXPANDED);
    !isRootElementExpanded && rootElement?.classList.add(BURGER_EXPANDED);
    !isBgElementExpanded && bgElement?.classList.add(BURGER_EXPANDED);
  }
}
