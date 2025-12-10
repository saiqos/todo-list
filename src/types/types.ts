import type { Dispatch, SetStateAction } from "react";

export type TitleProps = {
    children: React.ReactNode;
    className?: string;
};

export type Theme = 'dark' | 'light';

export type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

export type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

export type Task = {
    id: number;
    body: string;
    completed: boolean;
};

export type TaskStore = {
    tasks: Task[];
    toggleComplete: (id: number) => void;
    addTask: (body: string) => void;
    removeTask: (id: number) => void;
    editTask: (id: number, newBody: string) => void;
};

export type SearchbarProps = {
    searchbarValue: string;
    setSearchbarValue: Dispatch<SetStateAction<string>>;
    results: number;
};