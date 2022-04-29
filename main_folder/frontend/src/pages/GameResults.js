import TriviaAPI from "../api/TriviaAPI"
import { useNavigate } from "react-router-dom"
import Fact from "../components/Fact"

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

  return (
    <div>
      <h2 className="page-title">Player Results</h2>
      <h4 id="score">You scored {props.points} points and answered {props.points/100} question(s) correctly. </h4>
     
      <form onSubmit={ handleNewResult } method="POST">
        <input name="points" value={props.points} type="hidden"/>
        <button className="loginsignup"type="submit" id="play-again">Play Again</button>
      </form>
    <Fact />
    </div>
  )
}

export default GameResults;