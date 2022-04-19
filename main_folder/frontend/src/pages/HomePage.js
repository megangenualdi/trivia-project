import { Button, Form } from 'react-bootstrap';
import { Link } from "react-router-dom"


function HomePage(props) {

  // const navigate = useNavigate()

  const handleCategory = async (evt) => {
    evt.preventDefault()

    const category = evt.target.elements.value
    console.log(category)
  }

  return (
    <div>
      <h2>Home Page</h2>
      <hr />
      <div id="home-btn" className="d-grid gap-2">
      <Form onSubmit={ handleCategory } method="GET">
      <Form.Select aria-label="Default select example">
        <option>Select your category</option>
        <option value="random">Random Category</option>
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
      <Link to="/profiles">View Players</Link>
      
    </div>
    </div>
  )
}

export default HomePage;