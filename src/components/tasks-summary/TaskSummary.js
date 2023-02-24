import React from 'react'
import EntriesArea from './EntriesArea'
import './task-sumaary.css'
import TaskDivs from './TaskDivs'
import TaskDivs2 from './TaskDivs2'
import TaskEntries from './TaskEntries'
import TopButtons from './TopButtons'

function TaskSummary() {
  return (
    <section className='task-summary-section'>
      <TopButtons />
      <TaskDivs />
      <TaskDivs2 />
      <TaskEntries />
      <EntriesArea />
    </section>
  )
}

export default TaskSummary
