import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './LoginForm.module.css';
import { useState, useEffect } from 'react';
import SignUp from './SignUp';

const LoginForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  const startSignUpHandler = () => {
    setIsSignUp(true);
  };

  const stopSignUpHandler = () => {
    setIsSignUp(false);
  };

  return (
    <Card className={classes.login}>
      {!isSignUp && (
        <form onSubmit={submitHandler}>
          <div
            className={`${classes.control} ${
              emailIsValid === false ? classes.invalid : ''
            }`}
          >
            <label htmlFor='email'>E-Mail</label>
            <input
              type='email'
              id='email'
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
            />
          </div>
          <div
            className={`${classes.control} ${
              passwordIsValid === false ? classes.invalid : ''
            }`}
          >
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button type='submit' disabled={!formIsValid}>
              Login
            </Button>
            <Button onClick={startSignUpHandler}>Sign up</Button>
          </div>
        </form>
      )}
      {isSignUp && <SignUp onCancel={stopSignUpHandler} />}
    </Card>
  );
};

export default LoginForm;
