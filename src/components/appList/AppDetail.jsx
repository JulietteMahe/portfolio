import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './AppDetail.css';

const AppDetail = (props) => {

    return (
        <div className="AppDetail">
            <div className="firstBox">
                <div className="mainImgContainer">
                    <img className="mainImg" src={props.globalpic1} alt={props.name} />
                </div>
                <div className='text-content'>       
                    <p className='app-name'>{props.name}</p>
                    <div className='app-text'>
                       <p className='app-description'>{props.description}</p>
                       <p className='app-client'>Réalisé pour un client {props.clienttype}.</p>  
                       <p className='app-stack'>Stack utilisée {props.stack}</p>
                    </div>
                </div> 
            </div>              
            <div className="secondBox">
                <img className="app-secondary-img" src={props.globalpic2} alt={props.name} />
                <img className="app-secondary-img" src={props.globalpic3} alt={props.name} />
                <img className="app-secondary-img" src={props.globalpic4} alt={props.name} />
                <img className="app-secondary-img" src={props.globalpic5} alt={props.name} />
            </div> 
        </div>
    )
}

export default AppDetail;