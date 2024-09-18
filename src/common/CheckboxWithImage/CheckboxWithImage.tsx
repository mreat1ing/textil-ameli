import { FC, useState } from 'react';

import './CheckboxWithImage.scss';

interface ICheckboxWithImage {
  image: string;
  label: string;
}

const CheckboxWithImage: FC<ICheckboxWithImage> = ({ image, label }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <div
      className={`checkbox-image${isChecked ? ' checked' : ''}`}
      onClick={() => setChecked((checked) => !checked)}
    >
      <img className="checkbox-image__image" src={image} alt="" />
      <label className="checkbox-image__checkbox-container" htmlFor="checkbox">
        {label}
        <input
          type="checkbox"
          id={label}
          readOnly
          checked={isChecked}
          onClick={() => setChecked((checked) => !checked)}
        />
        <span className="checkbox-image__checkbox" />
      </label>
    </div>
  );
};

export default CheckboxWithImage;
