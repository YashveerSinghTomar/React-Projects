import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);


  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, ...updatedTask } : task));
  };

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`main-wrapper ${darkMode ? 'dark' : 'light'}`}>
      <div className="container mt-5 position-relative">
        <button
          className="theme-toggle-btn btn btn-outline-secondary"
          onClick={toggleTheme}
          title="Toggle Theme"
        >
          <i className={`bi ${darkMode ? 'bi-brightness-high-fill' : 'bi-moon-fill'}`}></i>
        </button>
        <h2 className="text-center mb-4">React To-Do List</h2>
        <TaskForm onAdd={addTask} darkMode={darkMode} />
        <TaskList tasks={tasks} onDelete={deleteTask} onEdit={editTask} darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
