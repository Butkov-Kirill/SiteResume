import React from 'react'
import './SlidePanel.style.scss'
import ArrowLeftSVG from '../../../assets/images/ArrowLeft.svg'
import ArrowRightSVG from '../../../assets/images/ArrowRight.svg'

const SlidePanel = (props) => {

  const ClickButton = (button) => {
      if (button=='right'){
        if (props.choosen<props.skills.length-1){
          props.setChoosenSkill(props.choosen+1);
        } else {
          props.setChoosenSkill(0);
        }
      }
      if (button=='left'){
        if (props.choosen>0){
          props.setChoosenSkill(props.choosen-1);
        } else {
          props.setChoosenSkill(props.skills.length-1);
        }
      }
  }

  const renderPoint = (index) => {
    let point;
    if (index!=props.choosen){
      return <div className='point' key={`pointer_index_${index}`}></div>
    } else {
      return <div className='point-active' key={`pointer_active_index_${index}`}></div>
    }
  }

  return (
    <div className="slide-panel">
        <button onClick={()=>ClickButton('left')}><img src={ArrowLeftSVG} alt="arrow_svg" /></button>
        <div className="points">
          {props.skills.map((point, index)=>
            <div key={'empty_block_index_'+index}>{renderPoint(index)}</div>
          )}
        </div>
        <button onClick={()=>ClickButton('right')}><img src={ArrowRightSVG} alt="arrow_svg"/></button>
    </div>
  )
}

export default SlidePanel
