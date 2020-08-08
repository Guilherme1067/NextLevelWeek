import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import "./styles.css"
function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/49403321?s=460&u=f110909404c269c35943d0cf99e805257d2b9d07&v=4" alt="Guilherme Reis" /> 
            <div>
            <strong>Guilherme Reis </strong>
            <span>POO</span>
            </div>
        </header>

        <p>
            Apaixonado Pelo Conhecimento
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 80,00</strong>
            </p>
            <button>
                <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    )
}
export default TeacherItem;