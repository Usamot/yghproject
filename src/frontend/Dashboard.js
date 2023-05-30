import React from 'react'
import {MdOutlineDashboard,MdOutlineAssignmentTurnedIn } from 'react-icons/md'
import {VscBook} from 'react-icons/vsc'
import  {IoIosPeople} from 'react-icons/io'
import {FaRegIdBadge,FaGraduationCap} from 'react-icons/fa'
import {TfiFiles} from 'react-icons/tfi'
import {RiContactsBook2Line} from 'react-icons/ri'
import './dashboard.css'


function Dashboard() {
  return (
    <div className="dashboard">
        <section className="section1">
            <div className="personal-info">
                <div className="personal-img">
                    <img src="https://"/>
                </div>
                <h4>Dash Name</h4>
                
            </div>

            <div className="dash-details">
                <ul className='dash-info'>
                    <li><MdOutlineDashboard/></li>
                    <li>
                    <a href="https://" >Dashboard</a>
                    </li>
                    
                </ul>
             

                <ul className='dash-info'>
                    <li><VscBook/></li>
                    <li>
                    <a href="https://" >Classes</a>
                    </li>
                    
                </ul>


                <ul className='dash-info'>
                    <li><IoIosPeople/></li>
                    <li>
                    <a href="https://" >All Students</a>
                    </li>
                    
                </ul>



                

                <ul className='dash-info'>
                    <li><FaRegIdBadge/></li>
                    <li>
                    <a href="https://" >Attendance</a>
                    </li>
                    
                </ul>


                <ul className='dash-info'>
                    <li><TfiFiles/></li>
                    <li>
                    <a href="https://" >Lesson Plan</a>
                    </li>
                    
                </ul>


                <ul className='dash-info'>
                    <li><MdOutlineAssignmentTurnedIn/></li>
                    <li>
                    <a href="https://" >Assignment</a>
                    </li>
                    
                </ul>


                <ul className='dash-info'>
                    <li><FaGraduationCap/></li>
                    <li>
                    <a href="https://" >Exam</a>
                    </li>
                    
                </ul>


                <ul className='dash-info'>
                    <li><RiContactsBook2Line/></li>
                    <li>
                    <a href="https://" >Resources</a>
                    </li>
                    
                </ul>




              

        
              

              
              



                
            </div>
        </section>

        <section className="section2">
            jkhjkhjkh
        </section>
        

        <section className="section3">
            jkhjkhjkh
        </section>


    </div>
  )
}

export default Dashboard