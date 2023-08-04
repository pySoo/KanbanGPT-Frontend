import { Comment } from 'react-loader-spinner';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { postCodeGeneration } from '@/api/gpt';
import loadingStateAtom from '@/atoms/loadingStateAtom';
import RoundedBtn from '@/components/common/RoundedBtn';
import useConnectGpt from '@/hooks/useConnectGpt';
import { theme } from '@/styles/theme';

export default function APITestSection() {
  const { apiKey } = useConnectGpt();
  const mutation = useMutation(postCodeGeneration);
  const [isLoading, setIsLoading] = useRecoilState(loadingStateAtom('test'));

  const postApiTest = async () => {
    if (apiKey.trim() === '') {
      toast.warn('API Key를 입력해 주세요.');
      return;
    }

    setIsLoading(true);
    const response = await mutation.mutateAsync({ prompt: '테스트입니다.', apiKey });
    if (response) {
      toast.success('이제 API 요청을 할 수 있어요! ');
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div className="gpt-info-title test">
        <h2>API 연동 테스트</h2>
        <RoundedBtn onClick={postApiTest}>
          {isLoading ? (
            <Comment
              visible={true}
              height="20"
              width="25"
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
              color="#fff"
              backgroundColor={theme.colors.primary}
            />
          ) : (
            <span>API 요청하기</span>
          )}
        </RoundedBtn>
      </div>
      <span>• (요청당 약 $0.0001가 청구됩니다. 약 1원 미만의 금액이에요.)</span>
    </div>
  );
}
