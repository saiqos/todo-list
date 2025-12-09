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

export default function MyDialog() {
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
        />
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Add Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
