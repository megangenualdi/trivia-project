import TriviaAPI from "../api/TriviaAPI"
import { useNavigate } from "react-router-dom"

function GameResults(props) {

  const navigate = useNavigate()

  const handleNewResult = async (evt) => {
    evt.preventDefault()

    const resultData = {
      player_id: 1,
      correct_answers: evt.target.elements["points"].value/100,
      points: evt.target.elements["points"].value
    }
    
    const data = await TriviaAPI.newResult(resultData)

    if (data) {
      navigate(`/`)
    }
  }

  return (
    <div>
      <h2>Player Results</h2>
      <p>You scored {props.points}</p>
      <form onSubmit={ handleNewResult } method="POST">
        <input name="points" value={props.points} type="hidden"/>
        <button type="submit">Play Again</button>
      </form>

    </div>
  )
}

export default GameResults;