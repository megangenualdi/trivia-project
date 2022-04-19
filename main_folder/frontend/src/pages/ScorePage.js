import TriviaAPI from "../api/TriviaAPI"
import { useState, useEffect } from "react"

function ScorePage(props) {

  const [results, setResults ] = useState([])

  useEffect (() => {
    loadResults()
  }, [])

  const loadResults = async () => {
    const data = await TriviaAPI.getAllResults()
    console.log(data)
    setResults(data ? data : [])
  }

  const renderResults = () => {
    return results.map((result, index) => {
      return <li>Player: {result.player_id} Points: {result.points }</li>
    })
  }
  return (
    <div>
      <h2>High Score Board</h2>
      <hr />
      <ol className="my-list">
        { renderResults() }
      </ol>
    </div>
  )
}

export default ScorePage;