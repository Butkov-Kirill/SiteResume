import React from 'react'
import Message from '../Message/Message'
import './Main.style.scss'
import '../../assets/images/black_bg1.jpg'
import scrollPage from '../../Scroll'

const Main = () => {
  return (
    <div className="main" id='main'>
        <div className="background-blure"></div>
        <div className="wrapper">
            <div className="content">
                <div className="avatar">
                    <img src={require('../../assets/images/ava.png')} alt="avatar"/>
                </div>
                <div className="info">
                    <h1 className="name">Бутков Кирилл<br/>Александрович</h1>
                    <p className="position">front-end программист</p>
                    <Message side='left' widthMsg={'400px'}><p>Меня зовут Кирилл, мне 16 лет. C 2016 года изучаю программирование. 
                        Хочу устроиться на свою первую работу front-end программистом в российскую 
                        компанию, удаленно.</p><p>Подробней обо мне можно <button className='read_down' onClick={()=>scrollPage('about_me')}>прочитать</button> ниже!</p></Message>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
