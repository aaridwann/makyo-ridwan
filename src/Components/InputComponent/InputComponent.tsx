import { CiSearch } from 'react-icons/ci';
import { IoIosCloseCircle } from 'react-icons/io';

import Configs from './Input.component.configs';
import Styles from './Input.component.styles';

import type { ChangeHandler, PropsInput } from './Input.component.types';
import type React from 'react';

/**
 * onChangeHandler
 * @param {PropsInput} props - Props input
 * @returns {ChangeHandler} - onChangeHandler
 */
const _onChangeHandler: ChangeHandler = (props) => (event) => props.onChange(event.target.value);

/**
 * get Props input
 * @param {PropsInput} props - Props of input
 * @returns {React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>}
 */
const _getPropsInput = (
  props: PropsInput,
): React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> => ({
  className: Styles.inputWrapper(),
  value: props.value,
  onChange: _onChangeHandler(props),
});

/**
 * Render reset icon
 * @param {PropsInput} props - Props
 * @returns {React.ReactNode} - Render reset icon
 */
const _renderResetIcon = (props: PropsInput): React.ReactNode =>
  props.value && <IoIosCloseCircle onClick={props.onReset} color={'gray'} size={25} />;

/**
 * Input component
 * @param {PropsInput} props - props of input
 * @returns {React.ReactNode}
 */
const InputComponent = (props: PropsInput): React.ReactNode => (
  <span className={Styles.inputContainer()}>
    {!props.withIcon && <CiSearch color={'gray'} size={25} />}
    <input {..._getPropsInput(props)} />
    {_renderResetIcon(props)}
  </span>
);

InputComponent.defaultProps = Configs.defaultProps;
InputComponent.displayName = Configs.displayName;

export default InputComponent;
