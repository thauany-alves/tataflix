import React from 'react';
import Logo from '../../assets/img/logo-pink.png';
import { Link } from 'react-router-dom';
import './menu.css'
import ButtonLink from './components/ButtonLink';



function Menu(){
    return(
        <nav className="menu">
            <Link to="/">
                <img className='logo' src={Logo} alt="tataflix logo" />
            </Link>  

            <ButtonLink as={Link} className="ButtonLink" to="/register/video">
                Novo Vídeo
            </ButtonLink>     
        </nav>
    );
}

export default Menu;