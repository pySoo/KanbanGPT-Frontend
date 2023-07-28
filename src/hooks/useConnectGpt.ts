import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { gptAtom } from '@/atoms/gptAtom';

export default function useConnectGpt() {
  const [isConnected, setIsConnected] = useState(false);
  const gptState = useRecoilValue(gptAtom);

  useEffect(() => {
    if (gptState.key) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [gptState]);

  return { isConnected };
}
