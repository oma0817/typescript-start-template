import { atom } from "recoil";

type TwoButtonModalType = {
  title: string;
  text: string;
  findId?: string;
  confirmText?: string;
  cancleText?: string;
  onConfirm?: () => void;
  onClose?: () => void;
} | null;

export const twoButtonModalState = atom<TwoButtonModalType>({
  key: `twoButtonModalState`,
  default: null,
});

type alertModalType = {
  title: string;
  text: string;
  findId?: string;
  findType?: string;
  confirmText?: string;
  onConfirm?: () => void;
  onClose?: () => void;
} | null;

export const alertModalState = atom<alertModalType>({
  key: `alertModalState`,
  default: null,
});

type termModalType = {
  type: string;
} | null;

export const termModalState = atom<termModalType>({
  key: `termModalState`,
  default: null,
});

type selectModalType = {
  options: { value: string; text?: string }[];
  value?: string;
  onSelect?: (value: { value: string; text?: string }) => void;
} | null;

export const selectModalState = atom<selectModalType>({
  key: `selectModalState`,
  default: null,
});

type toastModalType = {
  text: string;
} | null;

export const toastModalState = atom<toastModalType>({
  key: `toastModalState`,
  default: null,
});

type PostModalType = {
  visible: boolean;
  onClick?: (postcode: string, address: string) => void;
} | null;

export const postModalState = atom<PostModalType>({
  key: `postModalState`,
  default: null,
});
