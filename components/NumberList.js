
import React from 'react';

const NumberList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
};

export default NumberList;
