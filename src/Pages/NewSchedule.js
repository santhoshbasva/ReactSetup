import React from 'react'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'
import MainWrapperComponent from '../Components/MainWrapperComponent'
export const NewSchedule = () => {
  return (
    <div>
        <Header/>
        <React.StrictMode>
        <MainWrapperComponent/>
        </React.StrictMode>
        <Footer/>
    </div>
  )
}
export default NewSchedule