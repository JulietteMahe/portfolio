import React, { useState, useEffect } from 'react';
import Axios from "axios";
import AppDetail from './AppDetail';
import './AppList.css';

const AppList = (props) => {
const [appList, setAppList] = useState([]);

    useEffect(() => {
        if (props.id) {
            /*Axios
                .get(`https://api.jsonserve.com/12vMm4`)
                .then(response => setAppList(response.data.filter(item => item.id === parseInt(props.id))))
                .catch(error => console.log(`API (app) call error: ${error}`))*/
        } else {
            /*Axios
                .get("https://api.jsonserve.com/12vMm4")
                .then((response) => setAppList(response.data))
                .catch(error => console.log(`API (app) call error: ${error}`))*/
        }
    }, [props.id])

    let position = 0;
    
    return (
        <div className="AppList">
            <div class="AppContainer">            
            {[
    {
    "id": 1,
    "name": "Sainstagram",
    "github": "https://github.com/JulietteMahe/sainstagram",
    "netlify": "https://sainstagram.netlify.app/",
    "globalpic1": "https://i.ibb.co/7rDjjhw/2022-03-08-13.png",
    "globalpic2": "https://i.ibb.co/3R1MhGD/2022-03-08-14.png",
    "globalpic3": "https://i.ibb.co/7XHT5nB/2022-03-08-16.png",
    "globalpic4": "https://i.ibb.co/8B5d3vJ/2022-03-08-15.png",
    "globalpic5": "https://i.ibb.co/9g9T6PX/2022-03-09-5.png",
    "description": "Un réseau social destiné aux chevaliers de ta galaxie. Partage tes aventures, tes opinions et déclenche des clashs avec les autres chevaliers",
    "clienttype": "fictif",
    "teamtype": "groupe",
    "stack": [
    "ReactJS ",
    "HTML ",
    "CSS "
    ]
    },
    {
    "id": 2,
    "name": "STUDIO ICH",
    "github": "https://github.com/JulietteMahe/dupre-studioich",
    "netlify": "https://dupre-project.netlify.app/",
    "globalpic1": "https://i.ibb.co/nMqMt0m/2022-03-14-9.png",
    "globalpic2": "https://i.ibb.co/VJ26gzW/2022-03-14-7.png",
    "globalpic3": "https://i.ibb.co/h9x4MS6/2022-03-14-6.png",
    "globalpic4": "https://i.ibb.co/Gxcmbtd/2022-03-14-8.png",
    "globalpic5": "https://i.ibb.co/NTxsH7n/2022-03-14-14.png",
    "description": "Refonte d'un site Wordpress dans le domaine du conseil en image. A venir: paiement en ligne, envoi automatisé de ebooks, back-office de gestion",
    "clienttype": "réel",
    "teamtype": "solo",
    "stack": [
    "ReactJS ",
    "HTML ",
    "CSS "
    ]
    }/*,
    {
    "id": 3,
    "name": "RisQ",
    "github": "https://github.com/JulietteMahe/risQ",
    "netlify": "",
    "globalpic1": "https://i.ibb.co/k4db6Dq/main.png",
    "globalpic2": "https://i.ibb.co/tB02Q0v/1.png",
    "globalpic3": "https://i.ibb.co/fxbCYc1/2.png",
    "globalpic4": "https://i.ibb.co/gZhzHhc/4.png",
    "globalpic5": "https://i.ibb.co/DWSK3mw/5.png",
    "description": "Hackathon Wild Code School & Enedis. Projet de signalisation des risques grâce à la géolocalisation. Version mobile (usage par les agents de terrain)",
    "clienttype": "réel",
    "teamtype": "groupe (2 jours)",
    "stack": [
    "ReactJS ",
    "Express/NodeJS ",
    "HTML ",
    "CSS "
    ]
    }*/
    ].map((app, index) => {
                    return (
                        <AppDetail 
                        key={index} 
                        name={app.name} 
                        github={app.github}
                        netlify={app.netlify}
                        globalpic1={app.globalpic1} 
                        globalpic2={app.globalpic2} 
                        globalpic3={app.globalpic3} 
                        globalpic4={app.globalpic4} 
                        globalpic5={app.globalpic5} 
                        description={app.description} 
                        clienttype={app.clienttype}  
                        teamtype={app.teamtype}
                        stack={app.stack}
                        cardStyle={position}                       
                        />
                    )
                })}
            
            </div>
            
        </div>
    )
}

export default AppList;

/*<Carousel className="carouselList" itemsToShow={1}>
</Carousel>*/