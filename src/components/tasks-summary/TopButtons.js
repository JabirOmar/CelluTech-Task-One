import React from 'react'
import { IoFunnelSharp} from 'react-icons/io5'

function TopButtons() {
  return (
    <div className='task-summary-top-buttons'>
      <button type='button' className='top-button'>VIEW KAN BAN</button>
      <button type='button' className='top-button'>TASKS OVERVIEW</button>
      <button type='button' className='top-button'><IoFunnelSharp /></button>
    </div>
  )
}

export default TopButtons
