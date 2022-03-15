import ButtonMailto from "./ButtonMailto.jsx";
import darkLinkedin from "../../assets/pictures/darkLinkedin.png";
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <div className="contactCard">  
        <p className="contactText">Vous voulez en savoir plus ?</p>      
          <div className="linkedinButton">
            <a href="https://www.linkedin.com/in/juliette-mahe-webdev/" className="linkedinLink">
              <p>Retrouvez-moi sur Linkedin</p>
              <img className="linkedinLogo"src={darkLinkedin}></img>
            </a>
          </div>        
        <ButtonMailto className="contactButton" label="Ecrivez-moi un email" mailto="mailto:mahe.juliette@outlook.com" />
      </div>
    </div>
  );
}

export default Contact;