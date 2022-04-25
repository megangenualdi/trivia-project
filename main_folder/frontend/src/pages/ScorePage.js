import TriviaAPI from "../api/TriviaAPI"
import { useState, useEffect } from "react"

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
      <div class="page-title">
        <h3><strong>HIGH SCORES</strong></h3>
      </div>
      <div>
      <ol className="list">
        { renderResults() }
      </ol>
      </div>
    </div>
  )
}

export default ScorePage;