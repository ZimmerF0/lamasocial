import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  // TEMPORARY

  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://sportishka.com/uploads/posts/2022-02/1645687196_51-sportishka-com-p-ulibayushchiisya-chelovek-turizm-krasivo-f-71.jpg",
    },
    {
      id: 2,
      name: "Janet Doe",
      userId: 2,
      profilePic:
        "https://yobte.ru/uploads/posts/2019-11/zastenchivye-devushki-70-foto-62.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://sportishka.com/uploads/posts/2022-02/1645687196_51-sportishka-com-p-ulibayushchiisya-chelovek-turizm-krasivo-f-71.jpg",
    },
  ];
  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
