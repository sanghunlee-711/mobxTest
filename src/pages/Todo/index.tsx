import { TodoStore } from './modules/store/TodoStore';
import { TodoList } from './template/Todo';
import React from 'react';

const Todo = (): JSX.Element => {
    return (
        <>
            <TodoList todoStore={TodoStore} />
        </>
    );
};

export default Todo;
