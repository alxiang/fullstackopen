import React from 'react';

const Total = ({ parts }) => {

  const total = parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <b><p>Number of exercises {total}</p></b>
  )
};

export default Total;
