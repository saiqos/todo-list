import { Moon, Search, Sun } from 'lucide-react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '../ui/Input/input-group';
import { Button } from '../ui/Button/button';
import { useTheme } from '@/providers/ThemeProvider';
import type { SearchbarProps } from '@/types/types';

export default function Searchbar({
  searchbarValue,
  setSearchbarValue,
  results,
}: SearchbarProps) {
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
        <InputGroupInput
          placeholder="Search tasks..."
          value={searchbarValue}
          onChange={(e) => setSearchbarValue(e.target.value)}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">{results}</InputGroupAddon>
      </InputGroup>
      <Button size="icon" onClick={toggleTheme}>
        {isThemeLight ? <Moon /> : <Sun />}
      </Button>
    </div>
  );
}
