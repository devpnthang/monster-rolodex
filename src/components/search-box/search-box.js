import React from 'react';

import './search-box.scss';


export const SearchBox = ({ placeHolder, handleChange }) => (
  <input
    type="search"
    placeholder={placeHolder}
    onChange={handleChange}
  />
);