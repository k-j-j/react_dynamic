
import { useLocation} from "react-router-dom";

export default function Notfound(){
  let location = useLocation()
  
  return (
      <div className="about__container">
      <h1>
        Resource not found at {location.pathname}
      </h1>
    </div>
  )
    
}
