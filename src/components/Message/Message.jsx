import React, {useEffect, useRef, useState} from 'react'
import './Message.style.scss'

const Message = ({children, ...props}) => {
    const MessageBox = useRef();
    const [sideMargin, setSideMargin] = useState(props.side);

    useEffect(()=>{
        if (sideMargin=='left'){
            MessageBox.current.style.marginLeft = '40px';
        } else {
            MessageBox.current.style.marginRight = '40px';
        }
    }, [sideMargin]);
 
    const renderArrow = (side) => {        
        return <>
            <div className={`side_${side}`}></div>
        </>
    }

  return (
    <div className="message-box" ref={MessageBox} style={{'width': `${props.widthMsg}`}}>
        {props.side=='left' && renderArrow(props.side)}
        <div className="message">
            {children}
        </div>
        {props.side=='right' && renderArrow(props.side)}
    </div>
  )
}

export default Message
