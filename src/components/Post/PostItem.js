import Card from '../UI/Card/Card';
import classes from './PostItem.module.css';

const PostItem = (props) => {
  return (
    <Card className={classes.postitem}>
      <div className={classes.postimage}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.control}>
        <h2>{props.title}</h2>
        <h3>{props.content}</h3>
      </div>
    </Card>
  );
};

export default PostItem;
