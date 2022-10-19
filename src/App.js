import './App.css';
import TasksList from './components/TasksList/TasksList';

function App() {
  return (
    <div className="task-container">
      <div className="list-container">
        <h1 className="main-title">Tareas</h1>
        <TasksList />
      </div>
    </div>
  );
}

export default App;
