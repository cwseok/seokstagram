import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Upload.module.css';
import Modal from '../UI/Modal/Modal';

const Upload = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h1 className={classes.title}>Upload</h1>
      <Card className={classes.upload}>
        <form>
          <div className={classes.control}>
            <label>File</label>
            <input type='file' />
          </div>
          <div className={classes.control}>
            <label>Content</label>
            <input type='text' />
          </div>
          <div className={classes.actions}>
            <Button>Upload</Button>
            <Button onClick={props.onClose}>Cancel</Button>
          </div>
        </form>
      </Card>
    </Modal>
  );
};

export default Upload;
