import { css } from '@emotion/react';
import { Comment } from 'react-loader-spinner';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';

import { postCodeGeneration } from '@/api/gpt';
import loadingStateAtom from '@/atoms/loadingStateAtom';
import useConnectGpt from '@/hooks/useConnectGpt';

export default function APITestSection() {
  const { apiKey } = useConnectGpt();
  const mutation = useMutation(postCodeGeneration);
  const [isLoading, setIsLoading] = useRecoilState(loadingStateAtom('test'));

  const postApiTest = async () => {
    setIsLoading(true);
    const response = await mutation.mutateAsync({ prompt: '테스트입니다.', apiKey });
    if (response) {
      toast.success('이제 API 요청을 할 수 있어요! ');
    }
    setIsLoading(false);
  };

  return (
    <div css={apiTestSectionStyle}>
      <div className="test-section">
        <h2>API 연동 테스트</h2>
        <button onClick={postApiTest}>
          {isLoading ? (
            <Comment
              visible={true}
              height="25"
              width="25"
              ariaLabel="comment-loading"
              wrapperStyle={{}}
              wrapperClass="comment-wrapper"
              color="#fff"
              backgroundColor="#F4442E"
            />
          ) : (
            <span>API 요청하기</span>
          )}
        </button>
      </div>
      <span>(요청당 약 $0.0001가 청구됩니다. 약 1원 미만의 금액이에요)</span>
    </div>
  );
}

const apiTestSectionStyle = css`
  .test-section {
    flex-direction: row;
    align-items: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 25px;
  }
`;
