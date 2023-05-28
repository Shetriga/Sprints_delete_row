const addTask = () => {
  const taskName = document.getElementById("task").value;
  if (!taskName) {
    alert("Task is empty, you should write something!");
    return;
  }

  var tbodyRef = document
    .getElementById("myTable")
    .getElementsByTagName("tbody")[0];

  // Insert a row at the end of table
  var newRow = tbodyRef.insertRow();

  // Insert a cell at the end of the row
  var newCell = newRow.insertCell();
  var newCell1 = newRow.insertCell();

  // Append a text node to the cell
  //   var newText = document.createTextNode(taskName);
  let newText = document.createTextNode(taskName);
  const createButton = document.createElement("button");
  createButton.innerHTML = "Delete";
  createButton.onclick = () => {
    // alert(createButton.closest("tr").rowIndex);
    document.getElementById('myTable').deleteRow(createButton.closest("tr").rowIndex);
  };
  newCell.appendChild(newText);
  newCell1.appendChild(createButton);

  document.getElementById('task').value = null;
};
