import { useState } from "react"
import HighScore from "./HighScore"

   
    type StartProps ={
      handleStart:()=>void,
      highscores:number[]

    }
const StartBtn = ({handleStart,highscores}:StartProps) => {
  const[showHighScore,setShowHighScore] = useState(false)

 function showHighscores(){
  setShowHighScore(!showHighScore)

 }
  return (
<div className="w-2/3 p-4 bg-white shadow-md flex flex-col items-center justify-center rounded-2xl start-part">
          <h1 className='my-5 text-3xl'>JavaScript Quiz</h1>
      
        <div className="mb-6 self-start">
        <h3 className='font-bold'>Rules:</h3>
        <ul className='list-decimal ml-8'>
          <li>Each level contains 8 questions.</li>
          <li>Each questions have 4 options.</li>
          <li>Score will only increase if you select right answer first.</li>
          <li>Questions answers are genereted by AI sothere maybe some error.</li>

        </ul>
        </div>
        <div className="flex gap-4 justify-center items-center">
        <button
          onClick={handleStart}
          className=" px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md shadow-blue-900 hover:bg-blue-500"
        >
          Play Quiz
        </button>
        <button onClick={showHighscores} className="bg-green-600 text-white my-4 rounded-xl shadow-md shadow-green-800 px-6 py-3 hover:bg-green-500">
          {showHighScore?'Hide Highscores':"Highscores"}
        </button>
        </div>
        {showHighScore && (<HighScore highscores={highscores}/>)}
        
        </div>
  )
}

export default StartBtn;