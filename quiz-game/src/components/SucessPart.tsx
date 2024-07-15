
import {motion} from 'framer-motion'

type SucessProps ={
    score:number,
    handleRestart:()=>void,
    handleNextLevel:()=>void,
    level:number

}


const SucessPart = ({score,handleRestart,handleNextLevel,level}:SucessProps) => {
  return (
    <motion.div className='sucess-part'>
        <h4 className='p-3 bg-green-100'>Result</h4>
        <h1 className={`text-9xl text-center mt-6 ${score>4?'text-green-600':"text-red-600"}`}>{score/8*100}%</h1>
        <div className="flex justify-center gap-4 my-5">
        <span>{`CORRECT:${score}`}</span>
        <span>{`WRONG: ${8-score}`}</span>
      </div>
        <div className="flex justify-center gap-8">
        <button
          onClick={handleRestart}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md "
        >
          Restart
        </button>
        {level<4 &&( <button 
        onClick={handleNextLevel}
        className="px-4 py-2 bg-lime-500 text-white rounded-lg shadow-md"
        >
          Next
        </button>)}
        </div>
    


    </motion.div>
  )
}

export default SucessPart