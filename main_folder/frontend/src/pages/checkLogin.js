import { Link } from "react-router-dom"

 function CheckLoginPage(props) {

   if (props.username === "") {
     return <p>You are not currently logged in. Please <Link to="/login">login</Link> or <Link to="/signup">signup</Link>.</p>
   }

   return (
     <div>
       { props.actualPage() }
     </div>
   )
 }

 export default CheckLoginPage;