import React, { useState, useEffect } from 'react';

export default function AdditionDisplay() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  // This is all unnecessary

  // const [sum, setSum] = useState(0);
  // useEffect(() => {
  //   setSum(number1 + number2);
  // }, [number1, number2]);

  const sum = number1 + number2;

  return (
    <p>
      {number1} + {number2} = {sum}
    </p>
  );
}
