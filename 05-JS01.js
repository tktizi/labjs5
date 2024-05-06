// 1.1
function computeAreaOfARectangle(length, width) {
    return length * width;
  }
  var output = computeAreaOfARectangle(4, 8);
  console.log('Task(1.1): ' + output);
  



  // 1.2
  function computeAreaOfACircle(radius) {
    return Math.PI * radius * radius;
  }
  output = computeAreaOfACircle(4);
  console.log('Task(1.2): ' + output);
  





  // 1.3
  function computePower(number, exponent) {
    return Math.pow(number, exponent);
  }
  output = computePower(2, 3);
  console.log('Task(1.3): ' + output);
  




  // 1.4
  function computeSquareRoot(number) {
    return Math.sqrt(number);
  }
  output = computeSquareRoot(9);
  console.log('Task(1.4): ' + output);
  




  // 1.5
  function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length + word2.length + word3.length;
  }
  output = getLengthOfThreeWords('some', 'other', 'word');
  console.log('Task(1.5): ' + output);
  



  
  // 1.6
  function joinArrays(array1, array2) {
    return array1.concat(array2);
  }
  output = joinArrays([1, 2], [3, 4]);
  console.log('Task(1.6): ' + output);
  




  // 1.7
  function getProductOfAllElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
      return 0;
    }
    let product = 1;
    for (let i = 0; i < obj[key].length; i++) {
      product *= obj[key][i];
    }
    return product;
  }
  output = getProductOfAllElementsAtProperty({
    key: [1, 2, 3, 4]
  }, 'key');
  console.log('Task(1.7): ' + output);
  




  // 1.8
  var sumDigits = (num) => {
    var absString = Math.abs(num).toString();
    var sum = 0;
    for (var i = 0; i < absString.length; i++) {
      sum += parseInt(absString[i], 10);
    }
    if (num < 0) {
      sum -= 2 * parseInt(absString[0], 10);
    }
    return sum;
  };
  output = sumDigits(-316);
  console.log('Task(1.8): ' + output);
  




  // 1.9
  function findShortestWordAmongMixedElements(arr) {
    var shortest = '';
    arr.forEach(function (element) {
      if (typeof element === 'string') {
        if (shortest === '' || element.length < shortest.length) {
          shortest = element;
        }
      }
    });
    return shortest;
  }
  output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
  console.log('Task(1.9): ' + output);
  




  // 1.10
  function findSmallestNumberAmongMixedElements(arr) {
    var numbers = arr.filter(element => typeof element === 'number');
    if (numbers.length === 0) {
      return '';
    }
    return Math.min(...numbers);
  }
  output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
  console.log('Task(1.10): ' + output);
  




  // 1.11
  function modulo(number1, number2) {
    if (number2 === 0) {
      return NaN;
    }
    var remainder = Math.abs(number1);
    var divisor = Math.abs(number2);
    while (remainder >= divisor) {
      remainder -= divisor;
    }
    return number1 < 0 ? -remainder : remainder;
  }
  output = modulo(25, 4);
  console.log('Task(1.11): ' + output);
  




  // 1.12
  function mirror(text, interval) {
    var mirroredText = "";
    var currentIndex = 0;
    while ((currentIndex += interval) <= text.length) {
      for (var i = 1; i <= interval; i++) {
        mirroredText += text.charAt(currentIndex - i);
      }
    }
    return mirroredText;
  }
  output = mirror("a short example", 5);
  console.log('Task(1.12): ' + output);
  




  // 1.13
  function detectOutlierValue(numbers) {
    let evenCount = 0;
    let oddCount = 0;
    let evenIndex = 0;
    let oddIndex = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenCount++;
        evenIndex = i;
      } else {
        oddCount++;
        oddIndex = i;
      }
    }
  
    if (evenCount === 1) return evenIndex + 1;
    if (oddCount === 1) return oddIndex + 1;
  }
  output = detectOutlierValue([2, 4, 7, 8, 10]);
  console.log('Task(1.13): ' + output);
  output = detectOutlierValue([1, 10, 1, 1]);
  console.log('Task(1.13): ' + output);
  




  // 1.14
  function findPairForSum(numbers, targetSum) {
    var pair = [];
    for (var i = 0; i < numbers.length - 1; i++) {
      for (var j = i + 1; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === targetSum) {
          pair.push(numbers[i], numbers[j]);
          return pair;
        }
      }
    }
  }
  output = findPairForSum([3, 34, 4, 12, 5, 2], 9);
  console.log('Task(1.14): ' + output);
  




  // 1.15
  function isMirror(string1, string2) {
    var tmp = "";
    var j = 0;
    while (j++ < string2.length) {
      tmp += string2.substring(j, string2.length);
      tmp += string2.substring(0, j);
      if (string1 == tmp)
        return true;
      tmp = "";
    }
    return false;
  }
  output = isMirror("hello world", "orldhello w");
  console.log('Task(1.15): ' + output);
  




  // 1.16
  function BinarySearch(sortedArray, target) {
    var lowerBound = 0;
    var upperBound = sortedArray.length - 1;
    var midIndex;
    while (lowerBound <= upperBound) {
      midIndex = Math.floor((lowerBound + upperBound) / 2);
      if (sortedArray[midIndex] === target) return midIndex;
      else if (sortedArray[midIndex] < target) lowerBound = midIndex + 1;
      else upperBound = midIndex - 1;
    }
    return -1;
  }
  output = BinarySearch([1, 3, 16, 22, 31, 33, 34], 31);
  console.log('Task(1.16): ' + output);
  




  // 1.17
  function IsIsogram(text) {
    var letterCheck = {};
    for (var i = 0; i < text.length; i++) {
      if (letterCheck[text[i]]) return false;
      letterCheck[text[i]] = true;
    }
    return true;
  }
  output = IsIsogram("Berlin");
  console.log('Task(1.17): ' + output);
  



  
  // 1.18
  function PalindromInSentence(sentence) {
    var words = sentence.split(" ");
  
    function isPalindrome(word) {
      for (var i = 0; i < Math.floor(word.length / 2); i++) {
        if (word.charAt(i) !== word.charAt(word.length - i - 1)) {
          return false;
        }
      }
      return true;
    }
    for (var i = 0; i < words.length; i++) {
      if (isPalindrome(words[i])) return true;
    }
    return false;
  }
  output = PalindromInSentence("Hey dud!");
  console.log('Task(1.18): ' + output);