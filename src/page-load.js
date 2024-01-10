import CoffeeImg from './coffee.jpg'



function restaurantName() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
h1.innerHTML = 'Restaurant Name';

div.appendChild(h1)

    return div;
}
function restaurantNav() {
// create nav container 
    const navContainer = document.createElement('div');
navContainer.id = 'nav-container';
// create ul element 
const ulElement = document.createElement('ul');
// create array of list items
const navItems = ['Breakfast', 'Lunch', 'Dinner']

// loop through nav items
for (let i = 0; i < navItems.length; i++) {
// create li element
const liElement = document.createElement('li');
// set text content of each li element
liElement.textContent = navItems[i];

// append li elements to ul element
ulElement.appendChild(liElement);


}
// append ul element to nav container
navContainer.appendChild(ulElement)

return navContainer;

}



function restaurantImage() {
    const descriptionContainer = document.createElement('div');
    const imgContainer = document.createElement('div');

descriptionContainer.id = 'description-container';
imgContainer.id = 'img-container';




    const img = new Image();
    img.src = CoffeeImg;
    img.alt = 'aerial view of 3 people holding 3 cups of coffee, a latte, a cappuccino and a iced americano in a circle formation';

imgContainer.style.backgroundImage = 'url(img)'


    descriptionContainer.appendChild(imgContainer)
imgContainer.appendChild(img)


    return descriptionContainer;
}
function restaurantDescription() {
    const div = document.createElement('div');
    div.id = 'text-container';
const h1 = document.createElement('h1');
const p = document.createElement('p');

h1.innerHTML = 'food at The Gannon';
p.innerHTML = 'At our establishment, we take pride in ensuring that all of our dishes are freshly prepared. We hold a strong aversion to the use of pesticides and preservatives. To uphold our commitment to quality, we strive to incorporate local, organic, and free-range ingredients whenever possible, depending on their availability. Listed below are some of our most beloved dishes. We encourage you to visit us and experience our ever-evolving menu firsthand.';

div.appendChild(h1)
div.appendChild(p)

return div;



}



export {restaurantName, restaurantImage, restaurantDescription, restaurantNav  }; 