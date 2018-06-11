document.addEventListener('DOMContentLoaded', () => {


  const userInput = document.getElementById("new-list-title");
  const listForm = document.getElementById("create-list-form");



  const userList = [];


  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");
  // let listDiv2 = document.getElementById("lists");

  // console.log(listDiv2);
  listForm.addEventListener('submit', event => submitForm(event) );





  function submitTask(event) {
    event.preventDefault();
    const taskDesc = document.getElementById("new-task-description");
    const taskP = document.getElementById("new-task-priority");
    const selection = document.getElementById("parent-list");
    let selectedList = userList[selection.selectedIndex];
    const selectedElement = document.getElementById(`ul ${selectedList}`)

    let newLI = document.createElement('li');
    let newText = document.createElement('textNode');
    let newP = document.createElement('textNode');
    newText.innerText = `Task: ${taskDesc.value}`;
    newLI.appendChild(newText);
    let newBtn = document.createElement('button');
    newBtn.className = "delete-task";
    newBtn.innerText = "X";
    newBtn.dataset.listTitle = selectedList;
    newBtn.dataset.taskName = taskDesc;

    newLI.appendChild(newBtn);
    newLI.innerHTML += "<br>";

    newP.innerText = `Priority: ${taskP.value}`;
    newLI.appendChild(newP);

    selectedElement.appendChild(newLI);

    // debugger;
  }


function generateOptions(e) {
  return `
  <option value="${e}" selected="">
    ${e}
  </option>`
}


function submitForm(event) {
  userList.push(userInput.value);

  event.preventDefault();
  taskSubmit(event);
  listSubmit(event);

  const taskForm = document.getElementById("create-task-form");

  taskForm.addEventListener('submit', event =>submitTask(event) );


}

function taskSubmit(event) {

  let formHTML = `<form id="create-task-form">
          <label for="parent-list">Select List:</label>
          <select id="parent-list">

          ${userList.map(e => generateOptions(e))}

          </select>

          <label for="new-task-description">Task description:</label>
          <input required="" type="text" id="new-task-description" placeholder="description">

          <label for="new-task-priority">Priority level:</label>
          <input type="text" id="new-task-priority" placeholder="priority">
          <input type="submit" value="Create New Task">
        </form>`
        if (listDiv.children.length > 1 && listDiv.children[0].id === "create-task-form") {
          listDiv.removeChild(listDiv.firstElementChild);
        }
        listDiv.innerHTML = formHTML + listDiv.innerHTML;
}

// debugger;



  function listSubmit(event) {

    let listHtml = `
      <div id="lists">
      <div>
        <h2>${userInput.value}
          <button data-title="${userInput.value}" class="delete-list">
            X
          </button>
        </h2>
        <ul id= "ul ${userInput.value}">
        </ul>
      </div>
      </div>`
      ;
      // debugger;
      // listDiv2.innerTEXT = "sfsdfsdfdsfs"
      listDiv.innerHTML += listHtml;

  }

  // const app = new TaskLister();
});
