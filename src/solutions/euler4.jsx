import React, { useEffect, useState } from 'react';

export const euler4 = () => {
  let numbers = [];
  let total = 0;
  const [displayProducts, setDisplayProducts] = useState([]);
  const [displayHighest, setDisplayHighest] = useState(0);

  const isPalindrome = (num) => {
    let numString = String(num);
    while (numString.length > 1) { // odd number of digits or empty
      // outside digits don't match, kick it out
      if (numString[0] != numString[numString.length-1]) return false;
      // gradually reduce string from inside out
      numString = numString.substring(1,numString.length-1);
    }
    return true;
  }

  useEffect(() => {
    let products = [];
    for (let x = 100; x < 1000; x++) { // 3-digit number x
      for (let y = 100; y < 1000; y++) { // 3-digit number y
        let product = x * y;
        if (isPalindrome(product)) products.push(product);
      }
    }
    products.sort((a, b) => a - b); // sort low to high
    products = [...new Set(products)]; // only unique numbers
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