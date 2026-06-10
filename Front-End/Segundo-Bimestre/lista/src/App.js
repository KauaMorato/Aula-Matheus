import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === '') return;
    
    const newTask = { text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      
      <div className="add-task">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Digite uma nova tarefa..." 
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>Adicionar</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="todo-item">
            <span 
              className={task.completed ? 'completed' : ''} 
              onClick={() => toggleComplete(index)}
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(index)} className="remove-btn">
              Remover
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p>Lista de tarefas vazia. Adicione uma tarefa!</p>}
    </div>
  );
}

export default App;