import VeganIcon from './vegan.png';

// create object constructor 
function MenuItem(title,description,price,vegan) {
    this.title = title,
    this.description = description;
    this.price = price;
    this.vegan = vegan;
    }

function lunchHeading() {
    const h1Container = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Lunch'

h1Container.append(h1)
return h1Container;

}

// small bites sub section of lunch

// create empty array to store menu item object instances
let smallBitesArray = [];

// function to create new menu item and add to array
function createSmallBitesMenuItem(title, description, price,vegan) {
const item = new MenuItem(title,description,price,vegan);
smallBitesArray.push(item)
}

// create menu items for small bites
createSmallBitesMenuItem(
    'Classic Scones (Baked Daily',
    'Two warm scones layered with fresh cream and homeade berry compote',
    150,
    true
)

createSmallBitesMenuItem(
    'CROISSANT (PLAIN)',
'add butter & homemade berry compote +40',
70,
true 
);
createSmallBitesMenuItem(
'Dark Chocolate Croissant',
' Cocoa 60% dark chocolate ganache, hazelnut crumble',
120,
true
)
createSmallBitesMenuItem(
'Almond Croissant',
'homemade almond créme, toasted flaked almonds',
    120,
    true
)


// create function to loop through menu items array and append to html elements
function loopMenuItems() {
    const menuItemContainer = document.createElement('div')   
    menuItemContainer.classList.add('menu-item')
for (let i = 0; i < smallBitesArray.length; i++) {
    const element = smallBitesArray[i];


    const menuItemTitleContainer = document.createElement('div');
    menuItemTitleContainer.classList.add('title-container');
    const menuItemTitle = document.createElement('h4');
    const menuItemVeganIcon = document.createElement('img');
    const menuItemDescription = document.createElement('p');
    const menuItemPrice = document.createElement('p');

    menuItemTitle.innerHTML = element.title;
menuItemVeganIcon.src = VeganIcon;
menuItemVeganIcon.alt = 'Vegan'
menuItemVeganIcon.width = 50;

    menuItemDescription.innerHTML =element.description;
    menuItemPrice.innerHTML = element.price;
    
    menuItemContainer.append(menuItemTitleContainer)
    menuItemTitleContainer.appendChild(menuItemTitle)
    // check if vegan boolean value is true or false
    if (element.vegan) {
    menuItemTitleContainer.appendChild(menuItemVeganIcon)
    }
    menuItemContainer.appendChild(menuItemDescription)
    menuItemContainer.appendChild(menuItemPrice)
    
}
return menuItemContainer;


}

function smallBitesSelection() {
    
    const parentContainer = document.createElement('div');
    parentContainer.id = 'small-bites-selection-container';
const servedDaily = document.createElement('h2');
servedDaily.innerHTML = 'Breakfast Served Daily'
const smallBitesTitle = document.createElement('h1');
smallBitesTitle.innerHTML = 'Baked Selection ( 7:00 - 16:00 )';


// append baked selection menu items to parent container
parentContainer.appendChild(servedDaily);
parentContainer.appendChild(smallBitesTitle);
parentContainer.appendChild(loopMenuItems())


return parentContainer;
}
export {
    smallBitesSelection
}