import TriviaAPI from "../api/TriviaAPI"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Fact from "../components/Fact"

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
      return <Link className="baby-div" to={`/profiles/${profile.id}`}>{profile.player}</Link>
    })
  }
  return (
    <div>
      <div class="page-title"><h2>Player Profiles</h2></div>
      <hr />
      <div className="my-list">
        { renderProfiles() }
      </div>
      <Fact />
    </div>
  )
}

export default AllProfiles;