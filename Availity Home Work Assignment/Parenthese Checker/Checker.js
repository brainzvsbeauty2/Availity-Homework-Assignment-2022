/**
 * * Exercise 1: You are tasked to write a checker that validates the parentheses of a LISP code. Write a program (in Java or JavaScript) which takes in a string as an input and returns true if all the parentheses in the string are properly closed and nested.
 *
 * ! Questions
 * ? What is a LISP code? Answer: Lines of data filled with parentheses
 * ? Am i only taking parentheses? Answer: N/A
 * ? What is something that takes a item and returns something ? Answer: Function
 * ? What are properly closed and nested parentheses? Answer: () or something like (()) = nested
 * ? What is considered true? Answer: (),(()),((()))
 * ? What is considered false? Answer: ( - missing parentheses or (() = extra parentheses
 * ? How do you tell if all parentheses are properly closed * ? Answer: Must have an opening and close bracket
 * ? How do you tell if all parentheses are nested ? Answer: Parentheses inside of other parentheses
 * ? How to make sure there is a opening parentheses before ? Answer:
 *@param {string} the parameter for the function
 *
 * TODO: Sub Problems
 * *Create a function that takes a string
 * ? How to check each element in a string? - Answer: for loop
 *
 * !Pair Parentheses
 * *If there a pair of parentheses - true
 * *If there are any parentheses left - false
 *
 * !Order of parentheses
 * * return false
 *
 */

let correct = `(defun triple(x) 'Compute three times X."; Inline comments can (*3X))`;
let inCorrect = `)()(defun triple (X)'Compute three times X.'; Inline comments can (*3X)))`;

function validateParentheses(string) {
  const trash = [];
  let stringArray = Array.from(string);
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "(") {
      //adding to trash
      trash.push(stringArray[i]);
    } else if (stringArray[i] === ")") {
      // Checking if there was anything in trash to pop
      //If there wasn't anything in trash to pop the loop would exit
      if (trash.length === 0) {
        return false;
        //removing from trash if there is something there
      } else trash.pop();
    }
  }
  //This checks if the trash is empty and collects that data and stores it into a variable that will be return
  const something = trash.length === 0;
  console.log(something);
  return something;
}

console.log(`Should be true: It's actually ${validateParentheses(correct)}`);
console.log(`Should be false: It's actually ${validateParentheses(inCorrect)}`);
