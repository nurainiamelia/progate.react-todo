import React, { useState } from 'react'
import Todos from './components/Todos';  // Lalukan Import

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,  // Menganti nilai awal ke false lagi
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  console.log(todos)

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  // const deleteTodo = (todoId) => {
  //   //pseudo
  //   //get id
  //   //delete function js
  //   //kayanya ada lagi kemaren tapi apaya
  //   //=ternyata adalagi, di button delete diganti jadi onClick
  //   const findIndex = todos.findIndex( i => {
  //     return i.id === todoId
  //   })

  //   if (findIndex !== -1) {
  //     todos.splice(findIndex, 1)
  //   }

  //   const deleteTodo = todos.map((todo) => {
  //     console.log("hit", todo)
  //     return todo
  //   })

  //   setTodos(deleteTodo)
  // }

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      {/* Teruskan function toggleCompleted ke component Todos */}
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
  },
  title: {
    fontSize: '36px',
  },
}

export default App