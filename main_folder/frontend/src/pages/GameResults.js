import TriviaAPI from "../api/TriviaAPI"
import { useNavigate } from "react-router-dom"

function GameResults(props) {

  const navigate = useNavigate()

  const handleNewResult = async (evt) => {
    evt.preventDefault()
   
    const playerProfiles = await TriviaAPI.getAllProfiles()
    let profile = playerProfiles.filter(function (data) {
      return data.player === `${props.user}`
    }).map(function (profile) {
      return profile
    })

    const resultData = {
      player_id: profile[0].id,
      correct_answers: evt.target.elements["points"].value/100,
      points: evt.target.elements["points"].value
    }
    
    const data = await TriviaAPI.newResult(resultData)

    if (data) {
      navigate(`/`)
    }
  }

  const renderTriviaInfo = () => {
    props.trivia.map((info, index) => {
      return (
        <div key={index}>
          <p>Question {index}: {info.question}</p>
          <p>Answer: {info.answer}</p>
        </div>
      )
    })
  }

  return (
    <div>
      <h2 className="page-title"><strong>Player Results</strong></h2>
      <p>You scored {props.points} and answered {props.points/100} questions correctly. {props.user} </p>
      { renderTriviaInfo() }
      <form onSubmit={ handleNewResult } method="POST">
        <input name="points" value={props.points} type="hidden"/>
        <button type="submit" id="play-again">Play Again</button>
      </form>

    </div>
  )
}

export default GameResults;