import me from "./JuliettebyCarole.jpg";
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="aboutMeContainer">
        <div className="devId">
          <div className="idPicContainer">
            <img src={me} className="idPicture"></img>
          </div>
          <div className="idNameContainer">
            <p className="idName">Juliette Mahé</p>
          </div>
          <div className="titleJobContainer">
            <p className="titleJob">Développeur Web junior</p>
            <p className="stackJob">ReactJS NodeJS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;