import {useRef, useState, useEffect} from 'react';

export default () => {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => {
    console.log('hover');
  };

  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node: any = ref.current;

      console.log(node);

      if (node) {
        node.addEventListener('touchstart', handleMouseOut);
        node.addEventListener('touchmove', handleMouseOut);
        node.addEventListener('touchmove', handleMouseOver);

        return () => {
          node.removeEventListener('touchstart', handleMouseOut);
          node.removeEventListener('touchmove', handleMouseOut);
          node.removeEventListener('touchmove', handleMouseOver);
        };
      }
    },

    [ref.current], // Recall only if ref changes
  );

  return [ref, value];
};
