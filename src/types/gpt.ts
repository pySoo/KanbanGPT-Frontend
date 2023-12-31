export type GptStateType = {
  key: string;
  isConneted: boolean;
};

export type generateSearchPromptProps = {
  title: string;
  framework?: string;
  language?: string;
};

export type copyTextProps = {
  text: string;
  toastMessage?: string;
  isRequirement?: boolean;
};

export type handleTextCopyProps = {
  callback: () => void;
  toastMessage?: string;
  isRequirement?: boolean;
};
