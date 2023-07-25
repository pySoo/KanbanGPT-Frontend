export type RequirementStateType = {
  issueId: string;
  id: string;
  title: string;
  isCompleted: boolean;
  gpt?: string;
};

export type createRequireType = {
  issueId: string;
  title: string;
};

export type updateRequireType = {
  id: string;
  title?: string;
  isCompleted?: boolean;
  gpt?: string;
};
