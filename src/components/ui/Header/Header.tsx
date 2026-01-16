import Title from '../Title/Title';

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between relative h-15">
      <Title>Todo List</Title>
    </header>
  );
}
