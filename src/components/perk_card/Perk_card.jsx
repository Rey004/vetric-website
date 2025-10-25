import React from 'react'
import './Perk_card.css'

const Perk_card = ({ icon, title, description }) => {

  return (
    <div className="perk-card">
      <div className="perk-header">
        <div className="perk-icon">
          <img src={icon} alt={`${title} icon`} />
        </div>
        <h3 className="perk-title">{title}</h3>
      </div>
      <p className="perk-description">{description}</p>
    </div>
  )
}

export default Perk_card
