import React, { useEffect, useState } from 'react';

export const euler8 = () => {
  const [displayTriples, setDisplayTriples] = useState("");
  const [displayProduct, setDisplayProduct] = useState(0);

  const isTriple = (a, b, c) => {
    // if order is wrong, these should eventually come around in the right order
    // no need to check here
    if (a**2 + b**2 == c**2) {
      return true;
    }
  }

  const findTripleEquals = (sum) => {
    for (let a = 1; a <= sum-2; a++) {
      for (let b = 1; b <= sum-2; b++) {
        for (let c = 1; c <= sum-2; c++) {
          if (a + b + c == sum && isTriple(a, b, c)) {
            setDisplayProduct(a * b * c);
            setDisplayTriples(String(a) + ", " + String(b) + ", " + String(c));
            return;
          }
        }
      }
    }
  }

  useEffect(() => {
    findTripleEquals(1000);
  }, []);

  return (
    <>
      <p>A Pythagorean triplet is a set of three natural numbers, a &lt; b &lt; c, for which,</p>
      <p>a^2 + b^2 = c^2.</p>
      <p>For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.</p>
      <p>There exists exactly one Pythagorean triplet for which a + b + c = 1000.<br/>
      Find the product abc.</p>

      <br />
      <div className="display-equation">{displayTriples}</div>
      <h3><span className="spoiler">{displayProduct}</span></h3>
    </>
  );
};

export default euler8;