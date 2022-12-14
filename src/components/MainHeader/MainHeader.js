import classes from './MainHeader.module.css';
import Navigation from './Navigation';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Seokstagram</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
        onShowUpload={props.onShowUpload}
      />
    </header>
  );
};

export default MainHeader;
