import React, { useState} from 'react';

const Effect = (props) => {
  const { name,age } = props;
  return (
    <div>
      <h1>Hello, {name}!,your age:{age}</h1>
      <h1>Hello, {name}!,your age:{age}</h1>
    </div>
  );
};

export default Effect;
