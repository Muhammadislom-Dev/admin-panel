import '../Navbar/Navbar.css';
import Dizipro from '../../assets/img/dizipro.png';
import Dashboard from '../../assets/img/dashboard.svg';
import Person from '../../assets/img/person.png';
import Kartinki from '../../assets/img/kartinki.png';
import Document from '../../assets/img/document.png';
import Sms from '../../assets/img/sms.png';

const Navbar =() =>{
    return(
        <>
         <div className="navbar">
           {/* <div className="container"> */}
                <div className="navbar-page">
                    <img src={Dizipro} alt="" className="navbar-pic" />
                    <ul className="navbar-list">
                      <li className='navbar-item'>
                          <img src={Dashboard} alt="" className="navbar-img" />
                      </li> 
                      <li className='navbar-item'>
                          <img src={Person} alt="" className="navbar-img" />
                      </li> 
                      <li className='navbar-item'>
                          <img src={Kartinki} alt="" className="navbar-img" />
                      </li> 
                      <li className='navbar-item'>
                          <img src={Document} alt="" className="navbar-img" />
                      </li> 
                      <li className='navbar-item'>
                          <img src={Sms} alt="" className="navbar-img" />
                      </li>  
                    </ul>
                </div>
            </div>  
         {/* </div> */}
        </>
    )
}
export default Navbar