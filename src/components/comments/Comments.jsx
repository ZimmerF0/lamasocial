import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  //TEMPORARY
  const comments = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor sit amet consectetur adipisicing elit",
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
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map(comment => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
