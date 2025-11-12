export const fadeIn = (delay = 0, duration = 0.45) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const slideUp = (delay = 0, distance = 32) => ({
  hidden: { opacity: 0, y: distance },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay,
      ease: [0.30, 1, 0.48, 1],
    },
  },
});

export const popIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay,
      ease: [0.2, 0.9, 0.3, 1.15],
    },
  },
});

export const staggerChildren = (stagger = 0.04, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});
