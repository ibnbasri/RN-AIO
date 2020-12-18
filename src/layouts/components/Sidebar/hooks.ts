import {useState, useCallback, useEffect} from 'react';
import useDimensions from '../../../components/hooks/useDimension';
import {GestureResponderEvent} from 'react-native';

export default () => {
  const [sidebar, setSidebar] = useState(false);
  const dimension = useDimensions();

  const onChanges = useCallback(() => {
    console.log('Berubah');
    setSidebar((v) => !v);
  }, [setSidebar]);

  return [sidebar, onChanges];
};
