import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import Title from './components/ui/Title/Title';
import TaskList from './components/TaskList/TaskList';
import MyDialog from './components/ui/Dialog/MyDialog';
import { useTaskStore } from './stores/taskStore';
import { useState } from 'react';

function App() {
  const tasks = useTaskStore((state) => state.tasks);
  const [searchbarValue, setSearchbarValue] = useState('');
  const filteredTasks = tasks.filter((task) =>
    task.body.toLowerCase().includes(searchbarValue.toLowerCase().trim())
  );

  return (
    <div className="flex flex-col m-auto max-w-3/4 min-h-screen pb-10 md:pb-5">
      <header>
        <Title>Todo List</Title>
        <Searchbar
          searchbarValue={searchbarValue}
          setSearchbarValue={setSearchbarValue}
          results={filteredTasks.length}
        />
      </header>
      <TaskList tasks={filteredTasks} />
      <MyDialog />
    </div>
  );
}

export default App;
