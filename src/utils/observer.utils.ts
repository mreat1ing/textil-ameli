export default function observer(component: Element, additionalClass = '') {
  const observerLocal = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      additionalClass && component?.classList.add(additionalClass);
      observerLocal.disconnect();
    }
  });

  return observerLocal;
}
