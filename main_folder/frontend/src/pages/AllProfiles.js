import TriviaAPI from "../api/TriviaAPI"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function AllProfiles(props) {

  const [profiles, setProfiles ] = useState([])

  useEffect (() => {
    loadProfiles()
  }, [])

  const loadProfiles = async () => {
    const data = await TriviaAPI.getAllProfiles()
    setProfiles(data ? data : [])
  }

  const renderProfiles = () => {
    return profiles.map((profile, index) => {
      return <li key={ index }><Link to={`/profiles/${profile.id}`}>{profile.player}</Link></li>
    })
  }
  return (
    <div>
      <div class="page-title"><h2><strong>Player Profiles</strong></h2></div>
      
      <hr />
      <ul className="my-list">
        { renderProfiles() }
      </ul>
    </div>
  )
}

export default AllProfiles;