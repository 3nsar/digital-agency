
import "./AssistanceCard.scss"

const AssistanceCard = ({text,subtitle,time,title}) => {
  return (
    <div className='assistance-card-container'>
        <div className="assistance-card-content">
            <div className="assistance-card-title">
              <h1>{title}</h1>
              <p className='assistance-card-time'>{time}</p>
            </div>
            <h2>{subtitle}</h2>
            <p className='assistance-card-text'>{text}</p>
        </div>
    </div>
  )
}

export default AssistanceCard