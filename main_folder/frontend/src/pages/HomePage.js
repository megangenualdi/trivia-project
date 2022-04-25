import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"
import TriviaAPI from '../api/TriviaAPI';


function HomePage(props) {

  const navigate = useNavigate()

  const handleCategory = async (evt) => {
    evt.preventDefault()
    const category = evt.target.elements["select"].value
    console.log(category)
    navigate(`game/${category}`)
  }

   const handleLogout = async () => {
    const data = await TriviaAPI.logout()
    if (data) {
      navigate("/login")
    }
   }

   
  return (
    <div>
      <div id="links">
        <Link class="links" to="/login">Login</Link> | <Link class="links" to="/signup">Sign up</Link> | <Link class="links" to="/profiles">View Players</Link> | <Link class="links" to="/scoreboard">View Scoreboard</Link>
      </div>
      
      <hr/>
      <div id="home-btn" className="d-grid gap-2">
      <Form onSubmit={ handleCategory } method="GET">
      <Form.Select aria-label="Default select example" name="select">
        <option>Select your category</option>
        <option value="random">Trivia Style</option>
        <option value="arts_and_literature">Arts & Literature</option>
        <option value="film_and_tv">Film & TV </option>
        <option value="food_and_drink">Food & Drink</option>
        <option value="general_knowledge">General Knowledge</option>
        <option value="geography">Geography</option>
        <option value="history">History</option>
        <option value="music">Music</option>
        <option value="science">Science</option>
        <option value="society_and_culture">Society & Culture</option>
        <option value="sports_and_leisure">Sports & Leisure</option>
        </Form.Select>
        <br/>
        <Button variant="success" size="lg" type="submit">
          Start the Game!
        </Button>
      </Form>
      <Link to="#" onClick={ handleLogout }>Logout</Link>
      

    </div>
    </div>
  )
}

export default HomePage;