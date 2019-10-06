import React from 'react';
import { MdLocationSearching, MdPeople } from "react-icons/md";


let TopBarMenu = (props) => {
  if (props.currentUser) {
    return (
      <div className='menu'>
        <div className='menu-list'>
          <p className="border-line" ></p>
          <p className="dwnOptions" >Find Friends <MdLocationSearching color={'#bfbfbf'} className="dwnIcon" size={20} /></p>
          <p className="dwnOptions">Groups <MdPeople color={'#bfbfbf'} size={20} className="dwnIcon" /> </p>
          <p className="dwnOptions">Events</p>
          <p className="dwnOptions">Settings</p>
        <p className="dwnOptions"onClick={() => location.reload()} >Sign Out</p>
      </div>
      </div >
    )
  } else {
  return (
    <div className='menu'>
      <div className='menu-list'>
        <p className="border-line" ></p>
        <p className="dwnOptions" onClick={props.clickHandler} className='login' >Sign In</p>
        <p className="dwnOptions" onClick={props.clickHandler} className='createAccount' >Sign Up</p>
        <p className="dwnOptions" className="setting">Settings</p>
      </div>
    </div>
  )
}
}

export default TopBarMenu;