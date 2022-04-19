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
      return <li><Link key={ index } to={`/profiles/${profile.id}`}>{profile.profile_text}</Link></li>
    })
  }
  return (
    <div>
      <h2>All Player Profiles</h2>
      <hr />
      <ul className="my-list">
        { renderProfiles() }
      </ul>
    </div>
  )
}

export default AllProfiles;