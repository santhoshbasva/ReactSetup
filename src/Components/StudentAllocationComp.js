import React from 'react'
import { ScheduleAndAllocation } from './StudentScheduleComp'
import { StudentData } from '../StudentData'
import TextComponent from './TextComponent'
export const StudentAllocationComp = () => {
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
            <AlloWrap />
        </div>
    )
}

export const AlloWrap = () => {
    return (
        <div
            style={{
                padding: '20px 58px 78px',
                border: '1px solid #FBFBFB',
                backgroundColor: '#FBFBFB',
            }}
        >
            <div style={{ display: 'flex', direction: 'row' }}>
                <select style={{ padding: '6px 24px' }}>
                    <option>Subject 1</option>
                    <option>Subject 2</option>
                    <option>Subject 3</option>
                    <option>Subject 4</option>
                    <option>Subject 5</option>
                </select>
                <div
                    style={{
                        marginLeft: '65%',
                        display: 'flex',
                        direction: 'row',
                    }}
                >
                    <TextComponent label="Date : 24/08/2022" />
                    <div style={{ marginLeft: '20px' }}>
                        <TextComponent label="Session : FN" />
                    </div>
                </div>
            </div>
            <RoomButton />
            <Invigilation />
            <br/>
            <StudentTable />
        </div>
    )
}

export const RoomButton = (props) => {
    const { style } = props
    return (
        <div
            style={{ padding: '22px 120px', display: 'flex', direction: 'row' }}
        >
            <button
                style={{
                    padding: '3px 60px',
                    color: 'white',
                    backgroundColor: '#5375E2',
                    border: '1px solid #5375E2',
                }}
            >
                <TextComponent label="Room 1" />
            </button>
            <div>
                <button style={styles.styledbutton}>
                    <TextComponent label="Room 2" />
                </button>
                <button style={styles.styledbutton}>
                    <TextComponent label="Room 3" />
                </button>
                <button style={styles.styledbutton}>
                    <TextComponent label="Room 4" />
                </button>
                <button style={styles.styledbutton}>
                    <TextComponent label="Room 5" />
                </button>
            </div>
        </div>
    )
}
const styles = {
    styledbutton: {
        padding: '3px 60px',
        color: '#5375E2',
        backgroundColor: 'white',
        border: '1px solid #5375E2',
    },
    Invigilation: {
        padding: '16px 77px',
        display: 'flex',
        direction: 'row',
        backgroundColor: 'white',
        border: '1px solid #000000',
        opacity: 0.7,
        borderRadius: '5px',
        justifyContent:"space-evenly"
    },
}

export const Invigilation = () => {
    return (
        <div style={styles.Invigilation}>
            <TextComponent label="Invigilator Name: John " />
            <TextComponent label="Invigilator Department: ECE   " />
            <TextComponent label="Students Count: 50" />
        </div>
    )
}
export const StudentTable =()=>{
  return(
<div  style={{ padding: '20px 62px', border: '1px solid #000000',backgroundColor:"white", }}>
  <table style={{width:"100%",textAlign:"center",}}>
    <tr style={{color:"#5375E2",fontWeight:"600"}}>
      <td><TextComponent label="S.No" /></td>
      <td><TextComponent label="Reg No" /></td>
      <td><TextComponent label="Name" /></td>
      <td><TextComponent label="Department" /></td>
      <td><TextComponent label="Seat No" /></td>
    </tr>
    {StudentData.map((index)=>(
    <tr style={{padding:"25px",fontWeight:"400",fontSize:"16px",lineHeight:"116%"}}>
      <td>{index.sn}</td>
      <td>{index.regno}</td>
      <td>{index.name}</td>
      <td>{index.dep}</td>
      <td>{index.seatno}</td>
      
    </tr>
    ))}
  </table>
</div>
  )
}
