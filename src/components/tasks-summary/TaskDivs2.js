import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsArrowRepeat } from 'react-icons/bs'

function TaskDivs2() {
  return (
    <div className='small-divs-container'>
      <div className='small-div-1'>
        <div id='left-small-div'>
            <span>25</span>
            <BiChevronDown />
        </div>
      </div>
      <div className='small-div-2'>
        <div className='right-small-div'>EXPORTS</div>
        <div className='right-small-div'>BULK ACTIONS</div>
        <div className='right-small-div'><BsArrowRepeat /></div>
      </div>
    </div>
  )
}

export default TaskDivs2
