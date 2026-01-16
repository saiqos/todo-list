import type { TaskStore } from '@/types/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useTaskStore = create<TaskStore>()(

    persist(
        (set) => ({
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
                set((state) => ({
                    tasks: state.tasks.map((t) =>
                        t.id === id
                            ? { ...t, completed: !t.completed }
                            : t
                    ),
                }));
            },
        }),
        {
            name: 'tasks-storage',
            storage: createJSONStorage(() => localStorage), //optional but I think better to specify explicitly
        }
    )
)