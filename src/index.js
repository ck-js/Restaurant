// import function components from page-load.js
import {restaurantName, restaurantImage, restaurantDescription, restaurantNav } from "./page-load";
// import components from breakfast.js
import { breakfastHeading, bakedSelection, breakfastSelection,
optionalOmeletteSelection } from "./breakfast";
// import lunch module components
import {
    smallBitesSelection
} from './lunch'



// import css style file
import './style.css'

// get body element
const body = document.body;

// access content output container
const contentOutput = document.getElementById('content')


// append restaurant name to content output
body.insertBefore(restaurantName(), contentOutput)

// append nav to content output
body.insertBefore(restaurantNav(), contentOutput)

// append restaurant image to content output
contentOutput.appendChild(restaurantImage());

// access description container 
const descriptionContainer = document.getElementById('description-container')
// append restaurant description to description container
descriptionContainer.appendChild(restaurantDescription())
    
// get nav ul element
const ulElement = document.getElementById('nav-ul')
// get li elements of nav bar
const liElements = ulElement.getElementsByTagName('li');
for (let i = 0; i < liElements.length; i++) {
    const element = liElements[i];
    element.addEventListener('click', (event) => {
 // clear the elements in content container
        
// determine which li item was clicked
if (event.target.id === 'Lunch') {
    ClearContentDom(contentOutput);
    contentOutput.appendChild(smallBitesSelection())
    // contentOutput.appendChild(bakedSelection())
    // contentOutput.appendChild(breakfastSelection())
    // contentOutput.appendChild(optionalOmeletteSelection())


}

if (event.target.id === 'Breakfast') {
    ClearContentDom(contentOutput);
    contentOutput.appendChild(breakfastHeading())
    contentOutput.appendChild(bakedSelection())
    contentOutput.appendChild(breakfastSelection())
    contentOutput.appendChild(optionalOmeletteSelection())
}
    })

}
function ClearContentDom(parentElement) {
    
    // loop through all child elements of content container
// for (let i = 0; i < contentOutput.children.length; i++) {
//     const childElements = contentOutput.children[i];
//     contentOutput.removeChild(childElements)
    

while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild)
}


}




