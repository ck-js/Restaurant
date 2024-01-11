function breakfastHeading() {
    const h1Container = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Breakfast'

h1Container.append(h1)
return h1Container;

}



export {breakfastHeading }