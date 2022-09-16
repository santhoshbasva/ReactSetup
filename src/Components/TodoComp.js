import React, { useState } from 'react'
import { TodoListComp } from './TodoListComp'

export const TodoComp = () => {
    const [input, setInput] = useState('')
    const [items, setItems] = useState([])

    const itemEvent = (event) => {
        setInput(event.target.value)
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, input]
        })
        setInput('')
    }

    const deleteItems = (id) => {
        return setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id
            })
        })
    }
    return (
        <>
            <div style={styled.Body}>
                <div style={styled.Content}>
                    <h1
                        style={{
                            marginLeft: '20px',
                            color: 'white',
                            wordSpacing: '4px',
                        }}
                    >
                        ToDo LIST
                    </h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add Items"
                        style={styled.Input}
                        onChange={itemEvent}
                        value={input}
                    />
                    <button style={styled.Button} onClick={listOfItems}>
                        {' '}
                        +{' '}
                    </button>
                    <ol>
                        {items.map((val, index) => {
                            return (
                                <TodoListComp
                                    text={val}
                                    key={index}
                                    id={index}
                                    onSelect={deleteItems}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

const styled = {
    Body: {
        heigth: '100%',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#F6F6F6',
        display: 'flex',
        direction: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Content: {
        border: '1px solid #5F6F94',
        height: '60%',
        direction: 'column',
        justifyContent: 'center',
        padding: '50px',
        backgroundColor: '#5F6F94',
        borderRadius: '10px',
    },
    Input: {
        border: '1px solid skyblue',
        padding: '10px',
        borderRadius: '10px',
        color: '',
    },
    Button: {
        borderRadius: '50%',
        border: '2px solid green',
        color: 'green',
        backgroundColor: 'lightgreen',
        padding: '6px',
        marginLeft: '20px',
    },
}
