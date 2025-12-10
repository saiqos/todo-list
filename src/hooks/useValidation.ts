import { useTaskStore } from "@/stores/taskStore";

export const useValidation = (taskValue: string) => {
    const tasks = useTaskStore(state => state.tasks);

    const cleanTaskValue = taskValue.trim();
    const isUnique: boolean = tasks.findIndex((task) => task.body === cleanTaskValue) === -1;
    const isValid: boolean = (!!cleanTaskValue.length && isUnique);

    return { cleanTaskValue, isValid };
}