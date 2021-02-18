import { TodoStore } from './modules/store/TodoStore';
import { TodoList } from './template/Todo';

const Todo = (): JSX.Element => {
    return (
        <>
            <TodoList todoStore={TodoStore} />
        </>
    );
};

export default Todo;
