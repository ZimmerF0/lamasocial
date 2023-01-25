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
        "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://sportishka.com/uploads/posts/2022-02/1645687196_51-sportishka-com-p-ulibayushchiisya-chelovek-turizm-krasivo-f-71.jpg",
    },
    {
      id: 2,
      name: "Janet Doe",
      userId: 2,
      profilePic:
        "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://sportishka.com/uploads/posts/2022-02/1645687196_51-sportishka-com-p-ulibayushchiisya-chelovek-turizm-krasivo-f-71.jpg",
    },
  ];
  return <div className="posts">
    {posts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </div>;
};

export default Posts;
