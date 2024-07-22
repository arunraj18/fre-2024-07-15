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

console.log(longestWord('Web Development Tutorial'));
