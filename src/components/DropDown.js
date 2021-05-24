import React, { useState } from 'react';
import { capitalizeFirstLetter } from './../helpers';

const DropDown = ({ values, onChange, header }) => {
  const [value, setValue] = useState(undefined);

  const handleChange = ({ target }) => {
    setValue(target.value);
    onChange(target.value);
  };

  return (
    <select
      value={value}
      onChange={handleChange}
      data-testid="select"
    >
      {!value && <option value={header}>{header}</option>}
      {values.map((attr, index) => (
        <option key={index} value={attr}>
          {capitalizeFirstLetter(attr)}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
