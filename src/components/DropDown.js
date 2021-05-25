import React from 'react';
import { capitalizeFirstLetter } from './../helpers';

const DropDown = (props) => (
  <select
    value={props.selected}
    onChange={({ target }) => props.onChange(target.value)}
    data-testid="select"
  >
    {!props.selected && (
      <option value={props.header}>{props.header}</option>
    )}
    {props.values.map((attr, index) => (
      <option key={index} value={attr}>
        {capitalizeFirstLetter(attr)}
      </option>
    ))}
  </select>
);

export default DropDown;
