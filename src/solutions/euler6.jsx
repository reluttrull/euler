import React, { useEffect, useState } from 'react';

export const euler6 = () => {
  const [displayEquation, setDisplayEquation] = useState("");
  const [displayNumber, setDisplayNumber] = useState(0);

  const sumSquares = (highest) => {
    let sum = 0;
    for (let i = 1; i <= highest; i++) {
      sum += i**2; // add this square to the total
    }
    return sum;
  }

  const squareSums = (highest) => {
    let sum = Array.from({length: highest+1}, (e, i)=> i) // index 0 gets value 0, add 1 more
        .reduce((partialSum, a) => partialSum + a, 0); // sum up array values
    return sum**2;
  }

  useEffect(() => {
    let a = squareSums(100);
    let b = sumSquares(100);
    setDisplayEquation(String(a) + " - " + String(b) + " =");
    setDisplayNumber(squareSums(100) - sumSquares(100))
  }, []);

  return (
    <>
      <p>The sum of the squares of the first ten natural numbers is,</p>
      1^2 + 2^2 + ... + 10^2 = 385.
      <p>The square of the sum of the first ten natural numbers is,</p>
      (1 + 2 + ... + 10)^2 = 55^2 = 3025.
      <p>Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.</p>
      <p>Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.</p>
      <br />
      <div className="display-equation">{displayEquation}</div>
      <h3><span className="spoiler">{displayNumber}</span></h3>
    </>
  );
};

export default euler6;