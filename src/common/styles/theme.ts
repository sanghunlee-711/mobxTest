// my-theme.ts
import { DefaultTheme, TodoTheme } from 'styled-components';

const myTheme: DefaultTheme = {
    borderRadius: '5px',
    basicWidth: '320px',
    color: {
        main: 'cyan',
        sub: 'magenta',
    },
};

const TodoStyle: TodoTheme = {
    margin: '0px',
    color: 'red',
};

export { myTheme, TodoStyle };
