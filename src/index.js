document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const taskText = event.target["new-task-description"].value

    const list = document.querySelector('#tasks')
    const newLi = document.createElement('li')
    newLi.textContent = taskText

    list.appendChild(newLi)
  })
});