import React from 'react'
import ContactShowing from './ContactShowing'
import ContractForm from './ContractForm'
import ContractLine1 from './ContractLine1'
import ContractLine2 from './ContractLine2'
import ContractPrevNext from './ContractPrevNext'
import './contracts.css'

function Contracts() {
  return (
    <section className='contracts-section'>
      <ContractLine1 />
      <ContractLine2 />
      <ContractForm />
      <ContactShowing />
      <ContractPrevNext />
    </section>
  )
}

export default Contracts
