import React from 'react';
import { motion } from 'framer-motion';

const AnimatedElement = ({ 
  children, 
  className, 
  delay = 0, 
  direction = 'up',
  distance = 30
}) => {
  let initialY = distance;
  let initialX = 0;
  
  if (direction === 'down') initialY = -distance;
  if (direction === 'left') {
    initialY = 0;
    initialX = distance;
  }
  if (direction === 'right') {
    initialY = 0;
    initialX = -distance;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: initialY, x: initialX }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0,
        transition: {
          duration: 0.6,
          delay,
          ease: 'easeOut'
        }
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedElement; 