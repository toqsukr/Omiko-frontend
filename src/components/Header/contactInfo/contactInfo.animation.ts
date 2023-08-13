export const contactAnimation = {
  from: { opacity: 0, scale: 0, transform: 'translateY(-100px)' },
  enter: { opacity: 1, scale: 1, transform: 'translateY(0px)' },
  leave: { opacity: 0, scale: 0, transform: 'translateY(-100px)' },
  exitBeforeEnter: true,
  config: {
    duration: 300,
  },
};
