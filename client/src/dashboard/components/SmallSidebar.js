import React, { useState } from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import {AiOutlineClose} from 'react-icons/ai'
import logo from "../assets/images/lutrics-eye-logo.png"
// import { useSelector } from 'react-redux'
// import { toggleSidebarOpen } from '../features/user/userSlice'
// import { useDispatch, } from 'react-redux'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
  // const { isSidebarOpen} = useSelector((store)=> store.user);
  const [show, setShow] = useState(false);

  const toggle=()=>{
    setShow(!show);
  };
  return (
   <Wrapper>
    <div className={'sidebar-container show-sidebar'}>
      <div className='content'>
        <button className='close-btn' onClick={toggle}><AiOutlineClose/></button>
        
          <div className='header'>
          <img src={logo} alt='logo' className='logo' style={{width: '100%'}} />
          </div>
        <NavLinks toggleSidebarOpen={toggle}/>
      </div>
    </div>
   </Wrapper>
  )
}
   
export default SmallSidebar
