import React from 'react'
import Header from '../src/Layouts/Header'
import Footer from '../src/Layouts/Footer'
import { Font } from '../src/font'
import { StuWrapper } from '../src/Components/StudentScheduleComp'

 const StudentSchedule= () => {
  return(
    <div>
    <Font/>
    <Header/>
    <StuWrapper/>
    <Footer/>
    </div>
  )
}
export default StudentSchedule
