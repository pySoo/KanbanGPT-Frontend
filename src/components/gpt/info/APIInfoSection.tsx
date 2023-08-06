import RoundedBtn from '@/components/common/RoundedBtn';

export default function APIInfoSection() {
  const handleOpenUsagePage = () => {
    window.open('https://platform.openai.com/account/usage');
  };

  return (
    <div>
      <div className="gpt-info-title info">
        <h2>API 요청이 되지 않는다면?</h2>
        <RoundedBtn onClick={handleOpenUsagePage}>확인해보기</RoundedBtn>
      </div>
      <span>• 1. 무료 크레딧이 소진 되었어요.</span>
      <span>• 2. 결제 수단이 등록되지 않았어요.</span>
    </div>
  );
}
