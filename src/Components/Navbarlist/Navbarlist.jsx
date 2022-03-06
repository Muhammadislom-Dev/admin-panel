import '../Navbarlist/Navbarlist.css'

const Navbarlist =() =>{
    return(
        <>
         <div className="navbarlist">
           <div className="container">
              <div className="navbarlist-page">
              <h2 className="navbarlist-name">Users</h2>
               <ul className="navbar_list">
                 <li className="navbar_item">
                   <a href="#" className="navbar-link">Notifications</a>   
                 </li>    
                 <li className="navbar_item">
                   <p className="navbar_name">Jaloliddin Esonboyev</p>    
                 </li>
               </ul>      
              </div>
              <div className="navbarlist-box">
                <ul className="navbarlist-title">
                  <li className="navbarlist-items">
                    <a href="#" className="navbarlist-links">All</a>  
                  </li>
                  <li className="navbarlist-items">
                    <a href="#" className="navbarlist-link">Not seen</a>  
                  </li>
                  <li className="navbarlist-items">
                    <a href="#" className="navbarlist-link">Saved</a>  
                  </li>
                  <li className="navbarlist-items">
                    <a href="#" className="navbarlist-link">Blocked</a>  
                  </li>
                </ul>
              </div>
              <div className="navbarlist-button">
                 <form class="navbar-form">
                    <input class="form-control " type="search" placeholder="Name or ID" aria-label="Search" />
                    <button class="navbar-btn" type="submit">Search</button>
                 </form>
                 <ul className="navbarlist_title">
                   <li className="navbarlist_items">
                     <a href="#" className="navbarlist_link">Filters</a>
                    </li>
                    <li className="navbarlist_item">
                     <a href="#" className="navbarlist_links">Only women</a>
                    </li>
                    <li className="navbarlist_item">
                     <a href="#" className="navbarlist_links">Only men</a>
                    </li>
                    <li className="navbarlist_item">
                     <a href="#" className="navbarlist_links">A-Z</a>
                    </li>
                    <li className="navbarlist_item">
                     <a href="#" className="navbarlist_links">Oldest</a>
                    </li>
                  </ul>
              </div>
           </div>    
         </div>
        </>
    )
}
export default Navbarlist;