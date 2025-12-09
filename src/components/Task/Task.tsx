import { Pencil, Trash } from 'lucide-react';
import { Button } from '../ui/Button/button';
import { Textarea } from '../ui/TextArea/textarea';
import type { Task } from '@/types/types';
import { useTaskStore } from '@/stores/taskStore';

export default function Task({ id, body, completed }: Task) {
  const removeTask = useTaskStore((state) => state.removeTask);

  return (
    <div className="flex gap-2 mt-3">
      <Textarea
        readOnly
        className={`resize-none min-h-10 ${completed ? 'line-through' : ''}`}
        value={body}
      />
      <div className="flex gap-2">
        <Button className="h-full w-10">
          <Pencil />
        </Button>
        <Button className="h-full w-10" onClick={() => removeTask(id)}>
          <Trash />
        </Button>
      </div>
    </div>
  );
}
