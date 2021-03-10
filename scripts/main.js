console.log("Welcome to the main module")
import {getAPODData} from "./DataManager.js";
import { APOD } from "./APOD.js";

const astronomyPicture = () => {
    const DOMTarget = document.querySelector(".apod");
    getAPODData().then(apodData => {
        console.log(apodData)
        DOMTarget.innerHTML = APOD(apodData);
    })
}

astronomyPicture();