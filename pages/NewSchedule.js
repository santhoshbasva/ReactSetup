import React from 'react'
import { Font } from '../src/font'
import CreateSchedule from '../src/Layouts/CreateSchedule'
import Footer from '../src/Layouts/Footer'
import Header from '../src/Layouts/Header'
import {useRouter} from "next/router"

const NewSchedule = () => {
  
  return (
    <><Font/>
       <Header/>
       <CreateSchedule/>
       {/* <NewSchedule/> */}
       <Footer/>
    </>
  )
}

export default NewSchedule