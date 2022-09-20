import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './SignUp.module.css';
import { Fragment } from 'react';

const SignUp = (props) => {
  return (
    <Fragment>
      <h1 className={classes.title}>Sign Up</h1>
      <Card className={classes.signup}>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>E-Mail</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <div className={classes.control}>
            <label>Name</label>
            <input type='name' id='name' />
          </div>
          <div className={classes.actions}>
            <Button onClick={props.onCancel}>Cancel</Button>
            <Button>Sign up</Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default SignUp;
