// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach
  (ingredient => {
    const listOfEl = document.createElement("li")

    listOfEl.classList.add('item')
    
    listOfEl.textContent = ingredient
    console.log(listOfEl)

    const ingredientsCollection = document.querySelector('ul#ingredients')

    ingredientsCollection.appendChild(listOfEl)
  })

// const listOfEl = ingredients.forEach
//   (ingredient => {
// const list = document.createElement("li")
//     list.classList.add('item')
//     list.textContent = ingredient
//     console.log(list)
//   })

// const ingredientsCollection = document.querySelector('ul#ingredients')

// ingredientsCollection.appendChild(listOfEl)???

