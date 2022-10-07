import React, { useEffect, useRef } from 'react'
import './TitlePage.style.scss'

const TitlePage = ({children, ...props}) => {
    const namePage = useRef();
    const liner = useRef();

    useEffect(()=>{
        if (props.pageStyle=='light'){
            namePage.current.style.color='#171717';
            liner.current.style.background='#696969';
        }
        if (props.pageStyle=='dark'){
          namePage.current.style.color='#fff';
          liner.current.style.background='#A9A9A9';
      }
    });

  return (
    <div className="title-page">
        <h1 ref={namePage}>{children}</h1>
        <div ref={liner} className="liner"></div>
    </div>
  )
}

export default TitlePage
