import React from 'react'
import { TodoComp } from '../src/Components/TodoComp'
import { Foot, Head } from '../src/Components/TrailComp'


const Todo = () => {
  return (
    <div>
    <Head/>
        <TodoComp/>
    <Foot/>
    </div>
  )
}

export default Todo