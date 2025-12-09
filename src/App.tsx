import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import Title from './components/ui/Title/Title';
import TaskList from './components/TaskList/TaskList';
import MyDialog from './components/ui/Dialog/MyDialog';

function App() {
  return (
    <div className="flex flex-col m-auto max-w-3/4 min-h-screen pb-5">
      <header>
        <Title>Todo List</Title>
        <Searchbar />
      </header>
      <TaskList />
      <MyDialog />
    </div>
  );
}

export default App;
