
type HighscoreProps={
  highscores:number[],
}

const HighScore = ({highscores}:HighscoreProps) => {
  return (
    <div className="w-full bg-white grid grid-cols-3 gap-4">
        {highscores.map((highscore,index)=>(
          <div className="m-4" key={index}>
            <h4>{`Level: ${index+1}`}</h4>
            <h3 className={`text-4xl ${highscore>4?`text-green-600`:`text-red-600`}`}>{(highscore)*100/8}%</h3>
          </div>
        ))}

        
    </div>
  )
}

export default HighScore