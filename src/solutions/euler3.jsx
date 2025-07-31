import React, { useEffect, useState } from 'react';

export const euler3 = () => {
  let numbers = [];
  let total = 0;
  const [displayFactors, setDisplayFactors] = useState([]);
  const [displayHighest, setDisplayHighest] = useState(0);

  const isPrime = (num) => {
  // maximum possible factor of a number (other than itself)
  //   is its square root
  let maxFactor = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= maxFactor; i++) {
      // if it has any factors other than 1 (skipped) or itself (not reached), 
      //   kick it out
      if (num % i == 0) return false;
    }
    return true;
  }

  const getPrimeFactors = (num) => {
  // same logic applies, we don't need to test higher than sqrt
  let maxFactor = Math.floor(Math.sqrt(num));
    let factors = [];
    for (let i = 2; i < maxFactor; i++) {
      if (num % i == 0 && isPrime(i)) factors.push(i);
    }
    return factors;
  }

  useEffect(() => {
    let factors = getPrimeFactors(600851475143);
    setDisplayFactors(factors);
    setDisplayHighest(factors[factors.length-1])
  }, []);

  return (
    <>
      <p>The prime factors of 13195 are 5, 7, 13 and 29.</p>
      <p>What is the largest prime factor of the number 600851475143?</p>
      <br />
      <div className="display-equation">{displayFactors.map(factor => 
        <span>{factor}{displayFactors.indexOf(factor) + 1 < displayFactors.length ? ", " : ""}</span>
      )}</div>
      <h3><span className="spoiler">{displayHighest}</span></h3>
    </>
  );
};

export default euler3;