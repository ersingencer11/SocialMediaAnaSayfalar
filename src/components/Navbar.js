import { useState } from "react"
import { Link } from "react-router-dom"
import '../popups/AccountPopup'
import AccountPopup from "../popups/AccountPopup"

function Navbar(){

    const [accountPopup, setAccountPopup] = useState(false)


    return(
        <nav className="item1">

          <div className="logo">
            <Link to='/'><i className="fa-brands fa-medium"></i></Link>
          </div>


          <div className="nav-section">
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/notifications'><i className="fa-regular fa-bell"></i></Link></div>
            <div><Link to='/savedposts'><i className="fa-regular fa-bookmark"></i></Link></div>
            <div>
              <Link to='/stories'>Stories</Link>
            </div>
            
            <br/>
            <hr/>
            <br/>

            <div>
              <a href="writeStory.html"><i className="fa-regular fa-pen-to-square"></i></a>
            </div>
          
          </div>



            <div className="profile">
              <button style={{"color":"#66fcf1","background":"none","border":"none"}} onClick={()=>setAccountPopup(!accountPopup)}><i className="fa-regular fa-user"></i></button>
            </div>

            <AccountPopup trigger={accountPopup} setTrigger={setAccountPopup}></AccountPopup>

          </nav>
    )
}

export default Navbar