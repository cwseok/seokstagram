import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './SignUpForm.module.css';
import { Fragment, useRef } from 'react';

const SignUpForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();

  const signupSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredName = nameInputRef.current.value;

    const memberData = {
      email: enteredEmail,
      password: enteredPassword,
      name: enteredName,
    };

    props.onAddMember(memberData);
  };
  return (
    <Fragment>
      <h1 className={classes.title}>Sign Up</h1>
      <Card className={classes.signup}>
        <form onSubmit={signupSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>E-Mail</label>
            <input type='email' required id='email' ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              required
              id='password'
              ref={passwordInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Name</label>
            <input type='name' required id='name' ref={nameInputRef} />
          </div>
          <div className={classes.actions}>
            <Button onClick={props.onCancel}>Cancel</Button>
            <button>Sign up</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default SignUpForm;
