import Task from '../Task/Task';
import type { Task as TaskType } from '@/types/types';

export default function TaskList({ tasks }: { tasks: TaskType[] }) {
  return (
    <div className="mt-4">
      {tasks.map((task) => (
        <Task {...task} key={task.id} />
      ))}
    </div>
  );
}
