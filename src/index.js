// import function components from page-load.js
import {restaurantName, restaurantImage, restaurantDescription } from "./page-load";
// import css style file
import './style.css'


// access content output container
const contentOutput = document.getElementById('content')



// append restaurant name to content output
contentOutput.appendChild(restaurantName());

// append restaurant image to content output
contentOutput.appendChild(restaurantImage());


// access description container 
const descriptionContainer = document.getElementById('description-container')
// append restaurant description to description container
descriptionContainer.appendChild(restaurantDescription())
    

