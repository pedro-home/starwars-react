Object.defineProperty(window, 'scrollTo', {
  value: ({ top = window.scrollY, left = window.scrollX }) => {
    window.scrollY = top;
    window.scrollX = left;
  },
  writable: true,
});
Object.defineProperty(document.body, 'scrollHeight', { value: window.innerHeight * 2 });
