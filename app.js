const formAddTodo = document.querySelector('.form-add-todo')
const ulInputGroup = document.querySelector('.todo-container')
const eraseItem = document.querySelector('.fa-times')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim();
  if(inputValue.length) {

    ulInputGroup.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue}</span>
    <i class="fas fa-times"></i>
    </li>
    `
    event.target.reset()
  }
})


ulInputGroup.addEventListener('click', event => {
  const clicked = event.target

  console.log(Array.from(clicked.classList).includes('delete'))

})