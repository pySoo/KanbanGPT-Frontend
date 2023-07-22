import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import checkLottieData from '../../public/lotties/check_gradient.json';

export default function CheckLottie() {
  const linkContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (linkContainer.current) {
      const instance = lottie.loadAnimation({
        container: linkContainer.current,
        renderer: 'svg',
        loop: false,
        animationData: checkLottieData,
      });
      return () => instance.destroy();
    }
  }, []);

  return <div css={{ width: '24px', height: '24px' }} ref={linkContainer}></div>;
}
