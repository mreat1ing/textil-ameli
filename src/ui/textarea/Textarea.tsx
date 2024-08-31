import { forwardRef, LegacyRef } from 'react';

import './Textarea.scss';

interface ITextarea {
  className?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
}

const Textarea = forwardRef(
  (props: ITextarea, ref: LegacyRef<HTMLTextAreaElement>): JSX.Element => {
    const { className, label, required, placeholder } = props;
    const randomNumber = Math.round(
      new Date().getMilliseconds() * Math.random() * 100
    );
    const inputId = randomNumber + (label ? label : '');
    const inputClass = 'textarea' + (className ? ' ' + className : '');
    const input = (
      <textarea
        id={inputId}
        className={inputClass}
        placeholder={placeholder}
        required={required}
        ref={ref}
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
