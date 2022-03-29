import { Link } from 'react-router-dom'
import './Sidebar.scss'

//Images
import Dizipro from '../../assets/img/dd.png'

const Sidebar = () =>{
  return(
     <div className="sidebar">
       <div className="sidebar-home">
          <Link  to="/" > 
            <img src={Dizipro} alt="dddds" />
          </Link >
       </div>
     </div>
  )
}
export default Sidebar