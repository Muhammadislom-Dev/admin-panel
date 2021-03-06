import './Sidebar.scss'
import { Link } from 'react-router-dom'

//Images
import Home from '../../Lib/Svgs/Home'
import Document from '../../Lib/Svgs/Document'
import Dizipro from '../../assets/img/dd.png'
import Person from '../../Lib/Svgs/Person'
import Scorol from '../../Lib/Svgs/Scorol'
import Message from '../../Lib/Svgs/Message'

const Sidebar = () =>{

  const handleAddClass = (evt) =>{
    const links = document.querySelectorAll('.sidebar__link-active');
    links.forEach(link =>{
     link.classList.remove('sidebar__link-active')
    })
    evt.currentTarget.classList.add('sidebar__link-active')
  }

  return(
     <div className="sidebar">
       <div className="sidebar-home">
          <Link className='sidebar-logo' to="/"><img src={Dizipro} alt="" className="sidebar-img" /></Link>
          <ul className="sidebar__list">
            <li className='sidebar__item'>
              <Link className='sidebar__link'
                onClick={handleAddClass} to="/"> 
                  <span className='sidebar__link-item '>
                    <Home />
                  </span> 
              </Link>
            </li>
            <li className='sidebar__item'>
              <Link className='sidebar__link'
                onClick={handleAddClass} to="/person"> 
                  <span className='sidebar__link-item '>
                    <Person />
                  </span> 
              </Link>
            </li>
            <li className='sidebar__item'>
              <Link className='sidebar__link'
                onClick={handleAddClass} to="/message"> 
                  <span className='sidebar__link-item '>
                    <Message />
                  </span> 
              </Link>
            </li>
            <li className='sidebar__item'>
              <Link className='sidebar__link'
                onClick={handleAddClass} to="/document"> 
                  <span className='sidebar__link-item '>
                    <Document />
                  </span> 
              </Link>
            </li>
            <li className='sidebar__item'>
              <Link className='sidebar__link'
                onClick={handleAddClass} to="/scorol"> 
                  <span className='sidebar__link-item '>
                    <Scorol />
                  </span> 
              </Link>
            </li>
          </ul>
       </div>
     </div>
  )
}
export default Sidebar