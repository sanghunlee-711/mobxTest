import React, { useState } from 'react';
import { TodoStore, TodoStoreImpl } from './stores/TodoStore';
import { observer } from 'mobx-react';

interface TodoListProps {
    todoStore: TodoStoreImpl;
}

const TodoList: React.FC<TodoListProps> = observer(({ todoStore }) => {
    const [value, setValue] = useState<string>('');
    const status = todoStore.status;

    return (
        <div>
            <input
                value={value}
                onChange={(event) => {
                    setValue(event.target.value);
                }}
                type="text"
            />
            <button
                onClick={() => {
                    if (value) {
                        todoStore.addTodo(value);
                        setValue('');
                    }
                }}
            >
                Submit
            </button>
            Completed: {status.completed}
            Remaining:{status.remaining}
            <ul>
                {todoStore.todos.map((todo) => {
                    return (
                        <li
                            onClick={() => {
                                todoStore.toggleTodo(todo.id);
                            }}
                        >
                            [{todo.completed ? 'x' : ' '}]{todo.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
});

const App = () => {
    return (
        <div>
            <TodoList todoStore={TodoStore} />
        </div>
    );
};

export default App;
