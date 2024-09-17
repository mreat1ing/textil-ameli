import modalToggle from './modalToggle.utils';

export const toggleModalOrder = (value: boolean, cb: () => void) => {
  modalToggle(value);
  cb();
};
