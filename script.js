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



















