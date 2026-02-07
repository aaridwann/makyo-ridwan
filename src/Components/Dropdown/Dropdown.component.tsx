import { IoIosCloseCircle } from '@react-icons/all-files/io/IoIosCloseCircle';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaChevronDown } from 'react-icons/fa6';

import ButtonComponent from '../Button';
import InputComponent from '../InputComponent';

import Styles from './Dropdown.component.styles';

import type { DropdownProps, OnSelect, UseDropdownReturn } from './Dropdown.component.types';

/**
 * Render List options
 * @param {DropdownProps['options']} list - List options
 * @param {OnSelect} onSelect - OnSelect method
 * @returns {React.ReactNode} - Render List options
 */
const _renderList = (list: DropdownProps['options'], onSelect: OnSelect): React.ReactNode => (
  <ul>
    {list?.map((o, index) => (
      <li
        key={o.value || index}
        className={Styles.listOptionItems()}
        onClick={() => onSelect(o.value)}
      >
        {o.label}
      </li>
    ))}
  </ul>
);

/**
 * Render Selected value
 * @param {String[]} values - Selected value
 * @param {OnSelect} onClick - OnSelect method
 * @returns {React.ReactNode} - Render Selected value
 */
const _renderSelectedValue = (hooks: UseDropdownReturn): React.ReactNode =>
  hooks.selected && (
    <div className={Styles.wrapperSelectedValue()}>
      {hooks.selected.map((value, index) => (
        <div key={value || index} className={Styles.itemSelectedValue()}>
          <h3>{value}</h3>
          {
            <IoIosCloseCircle
              className={Styles.closeCircleButton()}
              onClick={() => hooks.handleSelect(value)}
              color="gray"
              size={20}
            />
          }
        </div>
      ))}
    </div>
  );

/**
 * Render content open
 * @param {UseDropdownReturn} hooks - Hooks dropdown
 * @param {DropdownProps} props - Props
 * @returns {React.ReactNode} - Render content open
 */
const _renderContentOpen = (hooks: UseDropdownReturn, props: DropdownProps): React.ReactNode => (
  <div className={Styles.wrapperContent(props)}>
    {props.searchable && (
      <InputComponent
        value={hooks.search}
        onChange={hooks.setSearch}
        onReset={() => hooks.setSearch('')}
        size="full"
      />
    )}
    {_renderList(hooks.filtered, hooks.handleSelect)}
  </div>
);

const _renderContentOpenWrapper = (
  hooks: UseDropdownReturn,
  props: DropdownProps,
): React.ReactNode => {
  if (!hooks.open) {
    return null;
  }

  return props.portal
    ? createPortal(_renderContentOpen(hooks, props), document.body)
    : _renderContentOpen(hooks, props);
};

/**
 * useDropdown
 * custom hooks dropdown help to clean and readable
 * @param {DropdownProps} props - Props
 * @returns {UseDropdownReturn} - custom hooks dropdown help to clean and readable
 */
const useDropdown = (props: DropdownProps): UseDropdownReturn => {
  const { options, multiple, value, onChange } = props;

  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [internalSelected, setInternalSelected] = useState<string[]>([]);

  const selected = value ?? internalSelected;

  const handleSelect = (v: string): void => {
    let next: string[];

    if (!multiple) {
      next = [v];
      setOpen(false);
    } else {
      next = selected.includes(v) ? selected.filter((s) => s !== v) : [...selected, v];
    }

    if (onChange) {
      onChange(next);
    } else {
      setInternalSelected(next);
    }
  };

  const filtered = useMemo(() => {
    if (!search) {
      return options;
    }

    return options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()));
  }, [options, search]);

  return { open, setSearch, filtered, handleSelect, search, setOpen, selected };
};

const _renderIconChevron = (hooks: UseDropdownReturn): React.ReactNode => (
  <button className=" w-10">
    <FaChevronDown onClick={() => hooks.setOpen((v) => !v)} className={Styles.chevronIcon()} />
  </button>
);

/**
 * Dropdown Component Primitive
 * @param {DropdownProps} props - Props
 * @returns {React.ReactNode} - Dropdown Component Primitive
 */
const DropdownComponent = (props: DropdownProps): React.ReactNode => {
  const hooks = useDropdown(props);

  return (
    <div className="flex flex-col w-full">
      <div className={Styles.container(props)}>
        {_renderSelectedValue(hooks)}
        <ButtonComponent intent="secondary" size="full" onPress={() => hooks.setOpen((v) => !v)} />
        {_renderIconChevron(hooks)}
      </div>
      {_renderContentOpenWrapper(hooks, props)}
    </div>
  );
};

export default DropdownComponent;
