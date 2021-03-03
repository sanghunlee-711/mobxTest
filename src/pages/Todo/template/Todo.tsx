import React, { useState } from 'react';
import { TodoStoreImpl } from '../modules/store/TodoStore';
import { observer } from 'mobx-react';
import styled from 'styled-components';

export interface TodoListProps {
    todoStore: TodoStoreImpl;
}

export const TodoList: React.FC<TodoListProps> = observer(
    ({ todoStore }): JSX.Element => {
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
                <Test>Remaining:{status.remaining}</Test>
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
    },
);

const Test = styled.div`
    color: red;
`;
