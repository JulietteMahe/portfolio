import React, { useState, useEffect } from 'react';
import Axios from "axios";
import AppDetail from './AppDetail';
import './AppList.css';

const AppList = (props) => {
const [appList, setAppList] = useState([]);

    useEffect(() => {
        if (props.id) {
            Axios
                .get(`https://api.jsonbin.io/b/62279548a703bb674925632c/17`)
                .then(response => setAppList(response.data.filter(item => item.id === parseInt(props.id))))
                .catch(error => console.log(`API (app) call error: ${error}`))
        } else {
            Axios
                .get("https://api.jsonbin.io/b/62279548a703bb674925632c/17")
                .then((response) => setAppList(response.data))
                .catch(error => console.log(`API (app) call error: ${error}`))
        }
    }, [props.id])

    let position = 0;
    
    return (
        <div className="AppList">
            <div className="AppToDo">Cliquez sur les images et icônes pour en découvrir plus</div>
            <div class="AppContainer">            
            {appList
                .map((app, index) => {
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