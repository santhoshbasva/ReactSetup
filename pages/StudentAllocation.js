import React from 'react'
import { StudentAllocationComp } from '../src/Components/StudentAllocationComp'
import Footer from '../src/Layouts/Footer'
import Header from '../src/Layouts/Header'
import { Font } from '../src/font'

const StudentAllocation = () => {
  return (
    <div>
    <Font/>
    <Header/>
    <StudentAllocationComp/>
    <Footer/>
    </div>
  )
}
export default StudentAllocation
