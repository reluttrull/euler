import React, { useEffect, useState } from 'react';

export const euler4 = () => {
  let numbers = [];
  let total = 0;
  const [displayProducts, setDisplayProducts] = useState([]);
  const [displayHighest, setDisplayHighest] = useState(0);

  const isPalindrome = (num) => {
    let numString = String(num);
    while (numString.length > 1) {
      if (numString[0] != numString[numString.length-1]) return false;
      numString = numString.substring(1,numString.length-1);
    }
    return true;
  }

  useEffect(() => {
    let products = [];
    for (let x = 100; x < 1000; x++) {
      for (let y = 100; y < 1000; y++) {
        let product = x * y;
        if (isPalindrome(product)) products.push(product);
      }
    }
    products.sort((a, b) => a - b);
    products = [...new Set(products)];
    setDisplayProducts(products);
    setDisplayHighest(products[products.length-1]);
  }, []);

  return (
    <>
      <p>A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.</p>
      <p>Find the largest palindrome made from the product of two 3-digit numbers.</p>

      <br />
      <div className="display-equation">{displayProducts.map(prod => 
        <span>{prod}{prod != displayHighest ? ", " : ""}</span>)}
      </div>
      <h3><span className="spoiler">{displayHighest}</span></h3>
    </>
  );
};

export default euler4;