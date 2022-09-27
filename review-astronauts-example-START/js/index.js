// js here.
import'bootstrap/dist/css/bootstrap.min.css';

import { getAstronautList } from './api/astronaut';
import { renderAstronautListItem } from './dom/astronaut'

getAstronautList().then((astronautData)=> {
    let astroListElement = document.querySelector(".astronaut-list")
    console.log("Successful fetch")
    console.log(astronautData)
    astronautData.results.map((data)=> {
        renderAstronautListItem(data, astroListElement)
    })
})