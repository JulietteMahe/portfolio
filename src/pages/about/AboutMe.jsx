import me from "./JuliettebyCarole.jpg";
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="AboutMe">
      <div className="flipCardContainer">
        <div className="flipCard">
          <div className="flipCardFront">
            <div className="idPicContainer">
              <img src={me} className="idPicture" alt="my-photograph"></img>
            </div>
            <div className="idInfos">
              <div className="idNameContainer">
                <p className="idName">Juliette Mahé</p>
              </div>
              <div className="titleJobContainer">
                <p className="titleJob">Développeur Web junior</p>
                <p className="stackJob">ReactJS NodeJS</p>
              </div>
            </div>
          </div>

          <div className="flipCardBack">
            <div className="storyInfos">
              <p className="storyText">Après 10 années dans le commerce dont 5 en tant que manager, j'ai choisi, il y a 2 ans, de me reconvertir dans le développement web <br/>
              Animée par ma soif d'apprendre  et l'envie de me dépasser chaque jour, je suis passée par une formation en full remote afin d'expérimenter le dev en mode projet et d'acquérir des automatismes. <br/>
              A la suite de cette formation j'ai pû valider mes compétences par le biais d'un titre RNCP, venu clôturer également une période de stage chez Mailmeteor <br/>
              Ayant connu des expériences diverses, du développement web au développement éditique (CCM), je sais après cette période de découverte quel type de structure et de poste je recherche désormais afin de continuer à m'épanouir. <br/>
              Je souhaite donc aujourd'hui retrouver le développement web, idéalement au sein de projets à visée sociétale . <br/>
              Trouvez plus d'infos à la rubrique CV 📝 !</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;