import { IoIosCloseCircle } from '@react-icons/all-files/io/IoIosCloseCircle';
import { get } from 'lodash';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaChevronDown } from 'react-icons/fa6';

import cn from '../../Lib/cn';
import ButtonComponent from '../ButtonComponent';
import InputComponent from '../InputComponent';
import TextComponent from '../TextComponent';

import Styles from './Dropdown.component.styles';
import { handleClickOutside, highlightText } from './Dropdown.component.utils';

import type { DropdownProps, Ref, UseDropdownReturn } from './Dropdown.component.types';

/**
 * Render List options
 * @param {UseDropdownReturn} hooks - hooks
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
 * @param {UseDropdownReturn} hooks - hooks
 * @param {DropdownProps} props - Props
 * @returns {React.ReactNode} - Render Selected value
 */
const _renderSelectedValue = (hooks: UseDropdownReturn, props: DropdownProps): React.ReactNode =>
  hooks.selected && (
    <div className={Styles.wrapperSelectedValue()}>
      {hooks.selected.map((value, index) => (
        <div
          key={value || index}
          className={cn(Styles.itemSelectedValue({ outlined: props.outlined }), props.className)}
        >
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
const _renderContentOpen = (
  hooks: UseDropdownReturn,
  props: DropdownProps,
  wrapperRef?: React.RefObject<HTMLDivElement | null>,
): React.ReactNode => {
  const width = get(hooks, 'widthPortal.width', 'auto');
  const left = get(hooks, 'widthPortal.left', 0);
  const style = props.portal ? { width, left } : undefined;

  return (
    <div
      ref={props.portal ? wrapperRef : undefined}
      style={{ ...style }}
      className={cn(
        Styles.wrapperContent({ size: props.size, portal: props.portal }),
        props.className,
      )}
    >
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
};

/**
 * render content wrapper
 * @param {DropdownProps} props  - props
 * @param {UseDropdownReturn} hooks - Hooks
 * @returns {React.ReactNode} - render content wrapper
 */
const _renderContentOpenWrapper = (
  props: DropdownProps,
  hooks: UseDropdownReturn,
  wrapperRef: React.RefObject<HTMLDivElement | null>,
): React.ReactNode => {
  if (!hooks.open) {
    return null;
  }

  return props.portal
    ? createPortal(_renderContentOpen(hooks, props, wrapperRef), document.body)
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
 * @param {UseDropdownReturn} hooks - Hooks
 * @returns {React.ReactNode} - Render place holder
 */
const _renderPlaceHolder = (props: DropdownProps, hooks: UseDropdownReturn): React.ReactNode => (
  <div onClick={() => hooks.setOpen((prev) => !prev)} className={Styles.wrapperPlaceholder()}>
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
  <div
    className={cn(
      Styles.container({ outlined: props.outlined, size: props.size }),
      props.className,
    )}
  >
    {hooks.selected.length ? _renderSelectedValue(hooks, props) : _renderPlaceHolder(props, hooks)}
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
  const [widthPortal, setWidthPortal] = useState<DOMRect>();

  const selected = value ?? internalSelected;

  const handleSelect = (v: string): void => {
    let next: string[];

    if (!multiple) {
      next = selected.includes(v) ? selected.filter((s) => s !== v) : [v];
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

  React.useLayoutEffect(() => {
    const parentSize = wrapperRef?.current?.getBoundingClientRect();

    setWidthPortal(parentSize);
  }, [wrapperRef, props.portal]);

  React.useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside(wrapperRef, setOpen));
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside(wrapperRef, setOpen));
    };
  }, [wrapperRef, open, props.portal]);

  return { open, setSearch, filtered, handleSelect, search, setOpen, selected, widthPortal };
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
    <div ref={wrapperRef} className={cn(Styles.containerWrapper(), props.className)}>
      {_renderDropdownContent(props, hooks)}
      {_renderContentOpenWrapper(props, hooks, wrapperRef)}
    </div>
  );
};

export default DropdownComponent;
