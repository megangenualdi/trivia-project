import { useEffect, useState } from "react"
import TriviaAPI from "../api/TriviaAPI";
import { useParams, useNavigate } from "react-router-dom"

function ProfilePage(props) {

  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

   // params
   const {id} = useParams()

   // effects
   useEffect(() => {
     loadProfile()
   }, [id])

   const loadProfile = async () => {
     let data = await TriviaAPI.getProfileById(id)
     setProfile(data)
    } 

    const renderProfileDetails = () => {
      if (profile.results.length === 1) {
        let data = TriviaAPI.edit(profile.id, {achievements: ["1", "2"]})
      }
      if (profile.results.length === 5) {
        let dataTwo = TriviaAPI.edit(profile.id, {achievements:["1", "2", "3"]})
      }
      if (profile.results.length === 10) {
        let dataThree = TriviaAPI.edit(profile.id, {achievements:["1", "2", "3", "4"]}) 
      }
      return (
        <div>
           <img id="profile-image" src={profile.image} alt="profile pic"/>
           <h4>{profile.player}</h4>
          <div id="about-player">
            <h5><strong>About Player:</strong></h5>
            <p>{profile.profile_text}</p>
          </div>
          <div id="results-div">
            <h5><strong>Total Score:</strong></h5>
          <h2>{profile.total_score}</h2>
          </div>
        </div>
      )
    }
    const renderAchievements = () => {
      return profile.achievement_info.map((achievement, index) => {
        return (<li class="image-wrap" key={index}>
          <img class="a-image" src={achievement.image} />
          <p class="a-image-des">{achievement.description}</p>
          <p>{achievement.title}</p>
        </li>)
        
      })
    }

    const renderEdit = () => {
      if (profile.player === props.username) {
        return (
          <form onSubmit={ goToEdit }><button id="edit-btn" type="submit" >Edit</button>
          </form>
        )
      }
    }

    const goToEdit = () => {
      navigate(`edit/`)
    }
  return (
    <div>
      <div class="page-title"><h2>Profile Page</h2></div>
    <br/>
      <div class="tape"></div>
      <div id="paper">
        <div id="inside-paper">{ profile && renderEdit() }
          { profile && renderProfileDetails() }
      <h5><strong>Achievements:</strong></h5>
      <ul>
        { profile && renderAchievements() }
      </ul>
      
        </div>
      </div>
    </div>
  )
}

export default ProfilePage;