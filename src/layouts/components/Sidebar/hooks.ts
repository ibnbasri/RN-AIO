import {useState, useEffect} from 'react';
import useDimensions from '../../../components/hooks/useDimension';

export default () => {
  const [sidebar, setSidebar] = useState(false);

  const onChange = () => {
    //const {width}: number = useDimensions();

    setSidebar(true);
  };

  useEffect(() => {}, []);

  return {sidebar, onChange};
};
