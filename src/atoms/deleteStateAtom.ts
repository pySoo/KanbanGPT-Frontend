import { atomFamily } from 'recoil';

const deleteStateAtom = atomFamily({
  key: 'deleteState',
  default: false,
});

export default deleteStateAtom;
