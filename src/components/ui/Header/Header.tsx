import { NavLink } from 'react-router';
import { Button } from '../Button/button';
import Title from '../Title/Title';

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between relative h-15">
      <Title>Todo List</Title>
      <nav className="flex gap-4 h-auto">
        <NavLink to="/">
          <Button variant="link" className="p-0 h-auto">
            Home
          </Button>
        </NavLink>
        <NavLink to="/completed">
          <Button variant="link" className="p-0 h-auto">
            Completed Tasks
          </Button>
        </NavLink>
      </nav>
    </header>
  );
}
