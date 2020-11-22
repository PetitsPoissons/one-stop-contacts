import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/'); // redirect to home page
    }
    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const { username, email, password, password2 } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ username, email, password });
    }
  };

  return (
    <div className="hex-container">
      <div className="register-container">
        <div className="form-auth">
          <form onSubmit={onSubmit}>
            <input
              placeholder="Enter a username"
              type="text"
              name="username"
              value={username}
              onChange={onChange}
            />

            <input
              placeholder="Enter an email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />

            <input
              placeholder="Enter a password"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              minLength="6"
            />

            <input
              placeholder="Confirm your password"
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              minLength="6"
            />

            <input
              type="submit"
              value="REGISTER"
              className="btn btn-dark btn-block btn-register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
