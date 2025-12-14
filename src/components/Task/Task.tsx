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
import { Checkbox } from '../ui/Input/checkbox';

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
    <div className="flex items-center gap-4 mt-3">
      <Checkbox className="hover:bg-accent cursor-pointer w-6 h-6" />
      <Textarea
        readOnly
        className={`resize-none min-h-10 text-sm md:text-base ${
          completed ? 'line-through' : ''
        }`}
        value={body}
      />
      <div className="flex flex-col sm:flex-row gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button className=" w-8 h-8 sm:w-10 sm:h-10">
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
              className="text-sm md:text-base"
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
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" onClick={handleEditTask}>
                Save changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button className=" w-8 h-8 sm:w-10 sm:h-10">
              <Trash />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Task will be deleted</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Are You sure that You want to delete this task?
            </DialogDescription>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" onClick={() => removeTask(id)}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
