import VeganIcon from './vegan.png';


function breakfastHeading() {
    const h1Container = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Breakfast'

h1Container.append(h1)
return h1Container;


}

// create object constructor 
function MenuItem(title,description,price,vegan) {
this.title = title,
this.description = description;
this.price = price;
this.vegan = vegan;
}
// create empty array to store menu item object instances
let menuItemsArray = [];

// function to create new menu item and add to array
function createMenuItemInstance(title, description, price,vegan) {
const item = new MenuItem(title,description,price,vegan);
menuItemsArray.push(item)
}

// create menu items for baked selection
createMenuItemInstance(
    'Classic Scones (Baked Daily',
    'Two warm scones layered with fresh cream and homeade berry compote',
    150,
    true
)

createMenuItemInstance(
    'CROISSANT (PLAIN)',
'add butter & homemade berry compote +40',
70 
);
createMenuItemInstance(
'Dark Chocolate Croissant',
' Cocoa 60% dark chocolate ganache, hazelnut crumble',
120
)
createMenuItemInstance(
'Almond Croissant',
'homemade almond créme, toasted flaked almonds',
    120
)


// create function to loop through menu items array and append to html elements
function loopMenuItems() {
    const menuItemContainer = document.createElement('div')   
    menuItemContainer.classList.add('menu-item')
for (let i = 0; i < menuItemsArray.length; i++) {
    const element = menuItemsArray[i];
console.log(element);

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
menuItemVeganIcon.height = 50
    menuItemDescription.innerHTML =element.description;
    menuItemPrice.innerHTML = element.price;
    
    menuItemContainer.append(menuItemTitleContainer)
    menuItemTitleContainer.appendChild(menuItemTitle)
    // check if vegan boolean value is true or false
    if (element.vegan) {
    menuItemTitleContainer.appendChild(menuItemVeganIcon);
    }
    menuItemContainer.appendChild(menuItemDescription)
    menuItemContainer.appendChild(menuItemPrice)
    
}
return menuItemContainer;


}

function bakedSelection() {
    
    const parentContainer = document.createElement('div');
    parentContainer.id = 'baked-selection-container';
const servedDaily = document.createElement('h2');
servedDaily.innerHTML = 'Breakfast Served Daily'
const bakedSelectionTitle = document.createElement('h1');
bakedSelectionTitle.innerHTML = 'Baked Selection ( 7:00 - 16:00 )';


// append baked selection menu items to parent container
parentContainer.appendChild(servedDaily);
parentContainer.appendChild(bakedSelectionTitle);
parentContainer.appendChild(loopMenuItems())
// parentContainer.appendChild(item1)
// parentContainer.appendChild(item2)
// parentContainer.appendChild(item3)
// parentContainer.appendChild(item4)

return parentContainer;
}












export {breakfastHeading, bakedSelection }