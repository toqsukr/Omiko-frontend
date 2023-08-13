export const cityAnimation = {
  from: { opacity: 0, transform: 'translateX(-50px)' },
  enter: { opacity: 1, transform: 'translateX(0px)' },
  leave: { opacity: 0, transform: 'translateX(50px)' },
  exitBeforeEnter: true,
  config: {
    duration: 300,
  },
};
