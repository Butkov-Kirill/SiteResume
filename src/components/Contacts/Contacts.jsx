import React from 'react'
import TitlePage from '../TitlePage/TitlePage'
import './Contacts.style.scss'
import '../../assets/images/white_bg.jpg'
import vk_icon from '../../assets/images/icons/vk.svg'
import inst_icon from '../../assets/images/icons/inst.svg'
import tg_icon from '../../assets/images/icons/tg.svg'
import gmail_icon from '../../assets/images/icons/gmail.svg'

const clickButton = (href) => {
    let newWindow = window.open();
    newWindow.opener = null;
    newWindow.location = href;
}

const showGmail = () => {
    alert('Gmail: salvador.beats.2022@gmail.com');
}

const Contacts = () => {
  return (
    <div className="contacts" id='contacts'>
        <div className="background-blure"></div>
        <TitlePage pageStyle='light'>Контакты</TitlePage>
        <div className="wrapper">
            <div className="buttons">
                <button onClick={()=>clickButton('https://vk.com/salvador.salvador')}>
                    <img src={vk_icon} alt='icon'/>
                    ВКонтакте
                </button>
                <button onClick={()=>clickButton('https://www.instagram.com/invites/contact/?i=1l2rpcwj66hzd&utm_content=mkixo7g')}>
                    <img src={inst_icon} alt='icon'/>
                    Instagram
                </button>
                <button onClick={()=>clickButton('https://t.me/SALVADOR_BEATS')}>
                    <img src={tg_icon} alt='icon'/>
                    Telegram
                </button>
                <button onClick={showGmail}>
                    <img src={gmail_icon} alt='icon'/>
                    Gmail
                </button>
            </div>
        </div>
    </div>
  )
}

export default Contacts
