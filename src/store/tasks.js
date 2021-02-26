const TASKS = [
    {
        id: 1,
        text: `Пройти стажировку в Онли`,
        isCompleted: true,
    },
    {
        id: 2,
        text: `Побриться`,
        isCompleted: false,
    },
    {
        id: 3,
        text: `Купить молоко`,
        isCompleted: false,
    },
    {
        id: 4,
        text: `Не забыть забрать сына из садика`,
        isCompleted: false,
    },
    {
        id: 5,
        text: `Купить сыр`,
        isCompleted: false,
    },
];

const tasks = (state = TASKS, {id, text, isCompleted, type}) => {
    switch (type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    id,
                    text,
                    isCompleted,
                },
            ];
        case 'COMPLETE_TASK':
            return [...state].map((task) => {
                if (task.id === id) task.isCompleted = !task.isCompleted;
                return task;
            });
        case 'REMOVE_TASK':
            return [...state].filter((task) => task.id !== id);
        case 'EDIT_TASK':
            return [...state].map((task) => {
                if (task.id === id) task.text = text;
                return task;
            });
        default:
            return state;
    }
};

export default tasks;
