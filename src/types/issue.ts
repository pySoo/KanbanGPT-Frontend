export enum IssueStatusType {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export type IssueStateType = {
  status: IssueStatusType;
  id: string;
  title: string;
};

export type IssueDispatchType = {
  updateIssue: (updated: IssueStateType[]) => void;
};

export type updateIssueProps = {
  id: string;
  status?: IssueStatusType;
  title?: string;
};

export type createIssueProps = {
  status: IssueStatusType;
  title: string;
};
