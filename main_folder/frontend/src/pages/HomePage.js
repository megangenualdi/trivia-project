import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"
import TriviaAPI from '../api/TriviaAPI';
import { useState, useEffect } from 'react'
import Fact from '../components/Fact';

function HomePage(props) {

  const navigate = useNavigate()
  // const [fact, setFact] = useState([])

  // useEffect(() => {
  //   loadFact()
  // }, [])

  // const loadFact = async () => {
  //   let data = await TriviaAPI.getFact()
  //   console.log(data.data)
  //   setFact(data.data)
  // }

  const handleCategory = async (evt) => {
    evt.preventDefault()
    const category = evt.target.elements["select"].value
    const int = evt.target.elements["number"].value
    console.log(category)
    navigate(`game/${category}/${int}`)
  }

   const handleLogout = async () => {
    const data = await TriviaAPI.logout()
    if (data) {
      props.setUser([])
      navigate("/login")
    }
   }

   const renderLoginLogout = () => {
     if (props.username) {
       return (
        <Link className="links" to="#" onClick={ handleLogout }>Logout</Link>
       )
     }
     else {
       return (
         <>
           <Link className="links" to="/login">Login</Link> <Link className="links" to="/signup">Sign up</Link>
         </>
        
       )
     }
   }

  return (
    <div>
      <div id="links">
      { renderLoginLogout() } <Link className="links" to="/profiles">View Players</Link> <Link className="links" to="/scoreboard">View Scoreboard</Link>
      </div>
      <hr/>
      <div id="home-btn" className="d-grid gap-2">
      <Form id="game-form" onSubmit={ handleCategory } method="GET">
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
        <Form.Select name="number">
          <option>How many questions?</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="10">10</option>
        </Form.Select>
        <br/>
        <Button id="form-btn" variant="success" size="lg" type="submit">
          Start the Game!
        </Button>
      </Form>
    </div>
   <Fact user={props.user} />
    </div>
  )
}

export default HomePage;