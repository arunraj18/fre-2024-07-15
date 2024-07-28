//1.Write a JavaScript function that reverse a number

function reverseNum(num){
    let ans = "";

    while(num){
        ans += num%10
        num = Math.floor(num/10)
    }
    return parseInt(ans);
}
//console.log(reverseNum(1234));

/*Write a JavaScript function that checks whether a passed string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run.*/

function isPalindrome(word){
    let ans = "";
    for(let i = word.length-1; i>=0; i--){
        ans += word[i];
        }
    return ans === word;
}
//console.log(isPalindrome("madam"));

/* Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g */

function combinations(word){
    let ans = [];
    for(let i = 0; i < word.length ; i++){
        var combi = "";
        for(j = i ; j < word.length; j++){
            combi += word[j];
            ans.push(combi);
        }
    
    }
    return ans;
}

//console.log(combinations("dog"));

/*Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string*/

function sorted(str){
    return str.split("").sort().join("");
}

//console.log(sorted("webmaster"));

/*Write a JavaScript function that accepts a string as a parameter and converts the first letter of
each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox '*/

function capitalizeFirstLetter(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}

//console.log(capitalizeFirstLetter("the quick brown fox"));

/*Write a JavaScript function that accepts a string as a parameter and find the longest word
within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'*/

function longestWord(str) {
    let words = str.split(" ");
    let ans = "";
    for (let i = 0; i < words.length; i++) {
        if(words[i].length > ans.length){
            ans = words[i];
        }
    }
    return ans;
}

//console.log(longestWord('Web Development Tutorial'));

/*Write a JavaScript function that accepts a string as a parameter and counts the number of
vowels within the string. 
Example string: 'The quick brown fox' 
Expected Output: 5*/

function vowelCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' || str.charAt(i) == 'E' || str.charAt(i) == 'I' || str.charAt(i) == 'O' || str.charAt(i) == 'U'){
            count += 1;
        }
    }
    return count;
}

//console.log(vowelCount('The quick brown fox'));

/*Write a JavaScript function that accepts a number as a parameter and check the number is
prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
divisors other than 1 and itself*/

function isPrime(num) {
    for(let i = 2 ; i < Math.sqrt(num) ; i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

//console.log(isPrime(23));

/*Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string,
and undefined*/

function type(arg) {
    return typeof(arg);
}

//console.log(type(23));

/*10)Write a JavaScript function which returns the n rows by n columns identity matrix*/

function identityMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        
        matrix.push(row);
    }
    return matrix;
}

//console.log(identityMatrix(3));

/*11) Write a JavaScript function which will take an array of numbers stored and find the second
lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4*/

function secondLow(nums) {
    nums.sort()
    return [nums[1], nums[nums.length - 2]] ;
}

//console.log(secondLow([1,2,3,4,5]));

/*12) Write a JavaScript function which says whether a number is perfect*/

function perfectNum(num) {
    let temp = 0;
    for(let i = 1 ; i < num/2 + 1; i++){
        if(num%i == 0){
            temp += i;
        }
    }
    return temp == num;
}

//console.log(perfectNum(7));

/*13) Write a JavaScript function to compute the factors of a positive integer*/

function factors(num) {
    let fact = [];
    for(let i = 1 ; i < (num) + 1 ; i++){
        if(num%i == 0){
            fact.push(i);
        }
    }
    return fact;
}

//console.log(factors(12));

/*14)Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1*/

function amountToCoins(amount, coins) {
    let result = [];

    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            result.push(coins[i]);
        }
    }

    return result;
}

//console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

/*15)Write a JavaScript function to compute the value of bn where n is the exponent and b is the
bases. Accept b and n from the user and display the result*/

function computePower(base, exponent) {
    return Math.pow(base, exponent);
}
//console.log(computePower(4, 3));



/*16)Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg"*/

function unique(str) {
    const set = new Set();
    for(let i = 0; i < str.length; i++){
        set.add(str.charAt(i));
    }
    
    return Array.from(set).join('');
    

}

//console.log(unique("thebrownfoxjumpsovercat"));

