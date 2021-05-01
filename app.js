const formAddTodo = document.querySelector('.form-add-todo')
const ulInputGroup = document.querySelector('.todos-container')
const eraseItem = document.querySelector('.fa-times')
const formSearch = document.querySelector('.form-search input')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim();
  if(inputValue.length) {

    ulInputGroup.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue}</span>
    <i class="fas fa-times delete"></i>
    </li>
    `
    event.target.reset()
  }
})

ulInputGroup.addEventListener('click', event => {
   const clickedElement = event.target
  
   if(Array.from(clickedElement.classList).includes('delete')){
     clickedElement.parentElement.remove()
   }
})

formSearch.addEventListener('input', event => {
  const inputSearchValue = event.target.value.trim().toLowerCase()

  Array.from(ulInputGroup.children)
  .filter(task =>  !task.textContent.toLowerCase().includes(inputSearchValue))
  .forEach(task => {
    task.classList.remove('d-flex')
    task.classList.add('hidden')
  })
  Array.from(ulInputGroup.children)
  .filter(task =>  task.textContent.toLowerCase().includes(inputSearchValue))
  .forEach(task => {
    task.classList.remove('hidden')
    task.classList.add('d-flex')
  })
})