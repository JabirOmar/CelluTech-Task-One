import React from 'react'

function ContractForm() {
  return (
    <div className='contract-form-container'>
      <div className='contract-item-wrapper'>
        <div className='contract-item-nav'>
            <span>#</span>
        </div>
        <div className='contract-item-item'>
            <p>1</p>
        </div>
      </div>
      <div className='contract-item-wrapper'>
        <div className='contract-item-nav'>
            <span>Subject</span>
        </div>
        <div className='contract-item-item'>
            <p>Hrm system contract</p>
        </div>
      </div>
      <div className='contract-item-wrapper'>
        <div className='contract-item-nav'>
            <span>Customer</span>
        </div>
        <div className='contract-item-item'>
            <p>Holi company</p>
        </div>
      </div>
      <div className='contract-item-wrapper'>
        <div className='contract-item-nav'>
            <span>Contract Type</span>
        </div>
        <div className='contract-item-item'>
            <p>Fixed-term</p>
        </div>
      </div>
      <div className='contract-item-wrapper'>
        <div className='contract-item-nav'>
            <span>Contract Value</span>
        </div>
        <div className='contract-item-item'>
            <p>ETB1,200,000.00</p>
        </div>
      </div>
      <div className='contract-item-wrapper'>
        <div className='contract-item-nav'>
            <span>Start Date</span>
        </div>
        <div className='contract-item-item'>
            <p>2023/02/13</p>
        </div>
      </div>
      <div className='contract-item-wrapper'>
        <div className='contract-item-nav'>
            <span>End Date</span>
        </div>
        <div className='contract-item-item'>
            <p>2023/4/14</p>
        </div>
      </div>
      <div className='contract-item-wrapper'>
        <div className='contract-item-nav'>
            <span>Signature</span>
        </div>
        <div className='contract-item-item'>
            <p>not signed</p>
        </div>
      </div>
    </div>
  )
}

export default ContractForm
