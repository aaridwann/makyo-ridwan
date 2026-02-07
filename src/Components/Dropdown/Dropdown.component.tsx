import { IoIosCloseCircle } from '@react-icons/all-files/io/IoIosCloseCircle';
import * as React from 'react';
import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaChevronDown } from 'react-icons/fa6';

import ButtonComponent from '../Button';
import InputComponent from '../InputComponent';

import Styles from './Dropdown.component.styles';

import type { DropdownProps, OnSelect } from './Dropdown.component.types';

const _renderList = (list: DropdownProps['options'], onSelect: OnSelect): React.ReactNode => (
  <ul>
    {list.map((o, index) => (
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

const _renderSelectedValue = (values: string[], onClick: OnSelect): React.ReactNode =>
  values && (
    <div className={Styles.wrapperSelectedValue()}>
      {values.map((value) => (
        <div className={Styles.itemSelectedValue()}>
          <h3>{value}</h3>
          {
            <IoIosCloseCircle
              className={Styles.closeCircleButton()}
              onClick={() => onClick(value)}
              color="gray"
              size={20}
            />
          }
        </div>
      ))}
    </div>
  );

const DropdownComponent = ({
  options,
  searchable = true,
  multiple = true,
  portal = false,
}: DropdownProps): React.ReactNode => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string[]>([]);

  const filtered = useMemo(() => {
    if (!search) {
      return options;
    }

    return options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()));
  }, [options, search]);

  const toggle = (value: string): void => {
    if (!multiple) {
      setSelected([value]);
      setOpen(false);

      return;
    }

    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  const content = (
    <div className={Styles.wrapperContent()}>
      {searchable && (
        <InputComponent
          onReset={() => setSearch('')}
          size={'full'}
          value={search}
          onChange={setSearch}
        />
      )}
      {_renderList(filtered, toggle)}
    </div>
  );

  return (
    <React.Fragment>
      <div className={Styles.container()}>
        {_renderSelectedValue(selected, toggle)}
        <ButtonComponent intent={'secondary'} size={'full'} onPress={() => setOpen((v) => !v)} />
        <FaChevronDown onClick={() => setOpen((v) => !v)} className={Styles.chevronIcon()} />
      </div>
      {open && (portal ? createPortal(content, document.body) : content)}
    </React.Fragment>
  );
};

export default DropdownComponent;
