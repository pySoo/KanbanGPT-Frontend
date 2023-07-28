export type ModalStateType = {
  type: ModalType;
  props?: React.ComponentProps<'div'>;
};

export type ModalDispatchType = {
  openModal: ({ type, props }: ModalStateType) => void;
  closeModal: ({ type }: ModalStateType) => void;
};

export enum ModalType {
  ISSUE = 'ISSUE',
  GPT_INFO = 'GPT_INFO',
}
