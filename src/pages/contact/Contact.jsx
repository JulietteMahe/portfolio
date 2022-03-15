import ButtonMailto from "./ButtonMailto.jsx";
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <div className="contactCard">
      <ButtonMailto className="contactButton" label="Ecrivez-moi un email" mailto="mailto:mahe.juliette@outlook.com" />
      </div>
    </div>
  );
}

export default Contact;