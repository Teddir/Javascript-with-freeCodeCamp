//--------------------------------- Record CollectionPassed

// var recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {

//   if (prop !== 'tracks' && value !== '') {
//     records[id][prop] = value
//   } else if (prop === 'tracks') {
//     if (records[id][prop] == '' || records[id][prop] == undefined) {
//       records[id][prop] = [value]
//     }

//     if (value !== '' && records[id][prop] == '') {
//       records[id][prop].push(value)
//     }

//     if (value === '') {
//       delete records[id][prop]
//     }
//   } else if (value === '') {
//     delete records[id][prop]
//     console.log(records[id])

//   }
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 2548, "tracks", "")
// updateRecords(recordCollection, 2548, "artist", "")
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me")
// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 5439, "artist", "ABBA");
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");


//---------------->  Iterate with JavaScript While Loops
//----------------> Nesting For Loops
// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//       product *= arr[i]
//       console.log(product);
//     }
//   }
//   // Only change code above this line
//   return product;
// }

// // multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// multiplyAll([[1], [2], [3]])



//----------------------------- Replace Loops using Recursion

// if (n <= 0) {
//   if (arr.length <= 1) {
//     return 0
//   }
// } else {
//   if (arr.length <= 3) {
//     return 2
//   }
//   if (arr.length <= 4) {
//     return 9
//   }

//   return sum(arr, n - 1) * arr[n - 1]
// }

// sum([2, 3, 4, 5], 3) = 9
// sum([2, 3, 4], 1) = 2
// sum([1], 0) = 0


//----------------------------------> profile LookUp

// // Setup
// var contacts = [
//   {
//     "firstName": "Akira",
//     "lastName": "Laine",
//     "number": "0543236543",
//     "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//     "firstName": "Harry",
//     "lastName": "Potter",
//     "number": "0994372684",
//     "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//     "firstName": "Sherlock",
//     "lastName": "Holmes",
//     "number": "0487345643",
//     "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//     "firstName": "Kristian",
//     "lastName": "Vos",
//     "number": "unknown",
//     "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];


// function lookUpProfile(name, prop) {
//   // Only change code below this line
//   var lookup = ''
//   for (var i = 0; i <= contacts.length; i++) {
//     lookup = contacts[i]
//     if (lookup?.firstName === name) {
//       var kamu = lookup[prop]
//       if (kamu === undefined) {
//         return lookup = 'No such property'
//       }
//       return lookup[prop]
//     } else {
//       lookup = 'No such contact'
//     }
//   }
//   return lookup
//   // Only change code above this line
// }
// lookUpProfile("Akira", "address")
// lookUpProfile("Harry", "likes")
// lookUpProfile("Kristian", "lastName")
// lookUpProfile("Akira", "likes");
// lookUpProfile("Bob", "number")
// lookUpProfile("Sherlock", "likes")


//----------------> Use Recursion to Create a Countdown

// function countdown(n) {
//   if (n < 1) {
//     return []
//   } else {
//     const cd = countdown(n - 1)
//     cd.unshift(n)
//     return cd;
//   }


// }
// console.log(countdown(5));

// //----------------------------> Use Recursion to Create a Range of Numbers
// function rangeOfNumbers(startNum, endNum) {
//   if (startNum === endNum) {

//     return [startNum]

//   } else if (startNum < endNum) {

//     const cd = rangeOfNumbers(startNum, endNum - 1)
//     cd.push(endNum)
//     return cd;

//   }

//   else {
//     return []
//   }
// };
// console.log(rangeOfNumbers(1, 5))

// let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }
// let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997']
// let newCar = myCar.slice(0, 2)
// console.log(newCar)

// function diffArray(arr1, arr2) {
//   var newArr = [];
//   let a = [];

//   for (let i = 0; i <= arr1.length; i++) {
//     a[arr1[i]] = true
//   }

//   for (let i = 0; i <= arr2.length; i++) {
//     if (a[arr2[i]]) {
//       delete a[arr2[i]]
//     } else {
//       a[arr2[i]] = true
//     }
//   }

//   for (let i in a) {
//     newArr.push(i)
//   }
//   console.log(Math.floor(newArr))
//   return (newArr);
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// ====================================================> freCodeCamp 2021
// soal 1;

function sumAll(arr) {
  let newArr = [];

  let max = Math.max(...arr);
  let min = Math.min(...arr);

  for (let a = min; a <= max; a++) {
    newArr.push(a)
  }

  let b = newArr.reduce((a, b) => { return a + b })

  return b;
}

sumAll([1, 4]);

// soal 2;
//----------------> with map only
function diffArray(arr1, arr2) {
  var newArr = [];
  // var array = arr1.concat(arr2)
  // loop
  let as = arr1.map((item) => {
    if (!arr2.includes(item)) {
      newArr.push(item)
    } else {
      return false
    }
  })

  let asa = arr2.map((item) => {
    if (!arr1.includes(item)) {
      newArr.push(item)
    } else {
      return false
    }
  })

  console.log(newArr)
  return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//----------------> with concat and map / forEach
function diffArray(arr1, arr2) {
  var newArr = [];
  var array = arr1.concat(arr2)
  // loop
  array.forEach((item) => {
    if (!arr1.includes(item) !== !arr2.includes(item)) {
      newArr.push(item)
    }
  })
  console.log(newArr)
  return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// soal 3
//==================> solution 1
function destroyer(arr) {
  let abc = [];
  let a = Array.from(arguments).slice(1)
  arr.map((item) => {
    if (a.includes(item)) {
      return true
    } else {
      return abc.push(item)
    }
  })
  return abc;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//==================> solution 2
function destroyer(arr) {
  let abc = [];
  let a = Array.from(arguments).slice(1)
  arr.map((item) => {
    if (!a.includes(item)) {
      return abc.push(item)
    }
  })
  return abc;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// soal 4
function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  // update a source to array 
  let as = Object.entries(source)

  //filter collection 
  let ab = collection.filter(item => {
    // make a variable to ago
    let cek = 0
    // map a source after entries
    as.map(([keys, values]) => {
      if (item.hasOwnProperty(keys)
        && item[keys] === values) {
        cek++;
      }
    })
    return cek === as.length
  })
  console.log(ab)
  arr = ab
  // Only change code above this line
  return arr;
}

whatIsInAName(
  [{ first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" }],
  { last: "Capulet" });

// soal 5
function spinalCase(str) {
  // let ab = str.toLowerCase()
  let cd = str.replace(/^[\W]+|[\W_]+$|([\W_]+)/g,
    function ($1) {
      return $1 ? "-" : "";
    })

  let ac = cd.replace(/([a-z])(?=[A-Z])/g, '$1-').toLowerCase()
  console.log(ac)

  str = ac;
  return str;
}

spinalCase('This Is Spinal Tap');
// spinalCase('"AllThe-small Things');

// soal 6
function translatePigLatin(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = "";

  if (vowels.indexOf(str[0]) > -1) {

    newStr = str + "way";
    return newStr;

  } else {

    let firstMatch = str.match(/[aeiou]/g) || 0;
    let vowel = str.indexOf(firstMatch[0]);
    newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";

    return newStr;
  }
}

translatePigLatin("consonant");

// soal 7

function myReplace(str, before, after) {
  let aa = str.includes(before)

  // cek true or no
  if (aa) {
    // chek a before does a fill Alfabet
    let firstMatch = before.match(/[A-Z]/g) || 0
    if (firstMatch !== 0) {

      // replace a after to UpperCase
      return str.replace(before, after.replace(after[0], after[0].toUpperCase()))
    } else {

      // chek a after does a fill Alfabet
      let secondMatch = after.match(/[A-Z]/g) || 0
      if (secondMatch) {

        // replace a before to lowecase
        return str.replace(before, after.toLowerCase())
      }

      // if not only 
      return str.replace(before, after)
    }
  } else {
    return null
  }
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// soal 8

function pairElement(str) {
  let a = [];

  // create a basa alafabet
  let value1 = ['A', 'T']
  let value2 = ['C', 'G']

  // take a value from parameter
  let b = Object.values(str)
  // map a value
  b.map((item) => {
    // cek does on parameter have a basa Alfabet
    let firstMatch = item.match(/[ATCG]/g) || 0

    // cek firstmath equal with a basaAlfabet
    if (firstMatch.join('') === value1[0] || firstMatch.join('') === value1[1]) {

      let bb = firstMatch.concat(firstMatch.join('') === value1[0] ? value1[1] : value1[0])
      return a.push(bb)

    } else if (firstMatch.join('') === value2[0] || firstMatch.join('') === value2[1]) {

      let bb = firstMatch.concat(firstMatch.join('') === value2[0] ? value2[1] : value2[0])
      return a.push(bb)
    }
  })
  console.log(a)
  return a;
}

pairElement("TTGAG");

// soal 9

function fearNotLetter(str) {
  let a ,b = 0, c = 150
  if (str) {
    a = str.charCodeAt(0);
    while (a <= c && b < str.length) {
      if (String.fromCharCode(a) !== str.charAt(b)) {
        return String.fromCharCode(a)
      }
      a++, b++;
    }
  }
  return undefined;
}

console.log(fearNotLetter("stvwx"));

// soal 10
//============ solusion me
function uniteUnique(arr) {
  let nilai = [];
  arr.map((item) => {
    nilai.push(item)
  })
  console.log(arguments)
  if (arguments.length >= 2) {
  arguments[1].map((item) => {
    if (!arr.includes(item)) {
      nilai.push(item)
    }
  })
  arguments[2]?.map((item) => {
    if (!arr.includes(item)) {
      nilai.push(item)
    }
  })
  arguments[3]?.map((item) => {
    if (!arr.includes(item)) {
      nilai.push(item)
    }
  })
  }
  return nilai;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//========== solution 2
function uniteUnique(...arr) {
  let nilai = [];
  let kamu = [...arr]
  for (let a = 0; a < kamu.length; a++) {
    let newa = kamu[a];
    for (let k = 0; k < newa.length; k++) {
      if(!nilai.includes(kamu[a][k])) {
        nilai.push(kamu[a][k])
      }
    }
  }
  return nilai;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// solution simple but people also know what a flat method
function unitedUnique(...arr) {
  return [...new Set(arr.flat())]
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// soal 11
function convertHTML(str) {
  let a =  Object.values(str).map((item) => {
      return item.replace(/(<|>|&|"|')/, 
      item.includes('&') ? '&amp;' : null || 
      item.includes('<') ? '&lt;' : null ||
      item.includes('>') ? '&gt;' : null ||
      item.includes('"') ? '&quot;' : null ||
      item.includes("'") ? '&apos;' : null)
  })
  return a.join('')
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));

// soal 12

function sumFibs(num) {
  if(num <= 0) return 0

  const arr = [1, 1]
  let nextArr = 0;
  
  while((nextArr = arr[0] + arr[1]) <= num) {
    arr.unshift(nextArr)
  }

  return arr.filter(x => x % 2 != 0).reduce((a, b) =>  a+b)
}
sumFibs(4);

//soal 13
function sumPrimes(num) {
  if (num <= 0) return 0;
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (isNum(i)) {
      sum += i
    } 
  }
  return sum;
}

function isNum(n) {
  if (n <= 1) return 0;
  for (let a = 2; a <= (n/2); a++) {
    if (n % a === 0) {
    return false
    } 
  }
  return true
}

console.log(sumPrimes(10));

// soal 14
function smallestCommons(arr) {
  const [min, max] = arr.sort((a,b) => a - b)
  const nf = max - min + 1

  let up = 1;
  for (let a = min; a <= max; a++) {
    up *= a
  }

  for (let multiple = max; multiple <= up; multiple += max){

  let dc = 0;
  for (let i = min; i <= max; i++) {
    if (multiple % i === 0) {
      dc += 1
    }
  }
  if (dc === nf) {
    return multiple
  }
}

}
smallestCommons([1,5]);

// soal 15
function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
  ? (dropElements(arr.slice(i + 1), func, i))
  : arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

// soal 16
function steamrollArray(arr) {
  const flat = [].concat(...arr)
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat
}

steamrollArray([1, [2], [3, [[4]]]]);

//soal 17
function binaryAgent(str) {
let as = [];
 let aa = str.split(' ')
 for (let a = 0; a < aa.length; a++) {
   as.push(String.fromCharCode(parseInt(aa[a], 2)))
 }
  return as.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 
            00100000 01100010 01101111 01101110 01100110 01101001 01110010 
            01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

//soal 18
function truthCheck(collection, pre) {
  return collection.every(elm => elm[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//soal 19
function addTogether() {
  const [aw, ak] = Object.values(arguments)

  if (typeof aw !== "number") {
    return undefined
  }

  const addSecond = (ak) => typeof ak === "number" ? aw +   ak : undefined

  if (ak !== undefined) {
    return addSecond(ak)
  } else {
    return addSecond
  }
}

console.log(addTogether(2)(3));

//soal 20
var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let full = firstAndLast
  this.getFullName = function() {
    return full
  };
  
  this.getFirstName = function() {
    return full.split(' ')[0]
  };

  this.getLastName = function() {
    return full.split(' ')[1]
  };

  this.setFullName = function(aa) {
    full = aa 
  };

  this.setFirstName = function(first) {
    full = first + " " + full.split(' ')[1]
  };

  this.setLastName = function(bb) {
    full = full.split(' ')[0] + ' ' + bb
  };

  return firstAndLast;
};
var bob = new Person('Bob Ross');
bob.getFullName();
// console.log(bob.setFullName("Haskell Curry"));
// console.log(bob.setFirstName("Haskell"));
// console.log(bob.setLastName("Curry"));

//soal 21
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  //rumus  
  // T = 2 * pi * sqrt(r^3/GM); r = earthRadius + avgAlt
  
  arr.map((item) => {
    let p = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM))
    delete item.avgAlt
    item.orbitalPeriod = p
  })
  console.log(arr)
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// JavaScript Algorithms and Data Structures Projects

// soal 1

function palindrome(str) {
  let nilai = [];
  let aa = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

  for (let a = aa.length - 1; a >= 0; a--) {
    nilai.push(aa[a])
  }
    let newNilai = nilai.join('')
    // console.log(aa, newNilai)
  return aa === newNilai ? true : false;
}

console.log(palindrome("My age is 0, 0 si ega ym."));

// soal 2
function convertToRoman(num) {
  let aa = num.toString()
  let bb = aa.split('').reverse()
  let nilai = [];

  const thousands = () => {
    let remove = num % 1000;
    let leg = (num - remove) / 1000;
    // let asek = remove.toString().length;
    for (let a = 0; a < leg; a++) {
       nilai.unshift("M")
    }
  }

  bb.forEach((item, index) => {
  switch (index) {
    case 0:
    return sigle(item);
    case 1:
    return tens(item);
    case 2:
    return hundreds(item)
  }
  })
  thousands();

  function sigle(item) {
    switch(item) {
      case '1':
      return nilai.unshift('I');
      case '2':
      return nilai.unshift('II');
      case '3':
      return nilai.unshift('III');
      case '4':
      return nilai.unshift('IV');
      case '5':
      return nilai.unshift('V');
      case '6':
      return nilai.unshift('VI');
      case '7':
      return nilai.unshift('VII');
      case '8':
      return nilai.unshift('VIII');
      case '9':
      return nilai.unshift('IX');
    }
  }

  function tens(item) {
    switch(item) {
      case '1':
      return nilai.unshift('X');
      case '2':
      return nilai.unshift('XX');
      case '3':
      return nilai.unshift('XXX');
      case '4':
      return nilai.unshift('XL');
      case '5':
      return nilai.unshift('L');
      case '6':
      return nilai.unshift('LX');
      case '7':
      return nilai.unshift('LXX');
      case '8':
      return nilai.unshift('LXXX');
      case '9':
      return nilai.unshift('XC');
    }
  }

  function hundreds(item) {  
    switch(item) {
      case '1':
      return nilai.unshift('C');
      case '2':
      return nilai.unshift('CC');
      case '3':
      return nilai.unshift('CCC');
      case '4':
      return nilai.unshift('CD');
      case '5':
      return nilai.unshift('D');
      case '6':
      return nilai.unshift('DC');
      case '7':
      return nilai.unshift('DCC');
      case '8':
      return nilai.unshift('DCCC');
      case '9':
      return nilai.unshift('CM');
    }  
  }

  console.log(nilai.join(''))
 return nilai.join('');
}

convertToRoman(3999);

// soal 3

function rot13(str) {
  let abjad = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
  let newStr = str.split('')
  let aa = newStr.map((item) => {
    let ab = abjad.indexOf(item)
    if (ab >= 0) {
      return ab
    } else {
      return item
    }
  })

  let bb = aa.map((item) => {
    //cek apakah item number
    if (typeof item !== 'number') {
      return item
    } else if (item < 13) {   //cek apakah item lebih kecil dari 13 jika iya maka tambah 13
      return abjad[item + 13]
    } else {
      return abjad[item - 13]
    }
  })  

  return bb.join('');
}

rot13("SERR PBQR PNZC");

// soal 4
function telephoneCheck(str) {
  let req = /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/

  return req.test(str);
}

telephoneCheck("555-555-5555");

// soal 5

function checkCashRegister(price, cash, cid) {
  
  // buat function kali dan bagi
  let kal = (num) => num * 100;
  let gi = (num) => num / 100;

  let obj = {}

  // foreach laci
  cid.forEach((elm) => {
    obj[elm[0]] = kal(elm[1])
  })

  // kembalian
  let change = kal(cash) - kal(price)

  // return nilai
  let changeObj = { status: "", change: [] }

  // cek apak kembalian lebih besar daripada satuan / rumus yg telah disediakan
  if (change >= 10000 && obj["ONE HUNDRED"] >= 10000) {

    // buat modulus
    let remaind = change % 10000

    // penampung nilai 
    let numOfHundreds = 
      (change - remaind) <= obj["ONE HUNDRED"]
      ? (change - remaind)
      : obj["ONE HUNDRED"]
    
    // console.log(numOfHundreds)
    
    // masukan ke return nilai
    changeObj.change.push(["ONE HUNDRED", gi(numOfHundreds)])

    // kurangi uang di laci dengan kembalian
    obj['ONE HUNDRED'] -= numOfHundreds

    // kurangi variable change
    change = change - numOfHundreds
  }

  // cek apak kembalian lebih besar daripada satuan / rumus yg telah disediakan
  if (change >= 2000 && obj["TWENTY"] >= 2000) {

    // buat modulus
    let remaind = change % 2000

    // penampung nilai 
    let numOfTwenty = 
      (change - remaind) <= obj["TWENTY"]
      ? (change - remaind)
      : obj["TWENTY"]
    
    // console.log(numOfTwenty)
    
    // masukan ke return nilai
    changeObj.change.push(["TWENTY", gi(numOfTwenty)])

    // kurangi uang di laci dengan kembalian / sisa
    obj['TWENTY'] -= numOfTwenty

    // kurangi variable change
    change = change - numOfTwenty
  }

  // cek apak kembalian lebih besar daripada satuan / rumus yg telah disediakan
  if (change >= 1000 && obj["TEN"] >= 1000) {

    // buat modulus
    let remaind = change % 1000

    // penampung nilai 
    let numOfTen = 
      (change - remaind) <= obj["TEN"]
      ? (change - remaind)
      : obj["TEN"]
    
    // console.log(numOfTen)
    
    // masukan ke return nilai
    changeObj.change.push(["TEN", gi(numOfTen)])

    // kurangi uang di laci dengan kembalian / sisa
    obj['TEN'] -= numOfTen

    // kurangi variable change
    change = change - numOfTen
  }

  // cek apak kembalian lebih besar daripada satuan / rumus yg telah disediakan
  if (change >= 500 && obj["FIVE"] >= 500) {

    // buat modulus
    let remaind = change % 500

    // penampung nilai 
    let numOfFive = 
      (change - remaind) <= obj["FIVE"]
      ? (change - remaind)
      : obj["FIVE"]
    
    
    // masukan ke return nilai
    changeObj.change.push(["FIVE", gi(numOfFive)])

    // kurangi uang di laci dengan kembalian / sisa
    obj['FIVE'] -= numOfFive

    // kurangi variable change
    change = change - numOfFive
  }
  
  // cek apak kembalian lebih besar daripada satuan / rumus yg telah disediakan
  if (change >= 100 && obj["ONE"] >= 100) {

    // buat modulus
    let remaind = change % 100

    // penampung nilai 
    let numOfOne = 
      (change - remaind) <= obj["ONE"]
      ? change - remaind
      : obj["ONE"]
    
    // console.log(numOfOne)
    
    // masukan ke return nilai
    changeObj.change.push(["ONE", gi(numOfOne)])

    // kurangi uang di laci dengan kembalian / sisa
    obj['ONE'] -= numOfOne

    // kurangi variable change
    change = change - numOfOne
  }

  // cek apak kembalian lebih besar daripada satuan / rumus yg telah disediakan
  if (change >= 25 && obj["QUARTER"] >= 25) {

    // buat modulus
    let remaind = change % 25

    // penampung nilai 
    let numOfHundreds = 
      change - remaind <= obj["QUARTER"]
      ? change - remaind
      : obj["QUARTER"]
    
    
    // masukan ke return nilai
    changeObj.change.push(["QUARTER", gi(numOfHundreds)])

    // kurangi uang di laci dengan kembalian / sisa
    obj['QUARTER'] -= numOfHundreds

    // kurangi variable change
    change = change - numOfHundreds
  }

  // cek apak kembalian lebih besar daripada satuan / rumus yg telah disediakan
  if (change >= 10 && obj["DIME"] >= 10) {

    // buat modulus
    let remaind = change % 10

    // penampung nilai 
    let numOfHundreds = 
      (change - remaind) <= obj["DIME"]
      ? (change - remaind)
      : obj["DIME"]
    
    // console.log(numOfHundreds)
    
    // masukan ke return nilai
    changeObj.change.push(["DIME", gi(numOfHundreds)])

    // kurangi uang di laci dengan kembalian / sisa
    obj['DIME'] -= numOfHundreds

    // kurangi variable change
    change = change - numOfHundreds
  }

  // cek apak kembalian lebih besar daripada satuan / rumus yg telah disediakan
  if (change >= 5 && obj["NICKEL"] >= 5) {

    // buat modulus
    let remaind = change % 5

    // penampung nilai 
    let numOfHundreds = 
      (change - remaind) <= obj["NICKEL"]
      ? (change - remaind)
      : obj["NICKEL"]
    
    // console.log(numOfHundreds)
    
    // masukan ke return nilai
    changeObj.change.push(["NICKEL", gi(numOfHundreds)])

    // kurangi uang di laci dengan kembalian / sisa
    obj['NICKEL'] -= numOfHundreds

    // kurangi variable change
    change = change - numOfHundreds
  }

   // cek apak kembalian lebih besar daripada satuan / rumus yg telah disediakan
  if (change >= 1 && obj["PENNY"] >= 1) {

    // buat modulus
    let remaind = change % 1

    // penampung nilai 
    let numOfHundreds = 
      (change - remaind) <= obj["PENNY"]
      ? (change - remaind)
      : obj["PENNY"]
    
    // console.log(numOfHundreds)
    
    // masukan ke return nilai
    changeObj.change.push(["PENNY", gi(numOfHundreds)])

    // kurangi uang di laci dengan kembalian / sisa
    obj['PENNY'] -= numOfHundreds

    // kurangi variable change
    change = change - numOfHundreds
  }

  let remainingCID = Object.values(obj).reduce((a,b) => a + b)

  // status 
  if  (remainingCID > 0 && change === 0) {
    changeObj.status = "OPEN"
  } else if (change === 0) {
    changeObj.status = 'CLOSED'
    changeObj.change = cid;
  } else {
    changeObj.status = 'INSUFFICIENT_FUNDS'
    changeObj.change = [];
  }

  // console.log(remainingCID, changeObj)

  return changeObj;
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])














