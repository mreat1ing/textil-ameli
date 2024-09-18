import { FC, useEffect, useState } from 'react';

import './CheckboxWithImage.scss';
import { getSessionChecks } from 'src/utils/sessionOrder.utils';

interface ICheckboxWithImage {
  image: string;
  label: string;
}

const CheckboxWithImage: FC<ICheckboxWithImage> = ({ image, label }) => {
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    const sessionChecks = getSessionChecks();
    if (sessionChecks.findIndex((el) => el === label) > -1) {
      setChecked(true);
    }
  }, [label]),
    [];

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
