import RoundedBtn from '@/components/common/RoundedBtn';
import { useModal } from '@/hooks/useModal';
import { ModalType } from '@/types/modal';

import ExampleCodeBlock from '../ExampleCodeBlock';

export default function GPTAPIKeyInfo() {
  const { openModal, clearModal } = useModal();

  const handleInfoOpenModal = () => {
    clearModal();
    openModal({ type: ModalType.GPT_INFO });
  };
  return (
    <div className="api-container">
      <h2 className="text-green">GPT로 구현 속도 높이기 🚀</h2>
      <p>
        GPT API key를 등록하면 <span className="text-green">요구사항을 구현한 코드</span>를 바로
        받아볼 수 있어요.
      </p>
      <RoundedBtn onClick={handleInfoOpenModal}>API key 등록하기</RoundedBtn>
      <ExampleCodeBlock />
    </div>
  );
}
