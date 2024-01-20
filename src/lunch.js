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
    'Caesar Salad',
    'gem lettuce, pecorino, bokkom dressing, anchovies, herbed sourdough croutons',
    240,
    false
)
createSmallBitesMenuItem(
    'BURRATA & TOMATO SALAD',
'burrata, mixed tomatoes, basil, honey & balsamic vinaigrette, sourdough',
360,
true 
);
createSmallBitesMenuItem(
'WALDORF SALAD',
'gem lettuce, apple, grapes, celery, walnut, raisins, chives, red onion, creamy homemade dressing',
190,
true
)
createSmallBitesMenuItem(
'CHICKEN LIVER PARFAIT',
'butternut chutney, banana bread, crispy chicken skins',
    240,
    false
)
createSmallBitesMenuItem(
    'STEAK TARTARE',
    'dry-aged sirloin, cured egg yolk, horseradish, capers, red onion, chives, lavosh crackers',
        300,
        false
)
createSmallBitesMenuItem(
        '´BAKED CAMEMBERT',
        'Fresh garlic, thymeloop HouseBurgers white wine, Proof Bakery sourdough toast, homemade orange marmalade',
            310,
            true
    )
        
// create function to loop through menu items array and append to html elements
function loopSmallBitesMenuItems() {
    const menuItemContainer = document.createElement('div')   
    menuItemContainer.classList.add('menu-item')
for (let i = 0; i < smallBitesArray.length; i++) {
    const element = smallBitesArray[i];


    const menuItemTitleContainer = document.createElement('div');
    menuItemTitleContainer.classList.add('title-container');
    const menuItemTitle = document.createElement('h4');
    const menuItemVeganIcon = document.createElement('img');
    const menuItemDescription = document.createElement('p');
    const menuItemPrice= document.createElement('p');

    menuItemTitle.innerHTML = element.title;
menuItemVeganIcon.src = VeganIcon;
menuItemVeganIcon.alt = 'Vegan'
menuItemVeganIcon.width = 50;

    menuItemDescription.innerHTML =element.description;
    menuItemPrice.innerHTML = element.price;
    
    menuItemContainer.append(menuItemTitleContainer)
    menuItemTitleContainer.appendChild(menuItemTitle)
    // check if loopHouseBurgers boolean value is true or false
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
servedDaily.innerHTML = 'Lunch Served Daily(11:30 - 16:30'
const smallBitesTitle = document.createElement('h1');
smallBitesTitle.innerHTML = 'Small Bites Selection';

// append small bites selection menu items to parent container
parentContainer.appendChild(servedDaily);
parentContainer.appendChild(smallBitesTitle);
parentContainer.appendChild(loopSmallBitesMenuItems())

return parentContainer;
}

 
// house burgers sub section of lunch

// create empty array to store menu item object instances
let houseBurgersArray = [];

// function to create new menu item and add to array
function createHouseBurgersMenuItem(title, description, price,vegan) {
const item = new MenuItem(title,description,price,vegan);
houseBurgersArray.push(item)
}

// create menu items for house burgers
createHouseBurgersMenuItem(
    'CAFÉ CHARLES BURGER',
    '160g grass-fed Usana Farm beef patty OR free-range chicken breast, homemade bun, bbq sauce, shredded gem lettuce, red onion mayo, mature cheddar',
    290,
    false
)

// create function to loop through menu items array and append to html elements
function loopHouseBurgersMenuItems() {
    const menuItemContainer = document.createElement('div')   
    menuItemContainer.classList.add('menu-item')
for (let i = 0; i < houseBurgersArray.length; i++) {
    const element = houseBurgersArray[i];


    const menuItemTitleContainer = document.createElement('div');
    menuItemTitleContainer.classList.add('title-container');
    const menuItemTitle = document.createElement('h4');
    const menuItemVeganIcon = document.createElement('img');
    const menuItemDescription = document.createElement('p');
    const menuItemPrice= document.createElement('p');

    menuItemTitle.innerHTML = element.title;
menuItemVeganIcon.src = VeganIcon;
menuItemVeganIcon.alt = 'Vegan'
menuItemVeganIcon.width = 50;

    menuItemDescription.innerHTML =element.description;
    menuItemPrice.innerHTML = element.price;
    
    menuItemContainer.append(menuItemTitleContainer)
    menuItemTitleContainer.appendChild(menuItemTitle)
    // check if loopHouseBurgers boolean value is true or false
    if (element.vegan) {
    menuItemTitleContainer.appendChild(menuItemVeganIcon)
    }
    menuItemContainer.appendChild(menuItemDescription)
    menuItemContainer.appendChild(menuItemPrice)
    
}
return menuItemContainer;

}

function houseBurgersSelection() {
    const parentContainer = document.createElement('div');
    parentContainer.id = 'house-burgers-selection-container';
// const servedDaily = document.createElement('h2');
// servedDaily.innerHTML = 'House Burgers'
const houseBurgerTitle = document.createElement('h1');
houseBurgerTitle.innerHTML = 'House Burgers';

// append small bites selection menu items to parent container
// parentContainer.appendChild(servedDaily);
parentContainer.appendChild(houseBurgerTitle);
parentContainer.appendChild(loopHouseBurgersMenuItems())

return parentContainer;
}



// main plates sub section for lunch menu items

// create empty array to store menu item object instances
let mainPlatesArray = [];

// function to create new menu item and add to array
function createMainPlatesMenuItem(title, description, price,vegan) {
const item = new MenuItem(title,description,price,vegan);
mainPlatesArray.push(item)
}

// create menu items for main plates
createMainPlatesMenuItem(
    'OVEN BAKED CHICKEN POT PIE',
    'Free-range chicken, carrot, celery, peas, cream, puff pastry, baby leaf salad, tomato salsa, feta.',
    280,
    false
)
createMainPlatesMenuItem(
    'RIB-EYE STEAK',
    '250g free-range beef rib-eye, Café de Paris butter',
    560,
    false
)
createMainPlatesMenuItem(
    'PORK BELLY',
    'Sweet potato mash, almond flakes, green beans, baby carrot, chimichurri.',
    520,
    false
)
createMainPlatesMenuItem(
    'PEA, TRUFFLE & MINT RISOTTO',
    'cream, peas, mint, white truffle oil, pecorino crisps, lemon zest',
    290,
    false
)
createMainPlatesMenuItem(
    'FISH OF THE DAY',
    'charred pak choi, mango chili salsa, herbed basmati rice',
    'TBA',
    false
)
// create function to loop through menu items array and append to html elements
function loopMainPlatesMenuItems() {
    const menuItemContainer = document.createElement('div')   
    menuItemContainer.classList.add('menu-item')
for (let i = 0; i < mainPlatesArray.length; i++) {
    const element = mainPlatesArray[i];


    const menuItemTitleContainer = document.createElement('div');
    menuItemTitleContainer.classList.add('title-container');
    const menuItemTitle = document.createElement('h4');
    const menuItemVeganIcon = document.createElement('img');
    const menuItemDescription = document.createElement('p');
    const menuItemPrice= document.createElement('p');

    menuItemTitle.innerHTML = element.title;
menuItemVeganIcon.src = VeganIcon;
menuItemVeganIcon.alt = 'Vegan'
menuItemVeganIcon.width = 50;

    menuItemDescription.innerHTML =element.description;
    menuItemPrice.innerHTML = element.price;
    
    menuItemContainer.append(menuItemTitleContainer)
    menuItemTitleContainer.appendChild(menuItemTitle)
    // check if loopHouseBurgers boolean value is true or false
    if (element.vegan) {
    menuItemTitleContainer.appendChild(menuItemVeganIcon)
    }
    menuItemContainer.appendChild(menuItemDescription)
    menuItemContainer.appendChild(menuItemPrice)
    
}
return menuItemContainer;

}

function mainPlatesSelection() {
    const parentContainer = document.createElement('div');
    parentContainer.id = 'main-plates-selection-container';
// const servedDaily = document.createElement('h2');
// servedDaily.innerHTML = 'Breakfast Served Daily'
const mainPlatesTitle = document.createElement('h1');
mainPlatesTitle.innerHTML = 'Main Plates Selection ( 7:00 - 16:00 )';

// append small bites selection menu items to parent container
// parentContainer.appendChild(servedDaily);
parentContainer.appendChild(mainPlatesTitle);
parentContainer.appendChild(loopMainPlatesMenuItems())


return parentContainer;
}






export {
    lunchHeading,
    smallBitesSelection,
    houseBurgersSelection,
    mainPlatesSelection
}