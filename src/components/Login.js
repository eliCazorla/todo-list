import React, { useState } from 'react';
import { withRouter } from  'react-router-dom';

const Login = ({ history }) => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUserName = ({target : {value}}) => {
        setUserName(value)
    }

    const handleChangePassword = ({target : {value}}) => {
        setPassword(value)
    }

    const btnLogin = () => {
        const data = {
            username: username,
            password: password,
        }

        const url = "https://trainning-rest-api.herokuapp.com/v1/users/login";
        fetch('https://trainning-rest-api.herokuapp.com/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(res => {
        console.log('success!', res);
        if (res.status) {
          alert(res.message);
        } else {
          sessionStorage.setItem('token', res.token);
          sessionStorage.setItem('loggedInUser', JSON.stringify(res));
          // para recuperarlo --> const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
          history.push('/tareas');
        }
      })
      .catch(res => console.log('error... :-(', res));
    }

    return (
        <div>
            <input type="text" value={username} placeholder="Username" onChange={handleChangeUserName}/>      
            <input type="password" value={password} placeholder="Password" onChange={handleChangePassword}/>
            <button onClick={btnLogin}>Log In</button> 
        </div>
    )
}

export default withRouter(Login);
