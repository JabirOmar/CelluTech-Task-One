import './App.css';
import NavBar from './components/navbar/NavBar';
import Anouncement from './components/announcement/Anouncement';
import TaskSummary from './components/tasks-summary/TaskSummary';
import OverView from './components/overview/OverView';
import Blank from './components/blank/Blank';
import Contracts from './components/contract/Contracts';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Anouncement />
      <OverView />
      <TaskSummary />
      <Blank />
      <Contracts />
    </div>
  );
}

export default App;