/*17)Write a JavaScript function to get the number of occurrences of each letter in specified string*/

function countLetterOccurrences(str) {
    const occurrences = {};

    for (let char of str) {
        if (char.match(/[a-zA-Z]/)) {
            char = char.toLowerCase();
            
            if (occurrences[char]) {
                occurrences[char]++;
            } else {
                occurrences[char] = 1;
            }
        }
    }

    return occurrences;
}

//console.log(countLetterOccurrences("Hello, World!"));

/*18)Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds
the desired value*/

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle;
        } 

        if (arr[middle] > target) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}

//console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 7)); // Output: 3


/*19)Write a JavaScript function that returns array elements larger than a number*/

function filterLargerThan(arr, number) {
    return arr.filter(element => element > number);
}

//console.log(filterLargerThan([1, 5, 8, 12, 20], 10)); // Output: [12, 20]



/*20)Write a JavaScript function that generates a string id (specified length) of random characters.
Sample   character   list:
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"*/

function generateRandomId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = '';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }

    return result;
}

//console.log(generateRandomId(10));

/*21) Get All Possible Subsets with a Fixed Length */
function getSubsets(array, length) {
    const result = [];

    function generateSubset(start, subset) {
        if (subset.length === length) {
            result.push([...subset]);
            return;
        }

        for (let i = start; i < array.length; i++) {
            subset.push(array[i]);
            generateSubset(i + 1, subset);
            subset.pop();
        }
    }

    generateSubset(0, []);
    return result;
}

//const array = [1, 2, 3];
//const subsetLength = 2;
//console.log(getSubsets(array, subsetLength));

/*22) Count Occurrences of a Letter in a String */
function countOccurrences(str, letter) {
    return Array.from(str).filter(char => char === letter).length;
}

//console.log(countOccurrences('microsoft.com', 'o'));

/*23) Find the First Non-Repeated Character */

function firstNonRepeatedCharacter(str) {
    const charCount = {};
    
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

//console.log(firstNonRepeatedCharacter('abacddbec'));


/*24)  Apply Bubble Sort Algorithm */
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) { // For descending order
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduce the range for optimization
    } while (swapped);

    return arr;
}

//25) JavaScript function to return the longest country name:

function longestCountryName(countries) {
    if (!countries || countries.length === 0) return null;

    return countries.reduce((longest, country) => 
        country.length > longest.length ? country : longest, "");
}

//console.log(longestCountryName(["Australia", "Germany", "United States of America"]));
// Expected output: "United States of America"

//26) JavaScript function to find the longest substring without repeating characters:

function longestUniqueSubstring(str) {
    let seen = new Map();
    let start = 0;
    let maxLength = 0;
    let startOfMax = 0;

    for (let end = 0; end < str.length; end++) {
        if (seen.has(str[end])) {
            start = Math.max(seen.get(str[end]) + 1, start);
        }
        seen.set(str[end], end);
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            startOfMax = start;
        }
    }

    return str.substring(startOfMax, startOfMax + maxLength);
}

//console.log(longestUniqueSubstring("abcabcbb"));
// Expected output: "abc"

//27) JavaScript function to return the longest palindrome in a given string:

function longestPalindrome(s) {
    if (s.length < 1) return "";

    let start = 0, end = 0;

    function expandAroundCenter(s, left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        let len1 = expandAroundCenter(s, i, i);
        let len2 = expandAroundCenter(s, i, i + 1);
        let len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

//console.log(longestPalindrome("bananas"));
// Expected output: "anana"

//28) JavaScript program to pass a function as a parameter:

function greet(name) {
    return `Hello, ${name}!`;
}

function processUserInput(callback) {
    let name = prompt("Please enter your name.");
    alert(callback(name));
}

//processUserInput(greet);

//29) JavaScript function to get the function name:

function getFunctionName(fn) {
    return fn.name;
}

function exampleFunction() {
    console.log("This is an example function.");
}

//console.log(getFunctionName(exampleFunction));
// Expected output: "exampleFunction"








