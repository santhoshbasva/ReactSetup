import React from 'react'
import Popup from 'reactjs-popup'
import { Button } from 'reactstrap';
import { useRouter } from 'next/router'

const  Pop=() => {
    const Router = useRouter()
    const NewSch = () => {
        Router.push('/NewSchedule')
    }
    const NewLi=()=>{
        Router.push('/NewList')
    }
    
    return(
            <div >
        <Popup 
            trigger={
                <button

                    style={{
                        padding: '10px',
                        width: '174px',
                        borderRadius: '5px',
                        background: '#5375E2',
                        color: 'white',
                        marginTop: '30px',
                        marginRight: '10px',
                        border: '#5375E2',
                    }}
                >
                    {' '}
                    Save
                </button>
            }
            position="left center"
        >
            <div 
                style={{

                    color: 'White',
                    width: '900px',
                    height: '293px',
                    backgroundColor: '#FFFFFF',
                    position: ' center',
                    marginBottom: '10%',
                    marginRight: '1px',
                    position:"relative"
                }}
            >
                <span
                    style={{
                        marginLeft: '817px',
                        marginBottom: "16px"
                    }}
                >
                    <a href="HomePage">Go Home</a>
                </span>
                <div style={{color:"black",width:"680px",marginTop:"45px",marginLeft:"165px"}}>
                 <h2>BE EEE SEM3 schedule was successfully created.</h2>
                </div>
                <div>
                    <Button 
                    onClick={NewSch}
                        style={{
                            marginTop: '30px',
                            borderRadius: '5px',
                            border: '1px solid #5375E2',
                            marginLeft: '249px',
                            marginRight: '30px',
                            height: '40px',
                            width: '185px',
                            color:"#5375E2",
                            backgroundColor:"white"
                        }}
                    >
                        Create New Schedule
                    </Button>
                    <Button
                    onClick={NewLi}
                        style={{
                            marginTop: '30px',
                            borderRadius: '5px',
                            border: '1px solid #5375E2',
                            marginLeft: '',
                            marginRight: '',
                            height: '40px',
                            width: '185px',
                            background:"#5375E2",
                            color:"white",
                            marginBottom:"30%"
                        }}
                    >
                        Allocate Schedule
                    </Button>
                </div>
            </div>
        </Popup>
    </div>

    )
                    }
 export default Pop