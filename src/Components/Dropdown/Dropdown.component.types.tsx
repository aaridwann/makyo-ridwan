import type { ReactNode } from 'react';

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps<T = unknown> = {
  options: DropdownOption[];

  value?: T | T[];
  onChange: (value: T | T[]) => void;

  multiple?: boolean;

  searchable?: boolean;
  portal?: boolean;

  renderOption?: (option: DropdownOption, selected: boolean) => ReactNode;

  placeholder?: string;
};

export type OnSelect = (value: string) => void;
