export interface ChildrenType {
  children: React.ReactNode | React.ReactNode[];
}

export interface RouteType {
  element: React.ReactNode | React.ReactNode[];
}

export interface OptionType {
  value: string;
  text?: string;
}

export interface SelectType {
  label?: string;
  placeholder?: string;
  options: { value: string; text?: string }[];
  value: string | null;
  onChange: (value: { value: string; text?: string }) => void;
}

export interface RouteGuardType {
  when: boolean;
  type?: "switch";
  title: string;
  content: string;
  onClick?: () => void;
  onClose?: () => void;
}

export interface InputType {
  label: string;
  errorText?: string;
  placeholder?: string;
  type?: string | "text" | "password";
  value: string | number;
  disable?: boolean;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  btnText?: string;
  btnDisable?: boolean;
  onClick?: () => void;
  className?: string;
  time?: string;
  unit?: string;
  id?: string;
}

export interface TextareaType {
  label?: string;
  errorText?: string;
  placeholder?: string;
  value: string | number;
  disable?: boolean;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export interface CheckBoxType {
  type?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode | React.ReactNode[];
}

export interface ImageType {
  id?: number;
  file: File | "";
  preview_url: string;
}
