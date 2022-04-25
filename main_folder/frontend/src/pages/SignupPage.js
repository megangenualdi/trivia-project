import { useNavigate } from "react-router-dom"
import TriviaAPI from "../api/TriviaAPI"

function SignupPage(props) {

  const navigate = useNavigate()

  const handleSignup = async (evt) => {
    evt.preventDefault()
    
    let signUpData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value
    }
    
    const data = await TriviaAPI.signup(signUpData)
    console.log(data)
    if (data) {
      navigate("/login")
    }
  }
  
  return (
    <div>
      <h4>Sign up to play</h4>
      <form onSubmit= { handleSignup } method="POST ">
        <label>Username</label>
        <br/>
        <input name="username" placeholder="Enter username"/>
        <br/>
        <label>Password</label>
        <br/>
        <input type="password" name="password" placeholder="Enter password"/>
        <br/>
        <button type="submit">Create Player</button>
      </form>
    </div>
  )
}

export default SignupPage;