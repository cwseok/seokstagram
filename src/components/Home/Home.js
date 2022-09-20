import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <form>
        <div>
          <label>사진</label>
        </div>
        <div>
          <label>내용</label>
        </div>
      </form>
    </Card>
  );
};

export default Home;
