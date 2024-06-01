import React from 'react'
import '../Style/Header.css'
import header_logo from '../img/Logo.png'
import Hamburger from 'hamburger-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    const [isButton, setButton] = useState(false)
    const [isContact, setContact] = useState(null)


    const MobileModal =()=>{
    setButton(!isButton)
    }
    const ContactModal = ()=>{
        setContact(!isContact)
    }
    const ScTop = () => {
        window.scrollTo(0, 0);
    }
    const handleNavClick = () => {
        MobileModal();
        ScTop();
    };
    return (
        <header>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-logo'>
                        <img src={header_logo} alt="foto" />
                    </div>
                    <div className='header-nav'>
                        <nav>
                            <NavLink onClick={ScTop} to="/">
                                Bosh sahifa
                            </NavLink>
                            <NavLink onClick={ScTop} to="/AboutUs">
                                 Biz haqimizda
                            </NavLink>
                            <NavLink onClick={ScTop} to="/Service">
                                Xizmatlar
                            </NavLink>
                            <NavLink onClick={ScTop} to="/Portfolio">
                            Portfolio
                            </NavLink>
                        </nav>
                        <div className='header-nav__line'></div>
                        <div className='header-btn'>
                            <select name="" id="">
                                <option className='header-value' value="val1">Uzb</option>
                                <option className='header-value' value="val2" selected>Rus</option>
                                <option className='header-value' value="val3">Eng</option>
                            </select>
                            <button onClick={ContactModal} className='header-btn__contact'>
                                Bog`lanish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                            </button>
                        </div>
                    </div>
                    <div className='Mobile' onClick={MobileModal}>
                        <Hamburger toggled={isButton} toggle={setButton}  color='white'/>
                    </div>
                    <div className={`mobile-modal ${isButton ? 'db' : ''}`}>
                        <div className='mobile-modal-header'>
                            <img src={header_logo} alt="" />
                        </div>
                        <div className='mobile-main'>
                        <nav>
                        <NavLink onClick={handleNavClick} to="/">
                                Bosh sahifa
                            </NavLink>
                            <NavLink onClick={handleNavClick} to="/AboutUs">
                                 Biz haqimizda
                            </NavLink>
                            <NavLink onClick={handleNavClick} to="/Service">
                                Xizmatlar
                            </NavLink>
                            <NavLink onClick={handleNavClick} to="/Portfolio">
                            Portfolio
                            </NavLink>
                        </nav>
                        <button onClick={ContactModal} className='header-btn__contact'>
                                Bog`lanish <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/></svg>
                            </button>
                        </div>
                    </div>
                    <div  className={`mobile-modal-shadow ${isButton ? 'db_shadow' : ''}`}>

                    </div>
                </div>
            </div>
            <div className={`header-modal-contact__content ${isContact ? 'contact_active' : ''}`}> 
                    <div className='header-modal-contact__title'> 
                        <h1>
                            Bog`lanish
                        </h1>
                        <button onClick={ContactModal}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M1.707.293A1 1 0 0 0 .293 1.707L5.586 7L.293 12.293a1 1 0 1 0 1.414 1.414L7 8.414l5.293 5.293a1 1 0 0 0 1.414-1.414L8.414 7l5.293-5.293A1 1 0 0 0 12.293.293L7 5.586z" clip-rule="evenodd"/></svg>
                        </button>
                        
                    </div>
                    <form>
                        <label htmlFor="Ism">
                            <h3>
                                Ism Familya
                            </h3>
                            <input type="text" id='Ism' />
                        </label>
                        <label htmlFor="Tel">
                            <h3>
                                Telefon raqamingiz
                            </h3>
                            <input placeholder='+998' type="number" id='Tel' />
                        </label>
                        <label htmlFor="info">
                            <h3>
                                Maqsadingiz
                            </h3>
                            <textarea name="" id="info">
                            
                            </textarea>
                        </label>
                        <button  type="submit">
                            Jo`natish
                        </button>
                    </form>
                </div>
            <div className={`header-modal-contact__shadow ${isContact ? 'contact_active' : ''}`}>
            </div>
        </header>
    )
}

export default Header