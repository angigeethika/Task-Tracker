
import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    
  ]);

  // Function to add a new task
  const addTask = (text) => {
    const newTask = {
      id: Math.floor(Math.random() * 10000) + 1,
      text: text,
    };
    setTasks([...tasks, newTask]);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='outer-container'>
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <p>No tasks to show</p>
      )}
      <AddTask onAdd={addTask} />
    </div>
    </div>
  );
}

export default App;