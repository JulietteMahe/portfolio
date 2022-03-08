import React, { useState, useEffect } from 'react';
import Axios from "axios";
import './AppDetail.css';

const AppDetail = (props) => {

    return (
        <div className="AppDetail">
            <img className="mainImg" src={props.globalpic1} alt={props.name} />
            <div className="otherImg">
                <img className="app-img" src={props.globalpic2} alt={props.name} />
                <img className="app-img" src={props.globalpic3} alt={props.name} />
                <img className="app-img" src={props.globalpic4} alt={props.name} />
            </div>            
            <p className='app-name'>{props.name}</p>
            <p className='app-description'>{props.description}</p>
            <p className='app-client'>Réalisé pour un client{props.clientype}.</p>  
        </div>
    )
}

export default AppDetail;