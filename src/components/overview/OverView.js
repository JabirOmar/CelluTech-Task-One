import React from 'react'
import { RiSettings3Fill } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import './overview.css'

function OverView() {

    function checkValue(){
        let renderInput = document.getElementById('render-input')

        if(renderInput.value > 100){
            renderInput.value = 100
        }else if (renderInput.value < 0){
            renderInput.value = 0
        }
    }

    function render() {
        let renderInput = document.getElementById('render-input')
        let value = document.querySelector('.progress-value')
        let circleProgress = document.querySelector('.circle-progress')
        let start = 0
        
        let progress = setInterval(() => {
            if(renderInput.value === 0){
                start = 0
            }else if(renderInput.value > 0) {
                start++
            }
            value.textContent = start + '%'
            circleProgress.style.background = 'conic-gradient(#80c617 ' + start * 3.6 + 'deg, #f5f5f5 0deg)'
            if (start == renderInput.value) {
                clearInterval(progress)
            }
        }, 5);
    }

    function handleInfo(){
        let infoContainer = document.getElementById('info-container')
        infoContainer.classList.toggle('show')
    }
  return (
    <section className='overview-section show'>
      <div className='left-overview'>
        <div>
            <span id='overview-title'>OVERVIEW</span>
        </div>
        <div className='project-overview'>
            <div className='project-title'>
                <ul>
                    <li>
                        <div className='project-title-div'>
                            <p>Project #</p>
                            <p>2</p>
                        </div>
                    </li>
                    <li>
                        <div className='project-title-div'>
                            <p>Customer</p>
                            <p id='customer'>Holo Company</p>
                        </div>
                    </li>
                    <li>
                        <div className='project-title-div'>
                            <p>Billing Type</p>
                            <p>Fixed Rate</p>
                        </div>
                    </li>
                    <li>
                        <div className='project-title-div'>
                            <p>Total Rate</p>
                            <p>ETB1,200,000.00</p>
                        </div>
                    </li>
                    <li>
                        <div className='project-title-div'>
                            <p>Status</p>
                            <p>In Progress</p>
                        </div>
                    </li>
                    <li>
                        <div className='project-title-div'>
                            <p>Date Created</p>
                            <p>2023-02-13</p>
                        </div>
                    </li>
                    <li>
                        <div className='project-title-div'>
                            <p>Started Date</p>
                            <p>2023-02-13</p>
                        </div>
                    </li>
                    <li>
                        <div className='project-title-div'>
                            <p>Deadline</p>
                            <p>2023-02-14</p>
                        </div>
                    </li>
                    <li>
                        <div className='project-title-div'>
                            <p>Total Logged Hours</p>
                            <p>00:00</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='project-progress'>
                <p>Project Progress</p>
                <div className='progress-container'>
                    <div className='circle-progress'>
                        <div className='progress-value'>0%</div>
                    </div>
                </div>
                <div id='demo-countainer'>
                    <input type='number' id='render-input' placeholder='Enter a number' onChange={checkValue} />
                    <button onClick={render}>Render</button>
                    <BsFillInfoCircleFill onClick={handleInfo} id='render-info' />
                    <div id='info-container'>
                    <span>This conatiner is for demo only</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='description-div'>
            <span id='description-title'>Description</span>
            <p>No description for this project</p>
        </div>
        <div className='members-div'>
            <div className='members-title'>
                <span>Members</span>
                <RiSettings3Fill id='setting-icon' />
            </div>
            <div className='member-card-container'>
                <div className='member'>
                    <div className='member-left'>
                        <div className='user-image'></div>
                        <div className='member-info'>
                            <span className='member-name'>Faysal ali</span>
                            <span>Total Logged Time: 00:00</span>
                        </div>
                    </div>
                    <ImCross className='cancel' />
                </div>
            </div>
        </div>
      </div>
      <div className='right-overview'>
        <div className='right-overview-div-1'>
            <div className='right-div-1-1'>
                <p className='open-tasks'>0/0 OPEN TASKS</p>
                <p className='open-task-per'>0%</p>
                <div className='open-task-line'></div>
            </div>
            <div className='right-div-1-2'>
                <p className='days-left'>0/1 DAYS LEFT</p>
                <p className='days-left-per'>0%</p>
                <div className='days-left-line'></div>
            </div>
        </div>
        <div className='right-overview-div-2'>
            <div className='expenses-div-container'>
                <div className='expenses-div'>
                    <p id='total-expenses'>TOTAL EXPENSES</p>
                    <p className='expenses-cost'>ETB0.00</p>
                </div>
                <div className='expenses-div'>
                    <p id='billabe-expenses'>BILLABE EXPENSES</p>
                    <p className='expenses-cost'>ETB0.00</p>
                </div>
                <div className='expenses-div'>
                    <p id='billed-expenses'>BILLED EXPENSES</p>
                    <p className='expenses-cost'>ETB0.00</p>
                </div>
                <div className='expenses-div'>
                    <p id='unbilled-expenses'>UNBILLED EXPENSES</p>
                    <p className='expenses-cost'>ETB0.00</p>
                </div>
            </div>
            {/* <div className='expense'></div> */}
        </div>
      </div>
    </section>
  )
}

export default OverView
