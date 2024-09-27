import "./AboutMe.css";
import profileImage from "../../images/perfil-image.png";

const Header = ({setActive}) => {
  return (
    <header className="about-me">
      <div className="about-me-row">
        <div className="about-me-left">
          <h1>Nice to meet you!</h1>
          <h1>I am <label className="about-me-name" onClick={() => setActive('Contact')}>Edson Almanza.</label></h1>
          <p>Frontend developer passionate about creating web applications on different platforms and programming languages ​​where the UI is friendly and accessible to users.</p>
          <button className="about-me-button" onClick={() => setActive('Contact')}>CONTACT ME</button>
        </div>
        <div className="about-me-right">
          <img className="about-me-image" src={profileImage} alt="Profile"  />
        </div>
      </div>
    </header>
  );
}

export default Header;