import './App.css';
import {TaskList} from './components/TaskList/TaskList';
import {ControlsBar} from './components/ControlsBar/ControlsBar';

function App() {
   const tasks = [
      {
         id: 1,
         nameTask: 'homework',
         importance: 'high'
      },
      {
         id: 2,
         nameTask: 'football',
         importance: 'medium'
      },
      {
         id: 3,
         nameTask: 'relax',
         importance: 'low'
      }
    ]
   return (
      <div>
         <h1>Homework React Two</h1>
         <ControlsBar/>
         <TaskList tasks={tasks}/>
      </div>
   )    
}

export default App;