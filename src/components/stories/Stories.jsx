import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss";

const Stories = () => {
  const {currentUser} = useContext(AuthContext);

  //Temporary
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://spruko.com/demo/estateone/html/images/team-member-detail1.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://spruko.com/demo/estateone/html/images/team-member-detail1.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://spruko.com/demo/estateone/html/images/team-member-detail1.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://spruko.com/demo/estateone/html/images/team-member-detail1.jpg",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {stories.map(story => (
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
