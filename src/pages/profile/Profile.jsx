import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          className="cover"
          src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649286935_53-vsegda-pomnim-com-p-foto-okeana-i-plyazha-v-khoroshem-kachestv-69.jpg"
          alt=""
        />
        <img
          className="profilePic"
          src="https://www.ejin.ru/wp-content/uploads/2018/11/pretty-girl-wallpaper.jpg"
          alt=""
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://instagram.com">
              <InsagramIcon fontSize="large" />
            </a>
            <a href="https://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://linkedIn.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://pinterest.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
