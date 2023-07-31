import { useRecoilValue } from 'recoil';

import { devEnvironmentAtom } from '@/atoms/devEnvironmentAtom';
import RoundedBtn from '@/components/common/RoundedBtn';
import { theme } from '@/styles/theme';
import { RequirementStateType } from '@/types/requirement';
import { copyText, generateSearchSentence } from '@/utils/gpt';

type GPTSearchInfoProps = {
  requirement?: RequirementStateType;
};
export default function GPTSearchInfo({ requirement }: GPTSearchInfoProps) {
  const devState = useRecoilValue(devEnvironmentAtom);

  const handleSearch = () => {
    if (!requirement) return;

    const text = generateSearchSentence({
      framework: devState.framework,
      language: devState.language,
      title: requirement.title,
    });

    copyText({
      text,
      toastMessage: '요구사항을 복사했어요!',
      isRequirement: true,
    });
  };

  return (
    <div>
      <h2 className="text-beige">요구사항을 빠르게 검색해 보세요 🔍</h2>
      <p>
        • 검색 버튼을 누르면 GPT 사이트에{' '}
        <span className="text-beige">검색할 내용을 복사해 드려요!</span>
      </p>
      <span>
        • 사이트가 열리면 <span className="text-beige">붙여넣기</span>를 해보세요.
      </span>
      {requirement && (
        <RoundedBtn
          color={theme.colors.beige}
          onClick={handleSearch}
        >{`${requirement.title} 구현 방법 검색하기`}</RoundedBtn>
      )}
    </div>
  );
}
