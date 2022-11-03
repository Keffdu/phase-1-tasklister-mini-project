document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const userInput = document.querySelector("#new-task-description");
  const ul = document.querySelector("#tasks")
  


form.addEventListener("submit", (e) => {
  e.preventDefault()
  const li = document.createElement("li");
  const deleteBtn = document.createElement("button");
  li.textContent = userInput.value;
  deleteBtn.textContent = "x";
  ul.appendChild(li);
  li.appendChild(   deleteBtn);
  userInput.value = ""
  deleteBtn.addEventListener("click", (e) => {
    li.remove()
  })
})



});


