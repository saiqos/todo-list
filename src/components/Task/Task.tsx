import { Pencil, Trash } from 'lucide-react';
import { Button } from '../ui/Button/button';
import { Textarea } from '../ui/TextArea/textarea';
import type { Task } from '@/types/types';
import { useTaskStore } from '@/stores/taskStore';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTitle,
} from '@/components/ui/Dialog/dialog';
import { useState } from 'react';
import { useValidation } from '@/hooks/useValidation';
import { Alert, AlertTitle } from '../ui/AlertDialog/alert';

export default function Task({ id, body, completed }: Task) {
  const removeTask = useTaskStore((state) => state.removeTask);
  const editTask = useTaskStore((state) => state.editTask);
  const [newTaskBody, setNewTaskBody] = useState(body);
  const { cleanTaskValue, isValid } = useValidation(newTaskBody);
  const [isError, setIsError] = useState(false);

  const handleEditTask = () => {
    if (isValid) {
      editTask(id, cleanTaskValue);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="flex gap-2 mt-3">
      <Textarea
        readOnly
        className={`resize-none min-h-10 ${completed ? 'line-through' : ''}`}
        value={body}
      />
      <div className="flex gap-2">
        <Dialog>
          <DialogTrigger>
            <Button className="h-full w-10">
              <Pencil />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
            </DialogHeader>
            <DialogDescription>You can Edit Your Task here</DialogDescription>
            <Textarea
              value={newTaskBody}
              onChange={(e) => setNewTaskBody(e.target.value)}
            >
              {newTaskBody}
            </Textarea>
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
              <Button type="submit" onClick={handleEditTask}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button className="h-full w-10" onClick={() => removeTask(id)}>
          <Trash />
        </Button>
      </div>
    </div>
  );
}
