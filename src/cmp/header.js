import {React} from 'react'
import './header.css'

const Header=()=>{
    return(
      <>
      <div className='navbar'>
     <h1>logo</h1>

     <div className='elements'>
          <h3>Home</h3>
          <h3>About</h3>
          <h3>contact</h3>
     </div>
    
      </div>
      </>
    );
}

export default Header;