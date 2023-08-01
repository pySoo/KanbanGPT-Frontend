import { replaceColor } from 'lottie-colorify';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import { theme } from '@/styles/theme';

import checkLottieData from '../../assets/lotties/check_lottie.json';

export default function CheckLottie() {
  const linkContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (linkContainer.current) {
      const instance = lottie.loadAnimation({
        container: linkContainer.current,
        renderer: 'svg',
        loop: false,
        animationData: replaceColor('#2C4BEC', theme.colors.primary, checkLottieData),
      });
      return () => instance.destroy();
    }
  }, []);

  return <div css={{ width: '24px', height: '24px' }} ref={linkContainer}></div>;
}
