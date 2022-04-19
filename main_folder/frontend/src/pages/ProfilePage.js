import { useEffect, useState } from "react"
import TriviaAPI from "../api/TriviaAPI";
import { useParams } from "react-router-dom"

function ProfilePage(props) {

  const [profile, setProfile] = useState(null)

   // params
   const params = useParams()

   // effects
   useEffect(() => {
     loadProfile()
   }, [params.id])

   const loadProfile = async () => {
     let data = await TriviaAPI.getProfileById(params.id)
     console.log(data)
     setProfile(data.map(item => (
       {id: item.id,
        image: item.image,
        profile_text: item.profile_text,
        achievements: item.achievements,
        results: item.results
      }
      )))
    } 

  return (
    <div>
      <h2>Profile Page</h2>
      <hr />
      {/* <img src={profile.image} alt="Profile Pic"/> */}
      <p>{profile}</p>
    </div>
  )
}

export default ProfilePage;