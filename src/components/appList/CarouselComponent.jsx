import React from "react";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent(props) {
    const [appList, setAppList] = useState([]);

    useEffect(() => {
        if (props.id) {
            Axios
                .get(`https://api.jsonbin.io/b/62279548a703bb674925632c/8`)
                .then(response => setAppList(response.data.filter(item => item.id === parseInt(props.id))))
                .catch(error => console.log(`API (app) call error: ${error}`))
        } else {
            Axios
                .get("https://api.jsonbin.io/b/62279548a703bb674925632c/8")
                .then((response) => setAppList(response.data))
                .catch(error => console.log(`API (app) call error: ${error}`))
        }
    }, [props.id])
    
    return (
        <div class="carousel-wrapper">
            <Carousel useKeyboardArrows>
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
            </Carousel>
        </div>
    );
}