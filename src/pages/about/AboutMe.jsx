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
              <p className="storyText">Après 10 années dans le commerce dont 5 en tant que manager, j'ai choisi de me réinventer dans le développement web 💻 </p>
              <p className="storyText">Le but? Etancher ma soif d'apprendre 🧠 et trouver un domaine en constante évolution où l'esprit d'équipe et l'envie de se dépasser sont les clés du succès. </p>
              <p className="storyText">J'ai alors intégré le cursus Web dev de la Wild code school en remote pour 5 mois de folie qui s'achèvent bientôt 🎓 : une très belle expérience sur le plan professionnel et humain! </p>
              <p className="storyText">L'heure est donc venue de mettre mes compétences nouvellement acquises à votre service 🎇 Je recherche donc un stage démarrant à partir de mi-avril, de 4 à 6 mois. Rennaise d'origine, je suis aussi intéressée par Paris et Nantes: en effet, le Remote , même partiel, ne me fait pas peur ! </p>
              <p className="storyText">Trouvez plus d'infos à la rubrique CV 📝 !</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutMe;