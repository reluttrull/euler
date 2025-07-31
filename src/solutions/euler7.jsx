import React, { useEffect, useState } from 'react';

export const euler7 = () => {
  const [displayPrimes, setDisplayPrimes] = useState([]);
  const [displayNumber, setDisplayNumber] = useState(0);

  const isPrime = (num) => {
    let maxFactor = Math.floor(Math.sqrt(num));
    for (let i = 2; i <=maxFactor; i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  const nPrimes = (n) => {
    let primes = []
    for (let testNumber = 2; primes.length <= n; testNumber++) {
      if (isPrime(testNumber)) primes.push(testNumber);
      if (primes.length == n) return primes;
    }
    return [];
  }

  useEffect(() => {
    let primes = nPrimes(10001);
    setDisplayPrimes(primes);
    setDisplayNumber(primes[primes.length-1]);
  }, []);

  return (
    <>
      <p>By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.</p>
      <p>What is the 10,001st prime number?</p>
      <br />
      <div className="display-equation">{displayPrimes.map(prime => 
        <span>{prime}{displayPrimes.indexOf(prime) + 1 < displayPrimes.length ? ", " : ""}</span>
      )}</div>
      <h3><span className="spoiler">{displayNumber}</span></h3>
    </>
  );
};

export default euler7;