import React from 'react';
import Logo from '../../assets/img/logo-pink.png';
import './menu.css'
import ButtonLink from './components/ButtonLink';


function Menu(){
    return(
        <nav className="menu">
            <a href="/">
                <img className='logo' src={Logo} alt="tataflix logo" />
            </a>  

            <ButtonLink className="ButtonLink" href="/">
                Novo Vídeo
            </ButtonLink>     
        </nav>
    );
}

export default Menu;