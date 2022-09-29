import { Link } from "react-router-dom"


export const Navbar = () => {


    return (
         <div>
            <Link to="/cars"><h1>CARS</h1></Link>
            <Link to="/bikes"><h1>BIKES</h1></Link>
            <Link to="/mobiles"><h1>MOBILES</h1></Link>
         </div>
    )}