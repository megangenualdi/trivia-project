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
      <h4 id="login"><strong>Sign up to play</strong></h4>
      <hr/>
      <form id="login-form" onSubmit= { handleSignup } method="POST ">
        <label><h4><strong>Username</strong></h4></label>
        <br/>
        <input name="username" placeholder="Enter username"/>
        <br/>
        <label><h4><strong>Password</strong></h4></label>
        <br/>
        <input type="password" name="password" placeholder="Enter password"/>
        <br/>
        <button className="loginsignup" type="submit">Create Player</button>
      </form>
    </div>
  )
}

export default SignupPage;