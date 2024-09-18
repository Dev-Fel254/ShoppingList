const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");


btn.addEventListener("click", ()=> {
      const span = document.createElement("span");
      const listItem = document.createElement("li");
      const button = document.createElement("button");

      listItem.appendChild(span);
      listItem.appendChild(button);
      
      const inputValue = input.value;
      input.value = '';

      span.innerText = inputValue;
      button.innerText = 'Delete';

button.addEventListener("click", ()=>{
  listItem.remove();
})
      list.appendChild(listItem);
      console.log(inputValue);
      input.focus();
});

