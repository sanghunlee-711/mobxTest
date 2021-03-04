import React from 'react';
import { LoginTemplate } from './template/template';
import { LoginRepo } from '../../stores/repository/LoginRepository';

const Login = (): JSX.Element => {
    return (
        <>
            <LoginTemplate loginRepo={LoginRepo} />
        </>
    );
};

export default Login;
