


import  { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import StartBtn from './components/StartBtn';
import QuizMenu from './components/QuizMenu';
import SucessPart from './components/SucessPart';
import next_icon from './assets/icons/next.png';
import back_icon from './assets/icons/back.png';

const questions = [
  [
    { question: "What is the result of '2' + 2?", options: ["22", "4", "undefined", "NaN"], answer: "22", explanation: "When a number is added to a string, JavaScript performs string concatenation." },
    { question: "What does the function return: function sum(a, b) { return a + b; } sum(2, 3);", options: ["23", "5", "undefined", "NaN"], answer: "5", explanation: "The function adds the two numbers and returns the sum." },
    { question: "What is the value of the variable: let x = 10; x += 5;", options: ["5", "10", "15", "undefined"], answer: "15", explanation: "The '+=' operator adds the value on the right to the variable on the left." },
    { question: "What is the output: typeof 'Hello'?", options: ["string", "object", "undefined", "number"], answer: "string", explanation: "'typeof' returns the type of the operand, which in this case is a string." },
    { question: "What is the value of y: let y; y = 7;", options: ["undefined", "null", "7", "NaN"], answer: "7", explanation: "The variable y is assigned the value 7 after declaration." },
    { question: "What is the result: '5' - 2?", options: ["3", "52", "NaN", "undefined"], answer: "3", explanation: "The '-' operator converts the string to a number and then performs subtraction." },
    { question: "What does the function return: function multiply(a, b) { return a * b; } multiply(4, 2);", options: ["2", "6", "8", "undefined"], answer: "8", explanation: "The function multiplies the two numbers and returns the product." },
    { question: "What is the output: 3 > 2?", options: ["true", "false", "undefined", "NaN"], answer: "true", explanation: "The '>' operator compares two numbers and returns true if the first is greater than the second." }
  ],
  [
    { question: "What does the function return: function isEven(num) { return num % 2 === 0; } isEven(4);", options: ["true", "false", "undefined", "NaN"], answer: "true", explanation: "The '%' operator returns the remainder. If a number is even, the remainder when divided by 2 is 0." },
    { question: "What is the output of the array method: [1, 2, 3].map(x => x * 2);", options: ["[1, 2, 3]", "[2, 4, 6]", "undefined", "NaN"], answer: "[2, 4, 6]", explanation: "'map()' creates a new array with the results of calling a function on every element." },
    { question: "What does the function return: function greet(name) { return 'Hello, ' + name; } greet('John');", options: ["Hello", "Hello, John", "undefined", "NaN"], answer: "Hello, John", explanation: "The function concatenates 'Hello, ' with the argument passed to it." },
    { question: "What is the output: Boolean(0);", options: ["true", "false", "undefined", "NaN"], answer: "false", explanation: "The 'Boolean()' function converts values to booleans. 0 is considered false." },
    { question: "What does the function return: function square(num) { return num * num; } square(3);", options: ["3", "6", "9", "undefined"], answer: "9", explanation: "The function multiplies the number by itself to return the square." },
    { question: "What is the value of x: let x = '10' / 2;", options: ["5", "10", "undefined", "NaN"], answer: "5", explanation: "The '/' operator converts the string to a number and then performs division." },
    { question: "What does the function return: function add(a, b, c) { return a + b + c; } add(1, 2, 3);", options: ["6", "5", "3", "undefined"], answer: "6", explanation: "The function adds the three numbers and returns the sum." },
    { question: "What is the output: 'JavaScript'.toLowerCase();", options: ["javascript", "JavaScript", "undefined", "NaN"], answer: "javascript", explanation: "'toLowerCase()' converts the string to lowercase." }
  ],
  [
    { question: "What does the function return: function findMax(arr) { return Math.max(...arr); } findMax([1, 2, 3]);", options: ["1", "2", "3", "undefined"], answer: "3", explanation: "The 'Math.max()' function returns the largest number from the given arguments, and the spread operator '...' allows the array to be passed as individual arguments." },
    { question: "What is the output: JSON.stringify({a: 1, b: 2});", options: ["'{a: 1, b: 2}'", "'{\"a\":1,\"b\":2}'", "undefined", "NaN"], answer: "'{\"a\":1,\"b\":2}'", explanation: "'JSON.stringify()' converts a JavaScript object to a JSON string." },
    { question: "What does the function return: function reverseString(str) { return str.split('').reverse().join(''); } reverseString('abc');", options: ["cba", "abc", "undefined", "NaN"], answer: "cba", explanation: "The function splits the string into an array, reverses the array, and joins it back into a string." },
    { question: "What is the value of x: let x = new Date().getFullYear();", options: ["current year", "undefined", "NaN", "string"], answer: "current year", explanation: "'getFullYear()' method returns the year of the specified date according to local time." },
    { question: "What does the function return: function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); } factorial(3);", options: ["1", "3", "6", "undefined"], answer: "6", explanation: "The function calculates the factorial of a number using recursion." },
    { question: "What is the output: [1, 2, 3].find(x => x > 1);", options: ["1", "2", "3", "undefined"], answer: "2", explanation: "'find()' method returns the first element that satisfies the provided testing function." },
    { question: "What does the function return: function isPalindrome(str) { let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ''); return cleaned === cleaned.split('').reverse().join(''); } isPalindrome('A man, a plan, a canal: Panama');", options: ["true", "false", "undefined", "NaN"], answer: "true", explanation: "The function checks if a string is a palindrome by cleaning it and comparing it to its reverse." },
    { question: "What is the output: [1, 2, 3].includes(2);", options: ["true", "false", "undefined", "NaN"], answer: "true", explanation: "'includes()' method checks if an array contains a certain element." }
  ],
  [
    { question: "What does the function return: function flatten(arr) { return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []); } flatten([1, [2, [3, 4], 5]]);", options: ["[1, 2, 3, 4, 5]", "[1, [2, [3, 4], 5]]", "undefined", "NaN"], answer: "[1, 2, 3, 4, 5]", explanation: "The function flattens nested arrays using recursion and reduce method." },
    { question: "What is the output: JSON.parse('{\"a\":1,\"b\":2}');", options: ["{a: 1, b: 2}", "{a: 1, b: '2'}", "undefined", "NaN"], answer: "{a: 1, b: 2}", explanation: "'JSON.parse()' converts a JSON string into a JavaScript object." },
    { question: "What does the function return: function deepEqual(obj1, obj2) { if (obj1 === obj2) return true; if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false; let keys1 = Object.keys(obj1); let keys2 = Object.keys(obj2); if (keys1.length !== keys2.length) return false; for (let key of keys1) { if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) return false; } return true; } deepEqual({a: 1, b: {c: 2}}, {a: 1, b: {c: 2}});", options: ["true", "false", "undefined", "NaN"], answer: "true", explanation: "The function checks for deep equality between two objects, comparing all nested properties." },
    { question: "What is the output: [1, 2, 3].reduce((acc, val) => acc + val, 0);", options: ["6", "0", "undefined", "NaN"], answer: "6", explanation: "'reduce()' method executes a reducer function on each element of the array, resulting in a single output value." },
    { question: "What does the function return: function memoize(fn) { const cache = {}; return function(...args) { const key = JSON.stringify(args); if (cache[key]) { return cache[key]; } const result = fn(...args); cache[key] = result; return result; }; } const add = (a, b) => a + b; const memoizedAdd = memoize(add); memoizedAdd(1, 2); memoizedAdd(1, 2);", options: ["3", "undefined", "NaN", "error"], answer: "3", explanation: "The function memoizes the results of the 'add' function, caching the result of each unique set of arguments to avoid redundant calculations." },
    { question: "What is the output: Object.assign({a: 1}, {b: 2}, {c: 3});", options: ["{a: 1, b: 2, c: 3}", "{a: 1, b: 2}", "undefined", "NaN"], answer: "{a: 1, b: 2, c: 3}", explanation: "'Object.assign()' copies all enumerable own properties from one or more source objects to a target object." },
    { question: "What does the function return: function debounce(fn, delay) { let timeoutID; return function(...args) { clearTimeout(timeoutID); timeoutID = setTimeout(() => fn(...args), delay); }; } const log = () => console.log('Logged!'); const debouncedLog = debounce(log, 1000); debouncedLog(); debouncedLog(); debouncedLog();", options: ["'Logged!'", "undefined", "NaN", "error"], answer: "undefined", explanation: "The function implements debouncing. The 'log' function is delayed and will only be called once after 1000 milliseconds if no other call to 'debouncedLog' is made." },
    { question: "What is the output: (() => { let a = 1; const f = () => { a += 1; return a; }; return f; })()();", options: ["2", "1", "undefined", "NaN"], answer: "2", explanation: "The immediately invoked function expression (IIFE) returns a function 'f' that increments 'a' and returns the result. 'a' is incremented from 1 to 2." }
  ],
  [
    { question: "What does the function return: function throttle(fn, limit) { let lastFunc; let lastRan; return function(...args) { const context = this; if (!lastRan) { fn.apply(context, args); lastRan = Date.now(); } else { clearTimeout(lastFunc); lastFunc = setTimeout(function() { if ((Date.now() - lastRan) >= limit) { fn.apply(context, args); lastRan = Date.now(); } }, limit - (Date.now() - lastRan)); } }; } const log = () => console.log('Throttled!'); const throttledLog = throttle(log, 2000); throttledLog(); throttledLog(); throttledLog();", options: ["'Throttled!'", "undefined", "NaN", "error"], answer: "undefined", explanation: "The function implements throttling. The 'log' function will be executed at most once every 2000 milliseconds, and subsequent calls within this time frame will be ignored." },
    { question: "What is the output: (function() { var a = b = 3; })(); typeof a; typeof b;", options: ["'undefined' and 'number'", "'number' and 'number'", "'undefined' and 'undefined'", "'number' and 'undefined'"], answer: "'undefined' and 'number'", explanation: "In the IIFE, 'var a = b = 3;' declares 'a' as a local variable but assigns 'b' to the global scope. 'typeof a' is 'undefined' outside the IIFE, while 'typeof b' is 'number'." },
    { question: "What does the function return: function curry(f) { return function(a) { return function(b) { return f(a, b); }; }; } const sum = (a, b) => a + b; const curriedSum = curry(sum); curriedSum(1)(2);", options: ["3", "undefined", "NaN", "error"], answer: "3", explanation: "The function 'curry' transforms a binary function into a series of unary functions, allowing the arguments to be passed one at a time." },
    { question: "What is the output: Promise.resolve().then(() => console.log('A')).then(() => console.log('B')); console.log('C');", options: ["C A B", "A B C", "A C B", "C B A"], answer: "C A B", explanation: "The synchronous 'console.log('C')' executes first, followed by the microtasks 'then()' calls logging 'A' and 'B'." },
    { question: "What is the output: let x = 1; function func() { console.log(x); let x = 2; } func();", options: ["undefined", "1", "2", "error"], answer: "error", explanation: "A 'ReferenceError' is thrown because 'let' declarations are not hoisted in the same way as 'var', creating a temporal dead zone." },
    { question: "What is the output: async function async1() { console.log('async1 start'); await async2(); console.log('async1 end'); } async function async2() { console.log('async2'); } console.log('script start'); async1(); console.log('script end');", options: ["script start async1 start async2 script end async1 end", "script start async1 start script end async2 async1 end", "script start script end async1 start async2 async1 end", "async1 start async2 async1 end script start script end"], answer: "script start async1 start async2 script end async1 end", explanation: "The synchronous code runs first, then 'async1' logs 'async1 start', awaits 'async2' which logs 'async2'. After the synchronous code completes, 'async1 end' is logged." },
    { question: "What does the function return: function* generator() { yield 1; yield 2; yield 3; } const gen = generator(); [...gen];", options: ["[1, 2, 3]", "[1, 2]", "[1, 2, 3, 4]", "error"], answer: "[1, 2, 3]", explanation: "The generator function 'yield's values one at a time, and the spread operator '[...]' collects all yielded values into an array." },
    { question: "What is the output: const a = {}; const b = {key: 'b'}; const c = {key: 'c'}; a[b] = 123; a[c] = 456; console.log(a[b]);", options: ["123", "456", "undefined", "error"], answer: "456", explanation: "Objects as keys are converted to strings. Both 'b' and 'c' are converted to '[object Object]', so the second assignment overwrites the first." }
  ]
  
];




const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const[score,setScore] = useState(0);
  const[currentLevel,setCurrentLevel] = useState(0);
  const[highscores,setHighscores] = useState([0,0,0,0,0]); 
  const[showSucess,setShowSucess]= useState(false);
 

  const handleAnswerClick = (option: string) => {
    setSelectedAnswer(option);
    setShowExplanation(true);
    if(option==questions[currentLevel][currentQuestion].answer){
      setScore(score+1);
    }
  };

  const handleStart = () => {
    setIsStarted(true);
    // setTimer(30);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleQuit = () => {
    setIsStarted(false);
  };

  const handleRestart = () => {
    // setTimer(30);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0)
    setShowSucess(false)
  };
  const handleNextQ=()=>{
    if(currentQuestion< questions[currentLevel].length-1){

    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setHighscores(prevScores => {
      const newScores = [...prevScores];
      if (score > newScores[currentLevel]) {
        newScores[currentLevel] = score;
      }
      return newScores;
    });
  }else{
    setShowSucess(true);
    setSelectedAnswer(null);
    setShowExplanation(false);


  }
  }
  const handleNextLevel=()=>{
    if(currentLevel<questions.length-1){
      setCurrentLevel(currentLevel+1)
      setCurrentQuestion(0)
      setScore(0)
      setShowSucess(false)


    }

  }
  

  const current = questions[currentLevel][currentQuestion];

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">

      {!isStarted ? (
        <>
        <StartBtn highscores={highscores} handleStart={handleStart}/>
        </>

      ) : (
        <>
         {isStarted && ( 
      <div className="flex justify-between m-4 items-center gap-8">
      <h3 className='text-4xl text-blue-900 font-extrabold'>{`Level: ${currentLevel+1}`}</h3>
      <div className="">
            <button
        className={`mx-2 bg-gray-300 p-2 rounded-xl ${currentLevel===0 && "opacity-50 pointer-events-none"}`}
        onClick={()=>{
          if(currentLevel>0){
          setCurrentLevel(currentLevel-1);
          setCurrentQuestion(0);
          setScore(0);
          }
        }}
        
        >
          <img src={back_icon} alt='' width={30}/> {''}
        </button>
        <button   className={`mx-2 bg-gray-300 p-2 rounded-xl ${currentLevel===4 && "opacity-50 pointer-events-none"}`}
            onClick={()=>{
              if(currentLevel<4){
              setCurrentLevel(currentLevel+1);
              setCurrentQuestion(0);
              setScore(0);
              }
            }}
        >
          <img src={next_icon} alt='' width={30}/> {''}
        </button>
      
      </div>
      </div>
      )}
        <main className="w-full h-1/4 max-w-2xl bg-white p-6 rounded-lg shadow-lg">
   

          {showSucess?(<SucessPart level={currentLevel} handleNextLevel={handleNextLevel} handleRestart={handleRestart} score={score}/>):(
            <>
          <QuizMenu currentQuestion={currentQuestion} handleQuit={handleQuit} handleRestart={handleRestart}/>
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xl font-semibold mb-4">{current.question}</div>
            <div className="grid grid-cols-2 gap-4">
              {current.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerClick(option)}
                  className={`px-4 py-2 border rounded-lg ${
                    selectedAnswer === option
                      ? option === current.answer
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-4 p-4 bg-gray-100 border rounded-lg"
              >
                <div className="text-md">{current.explanation}</div>
                {currentQuestion < questions[currentLevel].length && (
                  <button
                    onClick={handleNextQ}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
                  >
                    Next Question
                  </button>
                )}
                {/* {currentQuestion === questions.length - 1 && (
                  <button
                    onClick={handleStart}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md"
                  >
                    Restart Quiz
                  </button>
                )} */}
              </motion.div>
            )}
          </motion.div>
          </>
          )}
        </main>
        </>
      )}
    </div>
    </>
  );
};

export default App;

