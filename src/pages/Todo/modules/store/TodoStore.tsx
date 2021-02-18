import { makeObservable, observable, action, computed } from 'mobx';

interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

export class TodoStoreImpl {
    todos: TodoItem[] = [];

    //mobx클래스에서는 constructor 필수
    //이렇게 class형을 사용하지 않기위해서는 useObserverble인가 그.. 훅이 있음
    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            toggleTodo: action,
            status: computed,
        });
    }

    addTodo(title: string): void {
        const item: TodoItem = {
            id: +Math.random().toFixed(4),
            title,
            completed: false,
        };

        this.todos.push(item);
    }

    toggleTodo(id: number): void {
        const index = this.todos.findIndex((item) => item.id === id);
        if (index > -1) {
            this.todos[index].completed = !this.todos[index].completed;
        }
    }

    get status() {
        let completed = 0,
            remaining = 0;
        this.todos.forEach((todo) => {
            if (todo.completed) {
                completed++;
            } else {
                remaining++;
            }
        });
        return {
            completed,
            remaining,
        };
    }
}

export const TodoStore = new TodoStoreImpl();
