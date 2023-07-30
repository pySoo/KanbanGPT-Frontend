import { css } from '@emotion/react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';

import { postCodeGeneration } from '@/api/gpt';
import loadingStateAtom from '@/atoms/loadingStateAtom';
import useConnectGpt from '@/hooks/useConnectGpt';
import { useRequirement } from '@/hooks/useRequirement';
import { RequirementStateType } from '@/types/requirement';

import GPTIcon from '../icons/GPTIcon';

type GPTGenerateCodeBtnProps = {
  requirement: RequirementStateType;
  onSelectId: (id?: string) => void;
};

export default function GPTGenerateCodeBtn({ requirement, onSelectId }: GPTGenerateCodeBtnProps) {
  const { apiKey } = useConnectGpt();
  const mutation = useMutation(postCodeGeneration);
  const setLoading = useSetRecoilState(loadingStateAtom(requirement?.id));

  const { updateRequire } = useRequirement();

  const getGeneratedGptCode = async () => {
    if (!requirement) return;

    setLoading(true);
    const response = await mutation.mutateAsync({
      prompt: requirement.title,
      apiKey,
    });
    setLoading(false);

    if (response?.message) {
      updateRequire({ id: requirement.id, gpt: response?.message });
    }
  };

  const handleGptIconClick = () => {
    if (apiKey) {
      getGeneratedGptCode();
    } else {
      toast.warning('API key를 등록해야 코드를 받아볼 수 있어요!');
    }

    onSelectId(requirement.id);
  };

  return (
    <button onClick={handleGptIconClick} css={gptIconStyle}>
      <GPTIcon width={22} height={22} />
    </button>
  );
}

const gptIconStyle = css`
  margin: auto;
  display: flex;
  align-items: center;
`;
