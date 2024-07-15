
type QuizProps ={
    currentQuestion:number,
    handleRestart:()=>void,
    handleQuit:()=>void,


}

const QuizMenu = ({currentQuestion,handleRestart,handleQuit}:QuizProps) => {
  return (
    <div className="flex justify-between mb-4">
      <h4>{`${currentQuestion+1}/8`}</h4>

      <div className="space-x-2">
        <button
          onClick={handleRestart}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-md "
        >
          Restart
        </button>
        <button
          onClick={handleQuit}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md"
        >
          Quit
        </button>
      </div>
    </div>
 
  )
}

export default QuizMenu;