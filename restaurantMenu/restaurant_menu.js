const breakfastMenu = ['Pancakes -$12','Eggs Benedict -$22.99','Oatmeal -$21.99','Fritata -$15'];
const mainCourseMenu = ['Steak -$10', 'Pasta -$20','Burger -$15', 'Salmon -$18'];
const dessertMenu = ['Cake -$2.99','Ice Cream -$10','Pudding -$7','Fruit Salad -$14'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p> Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;    

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) { 
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}<p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;
