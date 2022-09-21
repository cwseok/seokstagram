import PostItem from './PostItem';
import classes from './PostList.module.css';

const PostList = (props) => {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <PostItem
          key={post.id}
          id={post.id}
          image={post.image}
          title={post.title}
          content={post.content}
        />
      ))}
    </ul>
  );
};

export default PostList;
