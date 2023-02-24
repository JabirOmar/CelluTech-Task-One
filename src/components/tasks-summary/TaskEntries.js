import React from 'react'
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md'

function TaskEntries() {
  return (
    <div className='entries-nav'>
      <div className='entries-nav-item'>
        <MdOutlineCheckBoxOutlineBlank id='entries-check-box'/>
      </div>
      <div className='entries-nav-item'>
        <span>#</span>
      </div>
      <div className='entries-nav-item'>
        <span>Name</span>
      </div>
      <div className='entries-nav-item'>
        <span>Status</span>
      </div>
      <div className='entries-nav-item'>
        <span>Start Date</span>
      </div>
      <div className='entries-nav-item'>
        <span>Due Date</span>
      </div>
      <div className='entries-nav-item'>
        <span>Assigned to</span>
      </div>
      <div className='entries-nav-item'>
        <span>Tags</span>
      </div>
      <div className='entries-nav-item'>
        <span>Priority</span>
      </div>
    </div>
  )
}

export default TaskEntries
