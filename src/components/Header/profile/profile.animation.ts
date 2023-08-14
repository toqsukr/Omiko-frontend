export const nameAnimation = {
  from: { opacity: 0, transform: 'translateX(100px)' },
  enter: { opacity: 1, transform: 'translateX(0px)' },
  leave: { opacity: 0, transform: 'translateX(100px)' },
  exitBeforeEnter: true,
  config: {
    duration: 300,
  },
};
