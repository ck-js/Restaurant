// create object constructor 
function MenuItem() {

}


function breakfastHeading() {
    const h1Container = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Breakfast'

h1Container.append(h1)
return h1Container;

}
function bakedSelection() {
    const parentContainer = document.createElement('div');
    parentContainer.id = 'baked-selection-container';
const servedDaily = document.createElement('h2');
servedDaily.innerHTML = 'Breakfast Served Daily'
const bakedSelectionTitle = document.createElement('h1');
bakedSelectionTitle.innerHTML = 'Baked Selection ( 7:00 - 16:00 )';

const item1 = addMenuItem('CLASSIC SCONES (BAKED DAILY)',
'two warmed scones layered with fresh cream & homemade berry compote',
150);
const item2 = addMenuItem('CROISSANT (PLAIN)',
'add butter & homemade berry compote +40',
70 );
const item3 = addMenuItem(
'Dark Chocolate Croissant',
' Cocoa 60% dark chocolate ganache, hazelnut crumble',
120
);
const item4 = addMenuItem(
    'Almond Croissant',
    '// homemade almond créme, toasted flaked almonds',
    120
)





parentContainer.appendChild(servedDaily);
parentContainer.appendChild(bakedSelectionTitle);
parentContainer.appendChild(item1)
parentContainer.appendChild(item2)
parentContainer.appendChild(item3)
parentContainer.appendChild(item4)

return parentContainer;
}

function addMenuItem(title, description, price) {

    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item')
    const menuItemTitle = document.createElement('h4');
    const menuItemDescription = document.createElement('p');
    const menuItemPrice = document.createElement('p');
    menuItemTitle.innerHTML = title;
    menuItemDescription.innerHTML = description;
    menuItemPrice.innerHTML = price
    
    menuItemContainer.appendChild(menuItemTitle)
    menuItemContainer.appendChild(menuItemDescription)
    menuItemContainer.appendChild(menuItemPrice)

    return menuItemContainer;
}






export {breakfastHeading, bakedSelection }