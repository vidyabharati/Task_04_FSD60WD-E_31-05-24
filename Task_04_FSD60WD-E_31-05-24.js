//# Task_04_FSD60WD-E_31-05-24
//Task_04_FSD60WD-E_31-05-24-Functions

//// Q1) Do the below programs in anonymous function & IIFE
// a) Print odd numbers in an array
//Anonymous:
var odd = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};
odd([1, 3, 4, 6, 7, 0, 2, 9]);

//IIFE:
(function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
})([1, 3, 4, 6, 7, 0, 2, 9]);

// b) Convert all the strings to title caps in a string array
// Anonymous:
var titleCaps = function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
titleCaps("have a good day");

//IIFE:
(function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
})("have a good day");

// c)Sum of all numbers in an array
// Anonymous:
var add = function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
add([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//IIFE:
(function (arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//d) Return all the prime numbers in an array
// Anonymous:
var primeNo = function (arr) {
  let sortArray = [];
  arr.forEach((num) => {
    let factor = 0;
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      sortArray.push(num);
    }
  });
  console.log(sortArray);
};
primeNo([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//       IIFE:
(function (arr) {
  let sortArray = [];
  arr.forEach((num) => {
    let factor = 0;
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      sortArray.push(num);
    }
  });
  console.log(sortArray);
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// e) Return all the palindromes in an array
// Anonymous:
var namePalindrome = function (arr) {
  return arr.filter((curr, idx, arr) => {
    const splitArr = curr.split("");
    const reversedString = splitArr.reduceRight(
      (prev, curr) => prev + curr,
      ""
    );
    if (curr === reversedString) return curr;
  });
};

namePalindrome(["mom", "dad", "abcde", "racecar", "momom", "cdc", "abcdef"]);

//       IIFE:
(function (arr) {
  return arr.filter((curr, idx, arr) => {
    const splitArr = curr.split("");
    const reversedString = splitArr.reduceRight(
      (prev, curr) => prev + curr,
      ""
    );
    if (curr === reversedString) return curr;
  });
})(["mom", "dad", "abcde", "racecar", "momom", "cdc", "abcdef"]);

// f) Return median of two sorted arrays of the same size.
// Anonymous:
let findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const f = (i, j, k) => {
    if (i >= m) {
      return nums2[j + k - 1];
    }
    if (j >= n) {
      return nums1[i + k - 1];
    }
    if (k == 1) {
      return Math.min(nums1[i], nums2[j]);
    }
    const p = Math.floor(k / 2);
    const x = i + p - 1 < m ? nums1[i + p - 1] : 1 << 30;
    const y = j + p - 1 < n ? nums2[j + p - 1] : 1 << 30;
    return x < y ? f(i + p, j, k - p) : f(i, j + p, k - p);
  };
  const a = f(0, 0, Math.floor((m + n + 1) / 2));
  const b = f(0, 0, Math.floor((m + n + 2) / 2));
  return (a + b) / 2;
};
findMedianSortedArrays([1, 3, 4, 6, 9], [2, 5, 7, 8, 10]);

//       IIFE:

(function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const f = (i, j, k) => {
    if (i >= m) {
      return nums2[j + k - 1];
    }
    if (j >= n) {
      return nums1[i + k - 1];
    }
    if (k == 1) {
      return Math.min(nums1[i], nums2[j]);
    }
    const p = Math.floor(k / 2);
    const x = i + p - 1 < m ? nums1[i + p - 1] : 1 << 30;
    const y = j + p - 1 < n ? nums2[j + p - 1] : 1 << 30;
    return x < y ? f(i + p, j, k - p) : f(i, j + p, k - p);
  };
  const a = f(0, 0, Math.floor((m + n + 1) / 2));
  const b = f(0, 0, Math.floor((m + n + 2) / 2));
  return (a + b) / 2;
})([1, 3, 4, 6, 9], [2, 5, 7, 8, 10]);

// g) Remove duplicates from an array
// Anonymous:
let duplicate = function (array) {
  let dup = [...new Set(array)];
  console.log(dup);
};
duplicate([1, 1, 2, 4, 4, 3, 5]);

// //       IIFE:
(function (array) {
  let dup = [...new Set(array)];
  console.log(dup);
})([1, 1, 2, 4, 4, 3, 5]);

// h) Rotate an array by k times
// Anonymous:
let rotate = function solution(A, K) {
  if (A.length === K || K === 0) {
    return A;
  }

  K = K % A.length;

  for (let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }

  return A;
};
rotate([1, 2, 4, 5], 3);

//       IIFE:
(function solution(A, K) {
  if (A.length === K || K === 0) {
    return A;
  }

  K = K % A.length;

  for (let i = 0; i < K; i++) {
    A.unshift(A.pop());
  }

  return A;
})([1, 2, 4, 5], 3);

////Q2) Do the below programs in arrow functions.
//       a) Print odd numbers in an array
let odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
    }
  }
};
console.log(odd([1, 3, 4, 6, 7, 0, 2, 9]));

// b) Convert all the strings to title caps in a string array
let titleCaps = (str) => {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};
console.log(titleCaps("have a good day"));

// c) Sum of all numbers in an array
let add = (arr) => {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
console.log(add([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// d) Return all the prime numbers in an array
let primeNo = (arr) => {
  let sortArray = [];
  arr.forEach((num) => {
    let factor = 0;
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        factor++;
      }
    }
    if (factor === 2) {
      sortArray.push(num);
    }
  });
  console.log(sortArray);
};
console.log(primeNo([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// e) Return all the palindromes in an array
let namePalindrome = (arr) => {
  return arr.filter((curr, idx, arr) => {
    const splitArr = curr.split("");
    const reversedString = splitArr.reduceRight(
      (prev, curr) => prev + curr,
      ""
    );
    if (curr === reversedString) return curr;
  });
};

console.log(
  namePalindrome(["mom", "dad", "abcde", "racecar", "momom", "cdc", "abcdef"])
);
