import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

function EntriesArea() {
  return (
    <div className='entries-area'>
      <div className='entries-area-left'>
        <span>No entries found</span>
      </div>
      <div className='entries-area-middle'>
        <AiOutlineCloudUpload id='cloud'/>
      </div>
      <div className='entries-area-right'></div>
    </div>
  )
}

export default EntriesArea
