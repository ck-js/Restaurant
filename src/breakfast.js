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
let bakedSelectionMenuItemsArray = [];

// function to create new menu item and add to array
function createBakedSelectionMenuItem(title, description, price,vegan) {
const item = new MenuItem(title,description,price,vegan);
bakedSelectionMenuItemsArray.push(item)
}

// create menu items for baked selection
createBakedSelectionMenuItem(
    'Classic Scones (Baked Daily',
    'Two warm scones layered with fresh cream and homeade berry compote',
    150,
    true
)

createBakedSelectionMenuItem(
    'CROISSANT (PLAIN)',
'add butter & homemade berry compote +40',
70,
true 
);
createBakedSelectionMenuItem(
'Dark Chocolate Croissant',
' Cocoa 60% dark chocolate ganache, hazelnut crumble',
120,
true
)
createBakedSelectionMenuItem(
'Almond Croissant',
'homemade almond créme, toasted flaked almonds',
    120,
    true
)


// create function to loop through menu items array and append to html elements
function loopMenuItems() {
    const menuItemContainer = document.createElement('div')   
    menuItemContainer.classList.add('menu-item-container')

for (let i = 0; i < bakedSelectionMenuItemsArray.length; i++) {
    const element = bakedSelectionMenuItemsArray[i];

    const menuItem = document.createElement('div')
    menuItem.classList.add('menu-item')

    const menuItemTitleContainer = document.createElement('div');
    menuItemTitleContainer.classList.add('title-container');
    const menuItemTitle = document.createElement('h4');
    const menuItemVeganIcon = document.createElement('img');
    const menuItemDescription = document.createElement('p');
    const menuItemPrice = document.createElement('p');
    menuItemPrice.classList.add('price')

    menuItemTitle.innerHTML = element.title;
menuItemVeganIcon.src = VeganIcon;
menuItemVeganIcon.alt = 'Vegan'
menuItemVeganIcon.width = 50;
menuItemVeganIcon.height = 50
    menuItemDescription.innerHTML =element.description;
    menuItemPrice.innerHTML = element.price;
    
    menuItem.append(menuItemTitleContainer)
    menuItemTitleContainer.appendChild(menuItemTitle)
    // check if vegan boolean value is true or false
    if (element.vegan) {
    menuItemTitleContainer.appendChild(menuItemVeganIcon);
    }
    menuItem.appendChild(menuItemDescription)
    menuItem.appendChild(menuItemPrice)
    
menuItemContainer.appendChild(menuItem)

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


return parentContainer;
}

// breakfast selection section

// array to store breakfast menu items
const breakfastMenuItemsArray = [];

// function to create new menu item and add to array
function createBreakfastMenuItem(title, description, price,vegan) {
    const item = new MenuItem(title,description,price,vegan);
    breakfastMenuItemsArray.push(item)
    }
createBreakfastMenuItem(
    'HOUSEMADE GRANOLA* - (500G BAGS AVAILABLE TO PURCHASE)',
    'plain full-fat yoghurt OR dairy-free coconut yoghurt, Ratel River raw honey drizzle (*contains dried fruits, nuts, and seeds)',
    220,
    true
)
createBreakfastMenuItem(
    'WARM OATS PORRIDGE',
    'rolled oats, chia seeds, granola sprinkle, salted butter, Ratel River raw honey drizzle (*contains milk)',
    140,
    true
)
createBreakfastMenuItem(
    'BUCKWHEAT & OAT FLAPJACKS',
    'banana, chunky peanut butter, coconut yoghurt, walnuts, toasted coconut flakes, golden syrup',
240,
true
)
createBreakfastMenuItem(
    'CROISSANT FRENCH TOAST',
    'homemade berry compote, fresh cream, Ratel River raw honey drizzle',
    230,
    true
)
createBreakfastMenuItem(
    'SMASHED AVOCADO TOAST',
    'two slices sourdough toast, tomato salsa, lemon wedge (optional extras available)',
    
190,
true
)
createBreakfastMenuItem(
    '…CREAMY BREAKFAST RISOTTO',
    'smoked streaky bacon bits, spring onion, two poached Usana Farm eggs, cheese crisps',
    290,
    false
)
createBreakfastMenuItem(
    'SHAKSHUKA',
    'homemade spiced tomato, onion and red bell pepper sauce, two poached Usana Farm eggs, crispy chickpeas, fresh coriander, Proof Bakery sourdough toast, salted butter',
    240,
    true
)
createBreakfastMenuItem(
    'CLASSIC BACON & EGGS',
    'smoked streaky bacon, two Usana Farm eggs, mushrooms, herbed cherry tomatoes, Proof Bakery sourdough toast, salted butter',
    250,
    false
)
createBreakfastMenuItem(
    'SMOKED TROUT EGGS BENEDICT',
    'Usana Farm poached eggs, Three Streams cold-smoked trout ribbons, fresh baby leaf spinach, capers, lemon wedge, homemade hollandaise, Proof Bakery sourdough toast',
    310,
    false
)
createBreakfastMenuItem(
    'BACON EGGS BENEDICT',
    'Usana Farm poached eggs, smoked streaky bacon, fresh baby leaf spinach, homemade hollandaise, Proof Bakery sourdough toast',
    270,
    false
)
createBreakfastMenuItem(
    'VEGAN BENEDICT',
    'avocado, button mushroom, herbed cherry tomato, fresh baby leaf spinach, cranberries, cashew & turmeric hollandaise, Proof Bakery sourdough toast',
    290,
    true
)
createBreakfastMenuItem(
    'OMELETTE (PLAIN)',
    'three Usana Farm pasture eggs',
    110,
    false
)

// create function to loop through menu items array and append to html elements
function loopedBreakfastMenuItems() {
    const menuItemContainer = document.createElement('div')   
    menuItemContainer.classList.add('menu-item')
for (let i = 0; i < breakfastMenuItemsArray.length; i++) {
    const element = breakfastMenuItemsArray[i];


    const menuItemTitleContainer = document.createElement('div');
    menuItemTitleContainer.classList.add('title-container');
    const menuItemTitle = document.createElement('h4');
    const menuItemVeganIcon = document.createElement('img');
    const menuItemDescription = document.createElement('p');
    const menuItemPrice = document.createElement('p');
menuItemPrice.classList.add('price')

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

function breakfastSelection() {
    
    const parentContainer = document.createElement('div');
    parentContainer.id = 'breakfast-selection-container';
const breakfastSelectionTitle = document.createElement('h1');
breakfastSelectionTitle.innerHTML = 'Breakfast Selection ( 7:00 - 11:30 )';

// append baked selection menu items to parent container

parentContainer.appendChild(breakfastSelectionTitle);
parentContainer.appendChild(loopedBreakfastMenuItems())


return parentContainer;
}






// optional omelette selection section

// array to store optional omelette menu items
const optionalOmeletteMenuItemsArray = [];

// function to create new menu item and add to array
function createOptionalOmeletteMenuItem(title, description, price,vegan) {
    const item = new MenuItem(title,description,price,vegan);
    optionalOmeletteMenuItemsArray.push(item)
    }

createOptionalOmeletteMenuItem(
    'Avocado',
    '',
    70
)
createOptionalOmeletteMenuItem(
    'Smoked Streaky Bacon',
    '',
    80
)
createOptionalOmeletteMenuItem(
    'Cold-Smoked Trout Ribons',
    '',
    110
)
createOptionalOmeletteMenuItem(
    'Grass-Fed Beef Boerewors Sausage',
    '',
    80
)
createOptionalOmeletteMenuItem(
    'FreeRange Chicken',
    '',
    80
)
createOptionalOmeletteMenuItem(
    'Goat Cheese',
    '',
    60
)
createOptionalOmeletteMenuItem(
    'Button Mushrooms',
    '',
    50
)
createOptionalOmeletteMenuItem(
    'Herbed Cherry Tomatoes',
    '',
    45
)
createOptionalOmeletteMenuItem(
    'Feta Cheese',
    '',
    45
)
createOptionalOmeletteMenuItem(
    'Sourdough SLice',
    '',
    20
)
createOptionalOmeletteMenuItem(
    'Buckwheat Slice',
    '',
    40
)





// create function to loop through menu items array and append to html elements
function loopedOmeletteMenuItems() {
const menuItemContainer1 = document.createElement('div')
menuItemContainer1.id = 'menu-item-container-1';


    const menuItemContainer = document.createElement('div')   
    menuItemContainer.classList.add('menu-item')
    
for (let i = 0; i < optionalOmeletteMenuItemsArray.length; i++) {
    const element = optionalOmeletteMenuItemsArray[i];


    const menuItemTitleContainer = document.createElement('div');
    menuItemTitleContainer.className = 'title-container';
    menuItemTitleContainer.id = i
    const titleContentWrapper = document.createElement('div');
    titleContentWrapper.classList.add('content-wrapper')

    const menuItemTitle = document.createElement('h4');
    const menuItemPrice = document.createElement('p');
menuItemPrice.classList.add('price')
    menuItemTitle.innerHTML = element.title;
    menuItemPrice.innerHTML = element.price;
    
    // menuItemContainer.append(menuItemTitleContainer)
menuItemContainer.appendChild(menuItemTitleContainer)
menuItemTitleContainer.appendChild(titleContentWrapper)
    titleContentWrapper.appendChild(menuItemTitle)
    titleContentWrapper.appendChild(menuItemPrice)
    
    menuItemContainer1.appendChild(menuItemContainer)
    
    
}
return menuItemContainer1;

}

function optionalOmeletteSelection() {
    
    const parentContainer = document.createElement('div');
    parentContainer.id = 'optional-omelette-selection-container';
const optionalOmeletteSelectionTitle = document.createElement('h1');
optionalOmeletteSelectionTitle.innerHTML = 'Optional Omelette Add Ons';

// append optional omelette selection menu items to parent container

parentContainer.appendChild(optionalOmeletteSelectionTitle);
parentContainer.appendChild(loopedOmeletteMenuItems())


return parentContainer;
}






export {breakfastHeading, bakedSelection, breakfastSelection,
    optionalOmeletteSelection 
}