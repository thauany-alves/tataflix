import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function NotFound404(){
    return(
        <div className="notFound">
            <div className="info">
                <h1>Oops!! Erro 404!</h1>
                <h2>Página não encontrada!</h2>
                <Link className='linkHome' to="/">Ir para Home</Link>
                
            </div>
            <div className="jogo">
                <iframe className="flappy-bird" src="https://mariosouto.com/flappy-bird-devsoutinho/" width="380" height="600"></iframe>
            </div>
        </div>
        
    );
}

export default NotFound404;