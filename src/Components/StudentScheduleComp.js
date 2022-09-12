import React from 'react'
import TextComponent from './TextComponent'
import { TableData } from '../TableData'
export const StuWrapper = () => {
    return (
        <div style={{ padding: '35px 122px 185px' }}>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
                <img
                    style={{
                        height: '24px',
                        width: '24px',
                        marginTop: '4px',
                    }}
                    src="https://i.ibb.co/HnM1WDs/Vectorarrow.png"
                />
                <div
                    style={{
                        marginLeft: '19px',
                        marginBottom: '4px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: '24px',
                        lineHeight: '33px',
                    }}
                >
                    Semester Exam - BE ECE SEM 3
                </div>
            </div>
            <ScheduleAndAllocation />
            <br />
            <StuSubWrppaer />
        </div>
    )
}

export const ScheduleAndAllocation = () => {
    return (
        <div style={{ marginTop: '20px', display: 'flex', direction: 'row' }}>
            <button
                style={{
                    backgroundColor: '#5375E2',
                    color: 'white',
                    border: '1px solid #5375E2',
                    padding: '6px 33px',
                }}
            >
                <TextComponent label="Schedules" />
            </button>
            <button
                style={{
                    backgroundColor: 'white',
                    color: '#5375E2',
                    border: '1px solid #5375E2',
                    padding: '6px 33px',
                }}
            >
                <TextComponent label="Allocation" />
            </button>
        </div>
    )
}

export const StuSubWrppaer = () => {
    return (
        <div style={{ padding: '20px 58px 78px', border: '1px solid #D6D5D7' }}>
           <h3> Semester Schedules</h3>
            <TableBorder />
        </div>
    )
}

export const TableBorder = () => {
    return (
        <div
            style={{ padding: '20px 62px', border: '1px solid #000000' }}
        >  
        <Table/>
        
        </div>
    )
}
export const Table =()=>{
  return(
    <table style={{justifyContent:"space-between"}}>
    <tr style={{color:"#5375E2",alignContent:"space-evenly"}}>
      <th>S.No</th>
      <th>Date</th>
      <th>Session</th>
      <th>Course Code</th>
      <th>Subject Name</th>
    </tr>
  </table>
  )
}