import { IoIosCloseCircle } from '@react-icons/all-files/io/IoIosCloseCircle';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaChevronDown } from 'react-icons/fa6';

import ButtonComponent from '../ButtonComponent';
import InputComponent from '../InputComponent';
import TextComponent from '../TextComponent';

import Styles from './Dropdown.component.styles';
import { handleClickOutside, highlightText } from './Dropdown.component.utils';

import type { DropdownProps, Ref, UseDropdownReturn } from './Dropdown.component.types';

/**
 * Render List options
 * @param {DropdownProps['options']} list - List options
 * @param {OnSelect} onSelect - OnSelect method
 * @returns {React.ReactNode} - Render List options
 */
const _renderList = (hooks: UseDropdownReturn): React.ReactNode => (
  <ul>
    {hooks.filtered?.map((o, index) => (
      <li
        key={o.value || index}
        className={Styles.listOptionItems()}
        onClick={() => hooks.handleSelect(o.value)}
      >
        {highlightText(o.label, hooks.search)}
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
    {_renderList(hooks)}
  </div>
);

/**
 * render content wrapper
 * @param {DropdownProps} props  - props
 * @param {UseDropdownReturn} hooks - Hooks
 * @returns {React.ReactNode} - render content wrapper
 */
const _renderContentOpenWrapper = (
  props: DropdownProps,
  hooks: UseDropdownReturn,
): React.ReactNode => {
  if (!hooks.open) {
    return null;
  }

  return props.portal
    ? createPortal(_renderContentOpen(hooks, props), document.body)
    : _renderContentOpen(hooks, props);
};

/**
 * Render Icon Chevron
 * @param {UseDropdownReturn} hooks - Hooks
 * @returns {React.ReactNode} - Render Icon Chevron
 */
const _renderIconChevron = (hooks: UseDropdownReturn): React.ReactNode => (
  <button onClick={() => hooks.setOpen((v) => !v)} className={Styles.buttonChevronIcon()}>
    <FaChevronDown className={Styles.chevronIcon()} />
  </button>
);

/**
 * Render place holder
 * @param {DropdownProps} props - props
 * @returns {React.ReactNode} - Render place holder
 */
const _renderPlaceHolder = (props: DropdownProps): React.ReactNode => (
  <div className={Styles.wrapperPlaceholder()}>
    <TextComponent multiline={false} variant="label">
      {props.placeholder}
    </TextComponent>
  </div>
);

/**
 * Render Dropdown Content
 * @param {DropdownProps} props - Props
 * @param {UseDropdownReturn} hooks - Hooks
 * @returns {React.ReactNode} - Render Dropdown Content
 */
const _renderDropdownContent = (
  props: DropdownProps,
  hooks: UseDropdownReturn,
): React.ReactNode => (
  <div className={Styles.container(props)}>
    {hooks.selected.length ? _renderSelectedValue(hooks) : _renderPlaceHolder(props)}
    <ButtonComponent intent="ghost" size="full" onPress={() => hooks.setOpen((v) => !v)} />
    {_renderIconChevron(hooks)}
  </div>
);

/**
 * useDropdown
 * custom hooks dropdown help to clean and readable
 * @param {DropdownProps} props - Props
 * @returns {UseDropdownReturn} - custom hooks dropdown help to clean and readable
 */
const useDropdown = (props: DropdownProps, wrapperRef: Ref): UseDropdownReturn => {
  const { options, multiple, value, filtering, onChange } = props;
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

    const filterResult = options.filter((o) =>
      o.label.toLowerCase().includes(search.toLowerCase()),
    );

    return filtering ? filterResult : options;
  }, [options, search, filtering]);

  React.useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside(wrapperRef, setOpen));
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside(wrapperRef, setOpen));
    };
  }, [wrapperRef, open]);

  return { open, setSearch, filtered, handleSelect, search, setOpen, selected };
};

/**
 * Dropdown Component Primitive
 * @param {DropdownProps} props - Props
 * @returns {React.ReactNode} - Dropdown Component Primitive
 */
const DropdownComponent = (props: DropdownProps): React.ReactNode => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const hooks = useDropdown(props, wrapperRef);

  return (
    <div ref={wrapperRef} className={Styles.containerWrapper()}>
      {_renderDropdownContent(props, hooks)}
      {_renderContentOpenWrapper(props, hooks)}
    </div>
  );
};

export default DropdownComponent;
