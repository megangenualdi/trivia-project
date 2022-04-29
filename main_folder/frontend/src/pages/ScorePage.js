import TriviaAPI from "../api/TriviaAPI"
import { useState, useEffect } from "react"
import Fact from "../components/Fact"

function ScorePage(props) {

  const [results, setResults ] = useState([])

  useEffect (() => {
    loadResults()
  }, [])

  const loadResults = async () => {
    const data = await TriviaAPI.getAllProfiles()
    console.log(data)
    setResults(data ? data : [])
  }

  const renderResults = () => {
    return results.sort((a, b) => a.total_score < b.total_score ? 1 : -1).map((result, index) => {
      return <li key={index}> {index+1}. Player: <strong>{result.player}</strong>  Points: <strong>{result.total_score }</strong></li>
      
    })
  }

  return (
    <div>
      <div class="page-title" id="highscore">
        <h3><strong>HIGH SCORES</strong></h3>
      </div>
      <br/>
      <ol className="list">
        { renderResults() }
      </ol>
      <Fact />
    </div>
  )
}

export default ScorePage;