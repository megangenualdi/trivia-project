import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import TriviaAPI from "../api/TriviaAPI"

function EditProfile(props) {
  
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

  const renderImage = () => {
     return (
         <img id="profile-image" src={profile.image} alt="avatar" />    
     )
  } 

  // const renderText = () => {
  //   return (
  //     <textarea name="description" rows="5" cols="40">{profile.profile_text}</textarea>
  //   )
  // }

  const updateProfile = async (evt) => {
    evt.preventDefault()
    
    let image_info = ""
    let text_info = ""

    if (evt.target.elements["image"].value === "") {
      image_info += profile.image
    }
    else {
      image_info += evt.target.elements["image"].value
    }

    if (evt.target.elements["description"].value === "") {
      text_info += profile.profile_text
    }
    else {
      text_info += evt.target.elements["description"].value
    }

    const updateInfo = {
      image: image_info,
      profile_text: text_info,
    }

    console.log("data", updateInfo)

    const data = await TriviaAPI.edit(profile.id, updateInfo)

    if (data) {
      console.log("RECEIVED update:", data)
      
    }
  }

  const deleteProfile = async () => {
    let data = await TriviaAPI.delete(props.id)
    if (data) {
      console.log("Account deleted")
      navigate('/signup')
    }
  }

  return (
    <div>
      <div class="page-title"><h2>Edit Profile</h2></div>
      <p>{ props.id }</p>
    <br/>
    <div id="paper">
      { profile && renderImage() }
      <form method="PATCH" onSubmit={ updateProfile }>
        <label>Choose a new profile picture:</label>
        <br/>
        <input name="image" placeholder="Enter image url..." />
        <br/>
        <label>Edit 'About Player' section:</label>
        <br/>
        <textarea name="description" rows="5" cols="40"></textarea>
        <br/>
        <button id="update" type="submit">Update Profile</button>
        </form>
        <form method="DELETE" onSubmit={ deleteProfile }><button id="delete" type="submit">Delete Profile</button>
        </form>
        <form>
          <button id="back-btn" type="submit">Return to Profile Page</button>
        </form>
        
    </div>
    </div>
  )
}

export default EditProfile;