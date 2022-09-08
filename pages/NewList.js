import React from 'react'
import Header from '../src/Layouts/Header'
import Footer from '../src/Layouts/Footer'
import AllocationPage from '../src/Layouts/Allocation'
import { Font } from '../src/font'

const NewList = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Font />

            <Header />
            <AllocationPage />

            <Footer />
        </div>
    )
}
export default NewList
