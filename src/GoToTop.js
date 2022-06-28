import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoToTop = function () {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    onTop();
    // eslint-disable-next-line
  }, [routePath]);

  return null;
};

export default GoToTop;
