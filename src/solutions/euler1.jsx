import React, { useEffect, useState } from 'react';

export const euler1 = () => {
  let numbers = [];
  let total = 0;
  const [displayNumbers, setDisplayNumbers] = useState([]);
  const [displayTotal, setDisplayTotal] = useState(0);

  const addends = displayNumbers.map(addend =>
    <span key={displayNumbers.indexOf(addend)}>
      {addend}{displayNumbers.indexOf(addend)+1<displayNumbers.length ? " + ": " = "}
    </span>
  );

  useEffect(() => {
    let i = 1;
    let numbers = [];
    while (i < 1000) {
      if (i%3==0 || i%5==0) numbers.push(i);
      i++;
    }
    console.log(numbers);
    setDisplayNumbers(numbers);
    total = 0;
    numbers.forEach(number => {
      total += number;
    });
    console.log('='+total);
    setDisplayTotal(total);
  }, []);

  return (
    <>
      <p>If we list all the natural numbers below $10$ that are multiples of $3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.</p>
      <p>Find the sum of all the multiples of $3$ or $5$ below $1000$.</p>
      <br />
      <div className="display-equation">{addends}</div>
      <h3><span className="spoiler">{displayTotal}</span></h3>
    </>
  );
};

export default euler1;