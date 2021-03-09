const defaultTasks = [
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

localStorage.tasksList = '' ? JSON.stringify(localStorage.tasksList) : JSON.stringify(defaultTasks);
const TASKS = JSON.parse(localStorage.tasksList);

const tasks = (state = TASKS, {id, text, isCompleted, type}) => {
    switch (type) {
        case 'ADD_TASK':
            state = [
                ...state,
                {
                    id,
                    text,
                    isCompleted,
                },
            ];
            localStorage.tasksList = JSON.stringify(state);
            return state;
        case 'COMPLETE_TASK':
            state = state.map((task) => {
                if (task.id === id) task.isCompleted = !task.isCompleted;
                return task;
            });
            localStorage.tasksList = JSON.stringify(state);
            return state;
        case 'REMOVE_TASK':
            state = state.filter((task) => task.id !== id);
            localStorage.tasksList = JSON.stringify(state);
            return state;
        case 'EDIT_TASK':
            state = state.map((task) => {
                if (task.id === id) task.text = text;
                return task;
            });
            localStorage.tasksList = JSON.stringify(state);
            return state;
        default:
            return state;
    }
};

export default tasks;
