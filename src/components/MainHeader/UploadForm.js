import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './UploadForm.module.css';
import Modal from '../UI/Modal/Modal';
import { useRef } from 'react';

const UploadForm = (props) => {
  const fileInputRef = useRef();
  const titleInputRef = useRef();
  const contentInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredImage = fileInputRef.current.vaule;
    const enteredTitle = titleInputRef.current.vaule;
    const enteredContent = contentInputRef.current.vaule;

    const postData = {
      image: enteredImage,
      title: enteredTitle,
      content: enteredContent,
    };

    console.log(postData);
  };

  return (
    <Modal onClose={props.onClose}>
      <h1 className={classes.title}>Upload</h1>
      <Card className={classes.upload}>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor='file'>Image</label>
            <input type='file' required id='file' ref={fileInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='title'>Title</label>
            <input type='text' required id='title' ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='content'>Content</label>
            <textarea type='text' required id='content' ref={contentInputRef} />
          </div>
          <div className={classes.actions}>
            <button>Upload</button>
            <Button onClick={props.onClose}>Cancel</Button>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default UploadForm;
