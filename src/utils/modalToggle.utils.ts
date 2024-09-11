import { MODAL_EXPANDED } from 'src/constants/classes';

export default function modalToggle() {
  let isExpanded = false;
  const rootElement = document.querySelector('body');
  const isRootElementExpanded = rootElement?.classList.contains(MODAL_EXPANDED);

  if (isRootElementExpanded) isExpanded = true;

  if (isExpanded) {
    isRootElementExpanded && rootElement?.classList.remove(MODAL_EXPANDED);
  } else {
    !isRootElementExpanded && rootElement?.classList.add(MODAL_EXPANDED);
  }
}
