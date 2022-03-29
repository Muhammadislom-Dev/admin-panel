import './Sidebar.scss'

//Images
import Dizipro from '../../assets/img/Dizipro.svg'
import Home from '../../Lib/Svgs/Home'
import Document from '../../Lib/Svgs/Document'

const Sidebar =() =>{
    return(
        <div className="sidebar">
            <div className="sidebar-home">
                <img src={Dizipro} alt="" className='sidebar-img' />
                <ul className="sidebar-list">
                   <li className="sidebar-item">
                     <Home />   
                   </li>
                   <li className="sidebar-item">
                     <Document />   
                   </li>     
                </ul>  
            </div>
        </div>
    )
}
export default Sidebar