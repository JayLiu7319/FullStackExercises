import React from 'react';

const Total = ({ parts }) => {
    const totalAmount = parts.reduce((sum, part)=> sum + part.exercises, 0)
    return(
      <p>total of {totalAmount} exercises</p>
    ) 
  }

export default Total