export enum IssueStatusType {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export type IssueStateType = {
  status: IssueStatusType;
  id: string;
  title: string;
  requirements?: RequirementType[];
};

export type IssueDispatchType = {
  updateIssue: (updated: IssueStateType[]) => void;
};

export type RequirementType = {
  id: string;
  title: string;
  isCompleted: boolean;
  gpt?: string;
};
