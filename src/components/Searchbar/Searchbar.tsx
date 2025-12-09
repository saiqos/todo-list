import { Moon, Search, Sun } from 'lucide-react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../ui/Input/input-group';
import { Button } from '../ui/Button/button';
import { useTheme } from '@/providers/ThemeProvider';

export default function Searchbar() {
  const { theme, setTheme } = useTheme();
  const isThemeLight = theme === 'light';

  const toggleTheme = () => {
    if (isThemeLight) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="flex align-middle gap-3 mt-4">
      <InputGroup>
        <InputGroupInput placeholder="Search tasks..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12</InputGroupAddon>
      </InputGroup>
      <Button size="icon" onClick={toggleTheme}>
        {isThemeLight ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
}
