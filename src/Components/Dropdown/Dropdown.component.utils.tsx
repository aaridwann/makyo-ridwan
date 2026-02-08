import Styles from './Dropdown.component.styles';

import type { Ref } from './Dropdown.component.types';

/**
 * handle click outside helper
 * @param {Ref} wrapperRef - Ref
 * @param { React.Dispatch<boolean>} setOpen - setter useState
 * @returns {void} - handle click outside helper
 */
const handleClickOutside =
  (wrapperRef: Ref, setOpen: React.Dispatch<boolean>) =>
  (event: MouseEvent): void => {
    event.stopImmediatePropagation();

    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

/**
 * highlight text helper
 * @param {string} text - text
 * @param {string} query - text
 * @returns {React.ReactNode} - highlight text helper
 */
const highlightText = (text: string, query: string): React.ReactNode => {
  if (!query) {
    return text;
  }

  const regex = new RegExp(`(${query.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className={Styles.markerText()}>
        {part}
      </mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
};

export { highlightText, handleClickOutside };
