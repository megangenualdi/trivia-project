import { useNavigate } from "react-router-dom"
import TriviaAPI from "../api/TriviaAPI"

function LoginPage(props) {

  const navigate = useNavigate()

  const handleLogin = async (evt) => {
    evt.preventDefault()

    let loginData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value
    }
    console.log("LOGIN INFO:", loginData)

    const data = await TriviaAPI.login(loginData)
   
    if (data) {
      let profileData = {
        player: data.id,
        achievements: [1],
        results: []}
      const dataTwo = await TriviaAPI.createProfile(profileData)
      if (dataTwo) {
        console.log(dataTwo)
        props.setUser({
          username: data.username,
          id: data.id, 
          profile: dataTwo.id
        })
        navigate('/')
      }
      else { 
        props.setUser({
        username: data.username,
        id: data.id
      })
        console.log("profile already created")
        navigate('/')
      }
    }
  }

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={ handleLogin } method="POST ">
        <label>Username</label>
        <br/>
        <input name="username" placeholder="Enter username"/>
        <br/>
        <label>Password</label>
        <br/>
        <input type="password" name="password" placeholder="Enter password"/>
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage;