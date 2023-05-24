import React from 'react'
import GameGUI from '../../components/gamegui/GameGUI'
import PACbuilder from '../../components/pacbuilder/PACbuilder'


import './pacbuidlrpage.css'

const PACbuidlrPage = () => {
  return (
    <div className='pacbuidlrpage'>
      <PACbuilder />
      <GameGUI />
    </div>
  )
}

export default PACbuidlrPage
