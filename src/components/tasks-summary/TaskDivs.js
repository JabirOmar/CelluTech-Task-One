import React from 'react'

function TaskDivs() {
  return (
    <div>
      <span id='task-summary-title'>Task Summary</span>
      <div className='task-divs-wrapper'>
        <div className='task-card'>
            <p className='task-count'>0</p>
            <p className='task-status'>Not Started</p>
            <p className='assigned-task'>Tasks assigned to me: 0</p>
        </div>
        <div className='task-card'>
            <p className='task-count'>0</p>
            <p className='task-status' id='inprogess-status'>In progress</p>
            <p className='assigned-task'>Tasks assigned to me: 0</p>
        </div>
        <div className='task-card'>
            <p className='task-count'>0</p>
            <p className='task-status'>Testing</p>
            <p className='assigned-task'>Tasks assigned to me: 0</p>
        </div>
        <div className='task-card'>
            <p className='task-count'>0</p>
            <p className='task-status' id='awaiting-status'>Awaiting Feedback</p>
            <p className='assigned-task'>Tasks assigned to me: 0</p>
        </div>
        <div className='task-card'>
            <p className='task-count'>0</p>
            <p className='task-status' id='completed-status'>Complete</p>
            <p className='assigned-task'>Tasks assigned to me: 0</p>
        </div>
      </div>
    </div>
  )
}

export default TaskDivs
