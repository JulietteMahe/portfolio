import cv from "./resume.png";
import './CV.css';

function CV() {
  return (
    <div className="CV">
     <div className="cvContainer">
       <img src={cv} alt="cv" className="cvPicture"></img>
     </div>
    </div>
  );
}

export default CV;