import { useRecoilState } from 'recoil';

import { requirementAtom } from '@/atoms/requirementAtom';
import { createRequireType, RequirementStateType, updateRequireType } from '@/types/requirement';
import { createUniqueId } from '@/utils/uniqueId';

export function useRequirement() {
  const [requireList, setRequireList] = useRecoilState<RequirementStateType[]>(requirementAtom);

  const createRequire = ({ issueId, title }: createRequireType) => {
    const id = createUniqueId();
    setRequireList((prevRequire) => [
      ...prevRequire,
      {
        issueId,
        id,
        title,
        isCompleted: false,
      },
    ]);
  };

  const updateRequire = ({ id, title, isCompleted, gpt }: updateRequireType) => {
    const updatedRequire = requireList.map((require) =>
      require.id === id
        ? {
            ...require,
            title: title ?? require.title,
            isCompleted: isCompleted ?? require.isCompleted,
            gpt: gpt ?? require.gpt,
          }
        : require,
    );
    setRequireList(updatedRequire);
  };

  const deleteRequire = ({ id }: { id: string }) => {
    setRequireList(requireList.filter((require) => require.id !== id));
  };

  const getRequireByIssueId = ({ issueId }: { issueId: string }) => {
    return requireList.filter((require) => require.issueId === issueId);
  };

  return { requireList, createRequire, updateRequire, deleteRequire, getRequireByIssueId };
}
