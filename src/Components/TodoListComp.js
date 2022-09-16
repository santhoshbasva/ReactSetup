import React from 'react'

export const TodoListComp = (props) => {
    const deleteItems=()=>{

    }
    return (
        <>
            <div style={{ display: 'flex', direction: 'row', }}>
                <button
                    style={{
                        borderRadius: '50%',
                        marginRight: '10px',
                        border: '1px solid red',
                        color: 'white',
                        backgroundColor:'red'
                    }}
                    onClick={()=>{
                        props.onSelect(props.id)
                    } }
                >
                    x
                </button>
                {props.text}
            </div>
        </>
    )
}
