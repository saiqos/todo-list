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
import { useValidation } from '@/hooks/useValidation';

export default function MyDialog() {
  const [taskValue, setTaskValue] = useState('');
  const [isError, setIsError] = useState(false);
  const addTask = useTaskStore((state) => state.addTask);
  const { cleanTaskValue, isValid } = useValidation(taskValue);

  const handleAddTask = () => {
    if (isValid) {
      addTask(cleanTaskValue);
      setIsError(false);
      setTaskValue('');
    } else {
      setIsError(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="self-end mt-auto">
        <Button className="rounded-full w-11 h-11">
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
          <DialogClose asChild>
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
