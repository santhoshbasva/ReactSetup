import React from 'react'
import Footer from '../src/Layouts/Footer'
import Header from '../src/Layouts/Header' 
import NoSchedule from '../src/Layouts/NoSchedule'
import {useRouter} from "next/router"
import { Font } from '../src/font'

const HomePage = () => {
  const Router = useRouter()
    const New = () => {
        Router.push('/NewSchedule')
    }
  return (
    <>
       <Font/> 
       <Header/>
       <NoSchedule onClick={New}/>
       <Footer/>
    </>
  )
}

export default HomePage;