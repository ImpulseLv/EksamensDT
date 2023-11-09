
import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import axios from 'axios';

//axios.sendRequest("login", user, password).then(response =>
//var session = response.headers.cookie[[GET SESSION ID]]
//axios.setCookie("JSESSIONID", session)
//)
const Login: React.FC = () => {
    const [isRegistration, setIsRegistration] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleToggleForm = () => {
        setIsRegistration(!isRegistration);
        setUsername('');
        setPassword('');
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            if (isRegistration) {
                // Регистрация
                const response = await axios.post('/register', {
                    username,
                    password,
                });
                console.log('Регистрация успешна', response.data);
            } else {
                // Авторизация
                const response = await axios.post('/login', {
                    username,
                    password,
                });
                console.log('Авторизация успешна', response.data);
            }
        } catch (error) {
            console.error('Произошла ошибка:', error);
        }
    };


};

export default Login;