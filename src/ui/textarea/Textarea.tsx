import { forwardRef, LegacyRef, TextareaHTMLAttributes } from 'react';

import './Textarea.scss';

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
}

const Textarea = forwardRef(
  (props: ITextarea, ref: LegacyRef<HTMLTextAreaElement>): JSX.Element => {
    const { className, label, required, placeholder, onChange, defaultValue } =
      props;
    const randomNumber = Math.round(
      new Date().getMilliseconds() * Math.random() * 100
    );
    const inputId = randomNumber + (label ? label : '');
    const inputClass = 'textarea' + (className ? ' ' + className : '');
    const input = (
      <textarea
        defaultValue={defaultValue}
        id={inputId}
        className={inputClass}
        placeholder={placeholder}
        required={required}
        ref={ref}
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

Textarea.displayName = 'Input';

export default Textarea;
