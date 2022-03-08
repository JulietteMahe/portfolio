import React, { useState, useEffect } from 'react';
import Axios from "axios";
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
                .get(`https://api.jsonbin.io/b/62279548a703bb674925632c`)
                .then(response => setAppList(response.data.filter(item => item.id === parseInt(props.id))))
                .catch(error => console.log(`API (app) call error: ${error}`))
        } else {
            Axios
                .get("https://api.jsonbin.io/b/62279548a703bb674925632c")
                .then((response) => setAppList(response.data))
                .catch(error => console.log(`API (app) call error: ${error}`))
        }
    }, [props.id])

    function getAppList() {
        let list = [...appList];
        return list;
    }
    
    return (
        <div className="App-list">
                {appList
                .map((app, index) => (
                        <AppDetail
                        key={index} 
                        name={app.name} 
                        globalpic1={app.globalpic1} 
                        globalpic2={app.globalpic2} 
                        globalpic3={app.globalpic3} 
                        globalpic4={app.globalpic4} 
                        description={app.description} 
                        clientype={app.clientype}                         
                        />
                ))}
        </div>
    )
}

export default AppList;