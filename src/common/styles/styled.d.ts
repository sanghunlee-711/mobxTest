import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        basicWidth?: string;
        borderRadius?: string;

        color?: {
            main?: string;
            sub?: string;
        };
    }
    export interface TodoTheme {
        margin?: string;
        color?: string;
    }
}
