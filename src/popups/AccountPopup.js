import React from 'react'
import './accountpopup.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function AccountPopup(props) {
  return (props.trigger) ? (
    
    <div className='account-popup'>
        <h1>Account</h1>
        <hr/>
        <br/>
        <div >
            <div><Link style={{"color": "#1F2833"}}  to='/profile'>Profile</Link></div> <br/>
            <div>Settings</div> <br/>
            <div>Görünüm</div> <br/>
            <div><a href='http://localhost:3000/' onClick={async()=> {await axios.post('http://localhost:8000/users/logout');console.log("oturum kapatildi")}} style={{"color": "#1F2833"}}>Oturumu Kapat</a></div>
        </div>
        <br/>

    </div>

  ) : ""
}
