import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { gptAtom } from '@/atoms/gptAtom';

export default function useConnectGpt() {
  const [isConnected, setIsConnected] = useState(false);
  const gptState = useRecoilValue(gptAtom);
  const apiKey = gptState.key;

  useEffect(() => {
    if (apiKey) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, [gptState]);

  return { isConnected, apiKey };
}
