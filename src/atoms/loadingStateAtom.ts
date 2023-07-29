import { atomFamily } from 'recoil';

const loadingStateAtom = atomFamily({
  key: 'loadingState',
  default: false,
});

export default loadingStateAtom;
