import type { TaskStore } from '@/types/types';
import { create } from 'zustand';

export const useTaskStore = create<TaskStore>()((set) => ({
    tasks: [],
    addTask: (body) => {
        set(state => ({
            tasks: [...state.tasks, { id: Date.now(), body, completed: false }]
        }))
    },
    editTask: (id, newBody) => {
        set(state => ({
            tasks: state.tasks.map(t => t.id === id ? { ...t, body: newBody } : t)
        }))
    },
    removeTask: (id) => {
        set(state => ({ tasks: state.tasks.filter(t => t.id !== id) }))
    },
    toggleComplete: (id) => {
        set(state => ({
            tasks: state.tasks.map(t => t.id === id ? { ...t, completed: true } : t)
        }))
    },
}))