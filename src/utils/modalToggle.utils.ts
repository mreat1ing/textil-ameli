import { MODAL_EXPANDED } from 'src/constants/classes';

export default function modalToggle(value?: boolean) {
  let isExpanded = value;
  const rootElement = document.querySelector('body');
  const isRootElementExpanded = rootElement?.classList.contains(MODAL_EXPANDED);

  if (isRootElementExpanded) isExpanded = true;

  if (isExpanded) {
    rootElement?.classList.remove(MODAL_EXPANDED);
  } else {
    rootElement?.classList.add(MODAL_EXPANDED);
  }
}
