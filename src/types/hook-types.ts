import { RefObject } from "react";

export type UseOpenCloseReturn = {
  open: boolean;
  onClose: () => void;
  onOpenClose: () => void;
};

export type UseOutsideClickProps = {
  ref: RefObject<HTMLElement>;
  // eslint-disable-next-line no-unused-vars
  callback: (e: MouseEvent) => void;
  parent?: HTMLElement;
};
