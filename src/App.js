import { Fragment, useState, useEffect } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import Home from './components/Home/Home';
import Upload from './components/MainHeader/Upload';
import Login from './components/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const showUploadHandler = () => {
    setShowUpload(true);
  };

  const hideUploadHandler = () => {
    setShowUpload(false);
  };

  return (
    <Fragment>
      {showUpload && <Upload onClose={hideUploadHandler} />}
      <MainHeader
        isAuthenticated={isLoggedIn}
        onLogout={logoutHandler}
        onShowUpload={showUploadHandler}
      />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Fragment>
  );
}

export default App;
