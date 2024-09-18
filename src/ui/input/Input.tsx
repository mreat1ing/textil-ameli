import {
  ChangeEventHandler,
  forwardRef,
  HTMLInputAutoCompleteAttribute,
  LegacyRef,
} from 'react';

import './Input.scss';

interface IInput {
  className?: string;
  required?: boolean;
  value?: string;
  defaultValue?: string;
  pattern?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  autoComplete?: HTMLInputAutoCompleteAttribute;
  onChange?: ChangeEventHandler;
}

const Input = forwardRef(
  (props: IInput, ref: LegacyRef<HTMLInputElement>): JSX.Element => {
    const {
      className,
      defaultValue,
      label,
      pattern,
      required,
      value,
      placeholder,
      autoComplete,
      onChange,
    } = props;
    const randomNumber = Math.round(
      new Date().getMilliseconds() * Math.random() * 100
    );
    const inputId = randomNumber + (label ? label : '');
    const inputClass = 'input' + (className ? ' ' + className : '');
    const input = (
      <input
        id={inputId}
        value={value}
        defaultValue={defaultValue}
        className={inputClass}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        type="text"
        ref={ref}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    );

    if (label) {
      return (
        <label htmlFor={inputId} className="label">
          {label}
          {input}
        </label>
      );
    }

    return input;
  }
);

Input.displayName = 'Input';

export default Input;
