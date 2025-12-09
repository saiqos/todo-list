import { Pencil, Trash } from 'lucide-react';
import { Button } from '../ui/Button/button';
import { Textarea } from '../ui/TextArea/textarea';
import type { Task } from '@/types/types';

export default function Task({ body, completed }: Task) {
  return (
    <div className="flex gap-2">
      <Textarea
        className={`resize-none min-h-10 ${completed ? 'line-through' : ''}`}
        value={body}
      />
      <div className="flex gap-2">
        <Button className="h-full w-10">
          <Pencil />
        </Button>
        <Button className="h-full w-10">
          <Trash />
        </Button>
      </div>
    </div>
  );
}
