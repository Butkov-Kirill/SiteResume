import React, {useState, useEffect} from 'react'
import TitlePage from '../TitlePage/TitlePage'
import './AboutMe.style.scss'
import InfoBoard from './InfoBoard/InfoBoard'
import '../../assets/images/white_bg.jpg'
import Skill from './Skill/Skill'
import SkillData from './Skills_data.js';
import SlidePanel from './SlidePanel/SlidePanel'
import Message from '../Message/Message'
import scrollPage from '../../Scroll'

const AboutMe = () => {
    const [choosenSkill, setChoosenSkill] = useState(0);

  return (
    <div className="about-me" id='about_me'>
        <div className="background-blure"></div>
        <TitlePage pageStyle='light'>Обо мне</TitlePage>
        <div className="wrapper">
            <div className="sides">
                <div className="left">
                    <InfoBoard title='Образование'>
                        <p>Закончил: МБОУ “Средняя школа №16 г.Макеевка”, 11 классов.</p>
                        <p>Учусь: Донецкий Национальный Технический Университет, г.Донецк. 1 курс. Факультет информационных систем и технологий.</p>
                    </InfoBoard>
                    <InfoBoard title='Опыт работы'>
                        <p>Колл Центр “Infotell”: В 2021 году работал в колл центре “Infotell”, на должности менеджера по работе с клиентами.</p>
                    </InfoBoard>
                    <InfoBoard title='Желаемый опыт работы'>
                        <p>Желаю найти свою первую работу front-end программистом в российской компании, удаленно. Попутно изучть back-end и стать full-stack программистом.</p>
                    </InfoBoard>
                    <InfoBoard title='Мои навыки в IT'>
                        <Skill SkillInfo={SkillData[choosenSkill]}></Skill>
                        <SlidePanel skills={SkillData} setChoosenSkill={setChoosenSkill} choosen={choosenSkill}></SlidePanel>
                    </InfoBoard>
                </div>
                <div className="right">
                    <div className="message-block">
                        <img src={require('../../assets/images/unnamed.jpg')} alt="avatar" className="avatar" />
                        <Message side='left' widthMsg='50%'><p>Расскажи о себе поподробней?</p><p>Что ты изучал, что знаешь?</p></Message>
                    </div>
                    <div className="message-block right-msg">
                        <Message side='right' widthMsg='50%'><p>Меня зовут Кирилл, мне 16 лет, я из города 
                            Макеевка, ДНР. С 2016 года занимаюсь изучением сферы IT. За эти 6 лет я успел изучить 
                            множество языков программирования и попробовать себя во многих направлениях: Разработка игр, разработка ПО, разработка сайтов, разработка мобильных приложений, информационная безопасность.
                            </p><p>На данный момент я остановился на web-разработке, которой усердно занимаюсь последние 
                            пол года, но и раньше тоже с ней сталкивался. Уверенно владею HTML, Pug, JS, CSS, 
                            SCSS, WebPack, Vite, Vue, React.</p><p>Из всех фреймворков я отдаю свое предпочтение именно 
                            React, разработка на нем для меня более комфортная. Но по надобности могу изучать 
                            и другие фреймворки за короткое время.</p>
                        </Message>
                        <img src={require('../../assets/images/ava.png')} alt="avatar" className="avatar" />
                    </div>
                    <div className="message-block">
                        <img src={require('../../assets/images/unnamed.jpg')} alt="avatar" className="avatar" />
                        <Message side='left' widthMsg='50%'><p>Чем ты занимаешься сейчас?</p><p>Чем хотел бы заняться?</p></Message>
                    </div>
                    <div className="message-block right-msg">
                        <Message side='right' widthMsg='50%'><p>В настоящее время, я учусь в Донецком 
                            Национальном Техническом Университете на факультете информационных систем и технологий. Так же параллельно я ищу удаленную работу web-программистом в 
                            российской компании, на полный рабочий день.</p><p>В будущем планирую учиться и 
                            работать, постепенно улучшая свои навыки. Планирую плавно начать изучать 
                            back-end, чтобы стать full-stack разработчиком.</p>
                        </Message>
                        <img src={require('../../assets/images/ava.png')} alt="avatar" className="avatar" />
                    </div>
                    <button onClick={()=>scrollPage('contacts')}>Задать свой вопрос</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe
