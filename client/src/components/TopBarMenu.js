import React from 'react';

let TopBarMenu = (props) => {
  if (props.currentUser) {
    return (
      <div className='menu'>
        <div className='menu-list'>
          <p onClick={() => props.changeCurrentUser(false)} onClick={props.clickHandler} className='homepage' >Sign Out</p>
          <p>Settings</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className='menu'>
        <div className='menu-list'>
          <p onClick={props.clickHandler} className='login' >Sign In</p>
          <p onClick={props.clickHandler} className='createAccount' >Sign Up</p>
          <p>Settings</p>
        </div>
      </div>
    )
  }
}

export default TopBarMenu;