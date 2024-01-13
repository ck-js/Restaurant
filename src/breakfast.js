
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
this.vegan = false;
}
// create empty array to store menu item object instances
let menuItemsArray = [];

// function to create new menu item and add to array
function createMenuItemInstance(title, description, price,vegan) {
const item = new MenuItem(title,description,price,vegan);
menuItemsArray.push(item)
}
createMenuItemInstance('Chicken Tikka Pasta Salad', 'Screeamy', 200)
createMenuItemInstance('Greek Salad Salad', 'Crunchy', 200)


// create function to loop through menu items array and append to html elements
function loopMenuItems() {
    const menuItemContainer = document.createElement('div')   
    menuItemContainer.classList.add('menu-item')
for (let i = 0; i < menuItemsArray.length; i++) {
    const element = menuItemsArray[i];

    const menuItemTitle = document.createElement('h4');
    const menuItemDescription = document.createElement('p');
    const menuItemPrice = document.createElement('p');

    menuItemTitle.innerHTML = element.title;
    menuItemDescription.innerHTML =element.description;
    menuItemPrice.innerHTML = element.price;
    
    menuItemContainer.appendChild(menuItemTitle)
    menuItemContainer.appendChild(menuItemDescription)
    menuItemContainer.appendChild(menuItemPrice)
    
}
return menuItemContainer;


}


// function addMenuItem(title, description, price) {


//     menuItemContainer.classList.add('menu-item')
//     const menuItemTitle = document.createElement('h4');
//     const menuItemDescription = document.createElement('p');
//     const menuItemPrice = document.createElement('p');
//     menuItemTitle.innerHTML = burger.title;
//     menuItemDescription.innerHTML =burger.description;
//     menuItemPrice.innerHTML = price
    
//     menuItemContainer.appendChild(menuItemTitle)
//     menuItemContainer.appendChild(menuItemDescription)
//     menuItemContainer.appendChild(menuItemPrice)


    
//     return menuItemContainer;
// }



function bakedSelection() {
    console.log(menuItemsArray[0]);    
    console.log(menuItemsArray[1]);
    const parentContainer = document.createElement('div');
    parentContainer.id = 'baked-selection-container';
const servedDaily = document.createElement('h2');
servedDaily.innerHTML = 'Breakfast Served Daily'
const bakedSelectionTitle = document.createElement('h1');
bakedSelectionTitle.innerHTML = 'Baked Selection ( 7:00 - 16:00 )';






// const item2 = addMenuItem('CROISSANT (PLAIN)',
// 'add butter & homemade berry compote +40',
// 70 );
// const item3 = addMenuItem(
// 'Dark Chocolate Croissant',
// ' Cocoa 60% dark chocolate ganache, hazelnut crumble',
// 120
// );
// const item4 = addMenuItem(
//     'Almond Croissant',
//     '// homemade almond créme, toasted flaked almonds',
//     120
// )


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