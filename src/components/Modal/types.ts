import { ReactNode } from "react";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  backgroundColor?: string;
  children: ReactNode;
}