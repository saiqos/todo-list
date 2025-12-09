import { Button } from '../Button/button';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
  DialogHeader,
} from './dialog';
import { Textarea } from '../TextArea/textarea';
import { useState } from 'react';
import { useTaskStore } from '@/stores/taskStore';
import { Alert, AlertTitle } from '../AlertDialog/alert';

export default function MyDialog() {
  const [taskValue, setTaskValue] = useState('');
  const [isError, setIsError] = useState(false);
  const addTask = useTaskStore((state) => state.addTask);
  const tasks = useTaskStore((state) => state.tasks);

  const handleAddTask = () => {
    const newTaskValue = taskValue.trim();
    const isUnique = tasks.findIndex((task) => task.body === taskValue) === -1;

    if (newTaskValue && isUnique) {
      addTask(newTaskValue);
      setIsError(false);
      setTaskValue('');
    } else {
      setIsError(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="w-11 h-11 self-end mt-auto">
        <Button className="rounded-full w-full h-full">
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <Textarea
          placeholder="Write down Your Task..."
          className="resize-none"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        {isError && (
          <Alert variant="destructive">
            <AlertTitle>
              You can't add empty or already existing task!
            </AlertTitle>
          </Alert>
        )}
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" onClick={handleAddTask}>
            Add Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
