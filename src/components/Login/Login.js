import LoginForm from './LoginForm';

const Login = (props) => {
  return <LoginForm onLogin={props.onLogin} />;
};
export default Login;
