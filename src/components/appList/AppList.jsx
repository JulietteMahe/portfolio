import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Carousel from "react-elastic-carousel";
import AppDetail from './AppDetail';
import './AppList.css';

const AppList = (props) => {
const [appList, setAppList] = useState([]);

    useEffect(() => {
        if (props.id) {
            // Axios
            //     .get(`https://api.jsonbin.io/b/621a0012c4790b3406241a82/?userid=${props.id}`)
            // Change this due to API switch
            Axios
                .get(`https://api.jsonbin.io/b/62279548a703bb674925632c/2`)
                .then(response => setAppList(response.data.filter(item => item.id === parseInt(props.id))))
                .catch(error => console.log(`API (app) call error: ${error}`))
        } else {
            Axios
                .get("https://api.jsonbin.io/b/62279548a703bb674925632c/2")
                .then((response) => setAppList(response.data))
                .catch(error => console.log(`API (app) call error: ${error}`))
        }
    }, [props.id])

    let position = 0;
    
    return (
        <div className="AppList">
            
            {appList
                .map((app, index) => {
                    return (
                        <AppDetail 
                        key={index} 
                        name={app.name} 
                        globalpic1={app.globalpic1} 
                        globalpic2={app.globalpic2} 
                        globalpic3={app.globalpic3} 
                        globalpic4={app.globalpic4} 
                        globalpic5={app.globalpic5} 
                        description={app.description} 
                        clienttype={app.clienttype}  
                        cardStyle={position}                       
                        />
                    )
                })}
            
        </div>
    )
}

export default AppList;

/*<Carousel className="carouselList" itemsToShow={1}>
</Carousel>*/