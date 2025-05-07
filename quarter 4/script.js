function generateTable() {
  // Clear previous table if exists
  document.getElementById('tableContainer').innerHTML = '';

  
  let start = parseInt(document.getElementById('startValue').value);
  let end = parseInt(document.getElementById('endValue').value);


  if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
    alert("Please enter numbers between 2 and 10, with start value less than or equal to end value.");
    return;
  }

  let table = document.createElement('table');
  let headerRow = table.insertRow();
  
  
  headerRow.insertCell().appendChild(document.createTextNode('×'));
  for (let i = start; i <= end; i++) {
    let cell = headerRow.insertCell();
    cell.appendChild(document.createTextNode(i));
  }

  
  for (let i = start; i <= end; i++) {
    let row = table.insertRow();
    let headerCell = row.insertCell();
    headerCell.appendChild(document.createTextNode(i));

    for (let j = start; j <= end; j++) {
      let cell = row.insertCell();
      cell.appendChild(document.createTextNode(i * j));
    }
  }

  // Append table to container
  document.getElementById('tableContainer').appendChild(table);
}