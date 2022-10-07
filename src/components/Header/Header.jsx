import React, {useRef, useEffect} from 'react'
import './Header.style.scss'
import logoSVG from '../../assets/images/logo.svg'
import scrollPage from '../../Scroll'
import menu_icon from '../../assets/images/icons/menu.svg'

const Header = () => {
  const SHOW = '-520%';
  const HIDE = '150%';

  const panel = useRef();

  const showMenu = (option) => {
    panel.current.style.bottom = option;
  }

  useEffect(()=>showMenu(HIDE));

  return (
    <div className="header">
        <div className="name-site">
            <img src={logoSVG} alt="logo" />
            <h1>К. Бутков</h1>
        </div>
        <div className="buttons">
            <button onClick={()=>scrollPage('main')}>Главная</button>
            <button onClick={()=>scrollPage('about_me')}>Обо мне</button>
            <button onClick={()=>scrollPage('portfolio')}>Портфолио</button>
            <button onClick={()=>scrollPage('contacts')}>Контакты</button>
        </div>
        <div className="menu_android">
          <img src={menu_icon} alt="menu_icon" onClick={()=>{showMenu(SHOW)}}/>
          <div className="panel_buttons" ref={panel}>
          <button onClick={()=>{scrollPage('main'); showMenu(HIDE);}}>Главная</button>
            <button onClick={()=>{scrollPage('about_me'); showMenu(HIDE);}}>Обо мне</button>
            <button onClick={()=>{scrollPage('portfolio'); showMenu(HIDE);}}>Портфолио</button>
            <button onClick={()=>{scrollPage('contacts'); showMenu(HIDE);}}>Контакты</button>
            <button className="close" onClick={()=>{showMenu(HIDE)}}>Свернуть</button>
          </div>
        </div>
    </div>
  )
}

export default Header
