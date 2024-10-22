// Sehr einfach

// 1. How Edabit Works

function hello() {
  return "hello edabit.com";
}

console.log(`1. ${hello()}`);

// 2. Return the Sum of Two Numbers

function add(a, b) {
  return a + b;
}

console.log(`2. ${add(2, 3)}`);

// 3. Convert Minutes into Seconds

function minsToSecs(a) {
  return a * 60;
}

console.log(`3. ${minsToSecs(6)}`);

// 4. Return the Next Number from the Integer Passed

function addition(a) {
  return a + 1;
}

console.log(`4. ${addition(0)}`);

// 5. Are of a Triangle

function triArea(a, b) {
  return (a * b) / 2;
}

console.log(`5. ${triArea(3, 2)}`);

// Einfach

// 6.

function bitwiseAND(a, b) {
  return a & b;
}

const bitwiseOR = (a, b) => a | b;

const bitwiseXOR = function (a, b) {
  return a ^ b;
};

console.log(
  `6. and: ${bitwiseAND(7, 12)} \n   or: ${bitwiseOR(
    7,
    12
  )} \n   xor: ${bitwiseXOR(7, 12)}`
);

// 7. Add up the Numbers from a Single Number

function addUp(a) {
  for (let i = a - 1; i >= 0; i--) {
    a += i;
  }
  return a;
}

console.log(`7. ${addUp(4)}`);

// 8. Matchstick Houses

function matchHouses(a) {
  if (a === 0) {
    console.log("8. No stciks");
  } else if (a > 0) {
    a = 6 + 5 * (a - 1);
  } else {
    console.log("8. You cant have a negative number of houses");
  }
  return a;
}

console.log(`8. ${matchHouses(4)}`);

// 9. Left Shift by Powers of Two

function shiftToLeft(a, b) {
  return a * 2 ** b;
}

console.log(`9. ${shiftToLeft(5, 2)}`);

// 10. Find the Smallest and Biggest Numbers

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return [min, max];
}

console.log("10.", minMax([1, 2, 3, 4, 5]));

// Mittel

// 11. How Much is True?

function countTrue(boo) {
  let count = 0;
  for (i = 0; i < boo.length; i++) {
    if (boo[i] === true) {
      count++;
    }
  }
  return count;
}

console.log(`11. ${countTrue([true, false, false, true, false])}`);
// console.log(countTrue([true, false, true, false, false, false, true]));

// 12. A redundant Function

function redundant(str) {
  return function () {
    return str;
  };
}

const f1 = redundant("apple");
console.log("12.", f1);
console.log("12.", f1());
