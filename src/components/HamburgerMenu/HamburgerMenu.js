import React from 'react';
import './HamburgerMenu.css';



const HamburgerMenu = ({toggleMenu}) => {
    

    return (
        <>
        
        <div className='menu' onClick ={toggleMenu} >
            <div className ='menu-bar'/>
            <div className ='menu-bar'/>
            <div className ='menu-bar'/>
        </div>
       
        </>
    )
}

export default HamburgerMenu;
   