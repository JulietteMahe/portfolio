import cv from "./CV.png";
import './CV.css';

function CV() {
  return (
    <div className="CV">     
       <img src={cv} alt="cv" className="cvPicture"></img>     
    </div>
  );
}

export default CV;