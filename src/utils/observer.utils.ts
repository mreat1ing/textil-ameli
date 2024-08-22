export default function observer(component: Element) {
  const observerLocal = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      component?.classList.add('render-animation');
      observerLocal.disconnect();
    }
  });

  return observerLocal;
}
