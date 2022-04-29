import { useState, useEffect } from 'react'
import TriviaAPI from '../api/TriviaAPI'

const Fact = (props) => {

  // const [user, setUser] = useState([])
  const [fact, setFact] = useState([])

  useEffect(() => {
    loadFact()
  }, [])

  const loadFact = async () => {
    let data = await TriviaAPI.getFact()
    console.log(data.data)
    setFact(data.data)
  }

  // const favoriteFact async () => {

  // }

  return (
    <div id="fact">
      {/* <form method="PATCH" onSubmit={ favoriteFact }>
        <button type="submit">Favorite</button>
      </form> */}
    <h3>{fact.slice(9, -2)}</h3>
  </div>
  )
}

export default Fact;