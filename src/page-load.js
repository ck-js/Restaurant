function restaurantName() {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
h1.innerHTML = 'Restaurant Name';

div.appendChild(h1)

    return div;
}


export default restaurantName;