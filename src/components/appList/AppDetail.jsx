import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './AppDetail.css';
import Logo from "../../assets/pictures/pngegg.png"

const AppDetail = (props) => {

    return (
        <div className="AppDetail">
            <div className="firstBox">
                <div className="mainImgContainer">
                    <a href={props.netlify}>
                       <img className="mainImg" src={props.globalpic1} alt={props.name} />
                    </a>
                </div>
                <div className='text-content'>  
                    <div className='cardTitle'>
                       <p className='app-name'>{props.name}</p>
                       <a href={props.github}>
                          <img className="githubLogo" src={Logo} alt="Github link"></img>
                       </a>
                    </div> 
                    <div className='app-text'>
                       <p className='app-description'>{props.description}</p>
                       <p className='app-client'>Réalisé en {props.teamtype} pour un client {props.clienttype}.</p>  
                       <p className='app-stack'>Stack utilisée {props.stack}</p>
                    </div>
                </div> 
            </div>              
            <div className="secondBox">
            <a href={props.netlify}>
                <img className="app-secondary-img" src={props.globalpic2} alt={props.name} />
                <img className="app-secondary-img" src={props.globalpic3} alt={props.name} />
                <img className="app-secondary-img" src={props.globalpic4} alt={props.name} />
                <img className="app-secondary-img" src={props.globalpic5} alt={props.name} />
            </a>
            </div> 
        </div>
    )
}

export default AppDetail;