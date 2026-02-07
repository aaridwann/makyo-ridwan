import type Styles from './Dropdown.component.styles';
import type { VariantProps } from 'class-variance-authority';
import type { ReactNode } from 'react';

export interface UseDropdownReturn {
  open: boolean;
  search: string;
  setSearch: (value: string) => void;
  filtered: DropdownProps['options'];
  selected: string[];
  handleSelect: (value: string) => void;
  setOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}

export type DropdownOption = {
  label: string;
  value: string;
};

export type DropdownProps<T = unknown> = VariantProps<(typeof Styles)['container']> & {
  options: DropdownOption[];
  value?: string[];
  onChange: (value: T | T[]) => void;
  multiple?: boolean;
  searchable?: boolean;
  portal?: boolean;
  renderOption?: (option: DropdownOption, selected: boolean) => ReactNode;
  placeholder?: string;
  outlined?: boolean;
};

export type OnSelect = (value: string) => void;
