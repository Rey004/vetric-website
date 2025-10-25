import React from 'react'
import Perk_card from '../../components/perk_card/Perk_card'
import './Perks.css'

const Perks = () => {
  return (
    <div className="perks-section">
      <div className="perks-container">
        <Perk_card
          icon="/assets/shield.svg"
          title="Cross-Chain Access"
          description="Seamlessly interact with diverse blockchain networks."
        />
        <Perk_card
          icon="/assets/document.svg"
          title="Decentralized Identity"
          description="Securely manage your digital identity across applications."
        />
        <Perk_card
          icon="/assets/fingerprint.svg"
          title="Smart Contract Automation"
          description="Streamline operations with automated smart contracts."
        />
        <Perk_card
          icon="/assets/people.svg"
          title="Community Governance"
          description="Participate in decentralized decision-making through voting."
        />
        <Perk_card
          icon="/assets/token.svg"
          title="Asset Tokenization"
          description="Digitally tokenize real-world assets for efficient management."
        />
        <Perk_card
          icon="/assets/locker.svg"
          title="Interoperable Data Exchange"
          description="Exchange data seamlessly between applications for collaboration."
        />
      </div>
    </div>
  )
}

export default Perks
