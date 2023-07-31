export type GptStateType = {
  key: string;
  isConneted: boolean;
};

export type generateSearchSentenceProps = {
  title: string;
  framework?: string;
  language?: string;
};

export type copyTextProps = {
  text: string;
  toastMessage?: string;
  isRequirement?: boolean;
};
