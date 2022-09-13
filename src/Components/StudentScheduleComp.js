import React,{useState} from 'react'
import TextComponent from './TextComponent'
import { TableData,LabData } from '../TableData'
export const StuWrapper = () => {
    return (
        <div style={{ padding: '35px 122px 105px' }}>
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
           <h3>Semester Schedule</h3>
            <SemTable />
            <h3>Lab Schedule</h3>
            <LabTable/>
        </div>
    )
}


export const SemTable =()=>{
  return(
<div  style={{ padding: '20px 62px', border: '1px solid #000000', }}>
  <table style={{width:"100%",textAlign:"center",}}>
    <tr style={{color:"#5375E2",fontWeight:"600"}}>
      <td><TextComponent label="S.No" /></td>
      <td><TextComponent label="Date" /></td>
      <td><TextComponent label="Session" /></td>
      <td><TextComponent label="Course Code" /></td>
      <td><TextComponent label="Subject Name" /></td>
    </tr>
    {TableData.map((semSchedule)=>(
    <tr style={{padding:"25px",fontWeight:"600"}}>
      <td>{semSchedule.sn}</td>
      <td>{semSchedule.date}</td>
      <td>{semSchedule.session}</td>
      <td>{semSchedule.code}</td>
      <td>{semSchedule.subname}</td>
    </tr>
    ))}
  </table>
</div>
  )
}

export const LabTable =()=>{
  return(
    <div  style={{ padding: '20px 62px', border: '1px solid #000000' }}>
    <table style={{width:"100%",textAlign:"center",}}>
    <tr style={{color:"#5375E2",fontWeight:"600",border: "1px solid black",}}>
      <td><TextComponent label="S.No" /></td>
      <td><TextComponent label="Date" /></td>
      <td><TextComponent label="Session" /></td>
      <td><TextComponent label="Course Code" /></td>
      <td><TextComponent label="Subject Name" /></td>
    </tr>
    {LabData.map((semSchedule)=>(
    <tr style={{padding:"25px",fontWeight:"600"}}>
      <td>{semSchedule.sn}</td>
      <td>{semSchedule.date}</td>
      <td>{semSchedule.session}</td>
      <td>{semSchedule.code}</td>
      <td>{semSchedule.subname}</td>
    </tr>
    ))}
  </table>
  </div>
  )
}
