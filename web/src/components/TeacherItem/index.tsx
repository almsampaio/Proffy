import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/45184938?s=460&u=45813fb1b170eba7eaffbfcb6c57b06c6523c495&v=4" alt="Andre Sampaio"/>
                        <div>
                            <strong>Andre Sampaio</strong>
                            <span>Matemática</span>
                        </div>
                    </header>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a imperdiet lorem. Pellentesque lacinia sem in sapien pellentesque pretium. 
                        <br/> <br/>
                        Praesent ante ligula, consectetur quis nisi dignissim, hendrerit viverra lectus. Aenean ut facilisis odio, efficitur rutrum ipsum.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 45,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem