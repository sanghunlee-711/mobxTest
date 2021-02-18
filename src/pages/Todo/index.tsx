import { TodoStore } from './modules/store/TodoStore';
import { TodoList } from './template/Todo';

const Todo = (): JSX.Element => {
    return (
        <div>
            <TodoList todoStore={TodoStore} />
        </div>
    );
};

export default Todo;
