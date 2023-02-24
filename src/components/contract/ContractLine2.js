import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsArrowRepeat } from 'react-icons/bs'

function ContractLine2() {
  return (
    <div className='contract-line-2'>
      <div id='c-line-2-left'>
        <div id='line-2-num'>
            <span>25</span>
            <BiChevronDown />
        </div>
        <div id='export-contia'>
            <span>Export</span>
            <BsArrowRepeat id='repeat-icon' />
        </div>
      </div>
      <div id='c-line-2-right'>
        <span>O</span>
        <p>Search</p>
      </div>
    </div>
  )
}

export default ContractLine2
