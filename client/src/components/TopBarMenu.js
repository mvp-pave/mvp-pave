import React from 'react';

let TopBarMenu = (props) => {
  return (
    <div className='menu'>
      <div className='menu-list'>
        <p onClick={props.clickHandler} className='login' >Sign In</p>
        <p onClick={props.clickHandler} className='createAccount' >Sign Up</p>
        <p onClick={() => props.changeCurrentUser(false)} onClick={props.clickHandler} className='homepage' >Sign Out</p>
        <p>Settings</p>
      </div>
    </div>
  )
}

export default TopBarMenu;