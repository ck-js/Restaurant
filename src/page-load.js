import CoffeeImg from './coffee.jpg'



function restaurantName() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
h1.innerHTML = 'Restaurant Name';

div.appendChild(h1)

    return div;
}
function restaurantImage() {
    const div = document.createElement('div');
div.classList.add('img-container')

    const img = new Image();
    img.src = CoffeeImg;
    img.alt = 'aerial view of 3 people holding 3 cups of coffee, a latte, a cappuccino and a iced americano in a circle formation';


div.appendChild(img)

    return div;
}




export {restaurantName, restaurantImage }; 