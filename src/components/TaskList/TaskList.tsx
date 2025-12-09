import { useTaskStore } from '@/stores/taskStore';
import Task from '../Task/Task';

export default function TaskList() {
  const tasks = useTaskStore((state) => state.tasks);

  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </div>
  );
}
