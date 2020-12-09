import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

const useDimensions = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  const onChange = ({window}: {window: any}) => {
    setDimensions(window);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);

    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  return dimensions;
};

export default useDimensions;
