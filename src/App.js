import './App.css';
import {Comment} from './components/List/taskList';
import {InputPlaceholder} from './components/input/inputPlace';



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
         <InputPlaceholder/>
         <Comment tasks={tasks}/>
      </div>
   )    
}

export default App;
