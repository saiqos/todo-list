import '@/App.css';
import Searchbar from '@/components/Searchbar/Searchbar';
import TaskList from '@/components/TaskList/TaskList';
import MyDialog from '@/components/ui/Dialog/MyDialog';
import Header from '@/components/ui/Header/Header';
import { useDebounce } from '@/hooks/useDebounce';
import { useTaskStore } from '@/stores/taskStore';
import { useMemo, useState } from 'react';

function App() {
  const tasks = useTaskStore((state) => state.tasks);
  const [searchbarValue, setSearchbarValue] = useState('');
  const debouncedValue = useDebounce(searchbarValue, 400);
  const filteredTasks = useMemo(() => {
    const query = debouncedValue.toLowerCase().trim();

    if (!query) {
      return tasks;
    }

    return tasks.filter((task) => task.body.toLowerCase().includes(query));
  }, [tasks, debouncedValue]);

  return (
    <div className="flex flex-col m-auto max-w-full min-h-screen pb-15 pl-3 pr-3 md:pl-0 md:pr-0 md:pb-10 md:max-w-3/4">
      <Header />
      <Searchbar
        searchbarValue={searchbarValue}
        setSearchbarValue={setSearchbarValue}
        results={filteredTasks.length}
      />
      <TaskList tasks={filteredTasks} />
      <MyDialog />
    </div>
  );
}

export default App;
