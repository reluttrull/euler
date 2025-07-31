import React, { useEffect, useState } from 'react';

export const euler5 = () => {
  const [displayNumber, setDisplayNumber] = useState(0);

  const hasAllFactors = (num, max) => {
    // we already checked that the number is even
    for (let i = 3; i <= max; i++) {
      if (num % i != 0) return false;
    }
    return true;
  }

  const getSmallestWithAllFactors = (max) => {
    let test = max;
    while (true) { 
      // don't bother with odd numbers
      if (test % 2 == 0) {
        if (hasAllFactors(test, max)) return test;
      }
      test++;
    }
  }

  useEffect(() => {
    setDisplayNumber(getSmallestWithAllFactors(20));
  }, []);

  return (
    <>
      <p>2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.</p>
      <p>What is the smallest positive number that is evenly divisible (divisible with no remainder) by all of the numbers from 1 to 20?</p>
      <br />
      <div className="display-equation"></div>
      <h3><span className="spoiler">{displayNumber}</span></h3>
    </>
  );
};

export default euler5;