import PostList from './PostList';

const DUMMY_DATA = [
  {
    id: 'p1',
    title: 'post1',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Hortus_Haren._%E2%80%9810_jaar_Kunst_in_de_Hortus%E2%80%99%2C_09-10-2020_%28d.j.b.%29_02.jpg/500px-Hortus_Haren._%E2%80%9810_jaar_Kunst_in_de_Hortus%E2%80%99%2C_09-10-2020_%28d.j.b.%29_02.jpg',
    content: 'test post1',
  },
  {
    id: 'p2',
    title: 'post2',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/2014_Nysa%2C_zesp%C3%B3%C5%82_ko%C5%9Bcio%C5%82a_%C5%9Bw._Jakuba_Starszego_i_%C5%9Bw._Agnieszki.JPG/1280px-2014_Nysa%2C_zesp%C3%B3%C5%82_ko%C5%9Bcio%C5%82a_%C5%9Bw._Jakuba_Starszego_i_%C5%9Bw._Agnieszki.JPG',
    content: 'test post2',
  },
];

const AllPosts = () => {
  return (
    <section>
      <PostList posts={DUMMY_DATA} />
    </section>
  );
};

export default AllPosts;
