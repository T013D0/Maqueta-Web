const table = document.getElementById("users");
const addRowButton = document.getElementById("addRowButton");

function pressAddRowButton() {
  const clickEvent = new Event("click");
  addRowButton.dispatchEvent(clickEvent);
}



addRowButton.addEventListener("click", () => {
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell();
  const cell2 = newRow.insertCell();
  const cell3 = newRow.insertCell();
  const cell4 = newRow.insertCell();
  const cell5 = newRow.insertCell();
  const cell6 = newRow.insertCell();

  cell1.textContent = table.rows.length;
  cell2.innerHTML = `<input type="text" name="name" required>`;
  cell3.innerHTML = `<input type="email" name="email" required>`;
  cell4.innerHTML = `<input type="text" name="role" required>`;
  cell5.innerHTML = `<input type="text" name="address" required>`;
  cell6.innerHTML = `<button class="save-btn btn">Save</button>
                     <button class="cancel-btn btn">Cancel</button>`;

  const saveButton = cell6.querySelector(".save-btn");
  const cancelButton = cell6.querySelector(".cancel-btn");

  saveButton.addEventListener("click", () => {
    const name = cell2.querySelector("input[name='name']").value;
    const email = cell3.querySelector("input[name='email']").value;
    const role = cell4.querySelector("input[name='role']").value;
    const address = cell5.querySelector("input[name='address']").value;

    cell2.textContent = name;
    cell3.textContent = email;
    cell4.textContent = role;
    cell5.textContent = address;

    cell6.innerHTML = "";

    // Add edit and delete buttons after saving
    const editButton = document.createElement("button");
    editButton.className = "edit-btn btn";
    editButton.textContent = "Edit";
    cell6.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn btn";
    deleteButton.textContent = "Delete";
    cell6.appendChild(deleteButton);

    // Add edit and delete functionality
    const editButtons = document.querySelectorAll(".edit-btn");
    editButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const row = button.parentElement.parentElement;
        const name = row.querySelector("td:nth-child(2)").textContent;
        const email = row.querySelector("td:nth-child(3)").textContent;
        const role = row.querySelector("td:nth-child(4)").textContent;
        const address = row.querySelector("td:nth-child(5)").textContent;

        row.innerHTML = `
          <td>${row.querySelector("td:first-child").textContent}</td>
          <td><input type="text" name="name" value="${name}" required></td>
          <td><input type="email" name="email" value="${email}" required></td>
          <td><input type="text" name="role" value="${role}" required></td>
          <td><input type="text" name="address" value="${address}" required></td>
          <td>
            <button class="save-btn btn">Save</button>
            <button class="cancel-btn btn">Cancel</button>
          </td>
        `;

        const saveButton = row.querySelector(".save-btn");
        const cancelButton = row.querySelector(".cancel-btn");

        saveButton.addEventListener("click", () => {
          const name = row.querySelector("input[name='name']").value;
          const email = row.querySelector("input[name='email']").value;
          const role = row.querySelector("input[name='role']").value;
          const address = row.querySelector("input[name='address']").value;

          row.innerHTML = `
            <td>${row.querySelector("td:first-child").textContent}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${role}</td>
            <td>${address}</td>
            <td>
              <button class="edit-btn btn">Edit</button>
              <button class="delete-btn btn">Delete</button>
            </td>
          `;

          saveButton.remove();
          cancelButton.remove();

        });

        cancelButton.addEventListener("click", () => {
          row.innerHTML = `
            <td>${row.querySelector("td:first-child").textContent}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${role}</td>
            <td>${address}</td>
            <td>
              <button class="edit-btn btn">Edit</button>
              <button class="delete-btn btn">Delete</button>
            </td>
          `;

          saveButton.remove();
          cancelButton.remove();
         

        });
      });
    });

    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const row = button.parentElement.parentElement;
        table.deleteRow(row.rowIndex);
        
      });
    });
  });

  cancelButton.addEventListener("click", () => {
    // Remove the newRow instead of using newRow.remove()
    const newRowIndex = newRow.rowIndex;
    table.deleteRow(newRowIndex);

  });


 

  // Add edit and delete functionality
  const editButtons = document.querySelectorAll(".edit-btn");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.parentElement.parentElement;
      const name = row.querySelector("td:nth-child(2)").textContent;
      const email = row.querySelector("td:nth-child(3)").textContent;
      const role = row.querySelector("td:nth-child(4)").textContent;
      const address = row.querySelector("td:nth-child(5)").textContent;

      row.innerHTML = `
        <td>${row.querySelector("td:first-child").textContent}</td>
        <td><input type="text" name="name" value="${name}" required></td>
        <td><input type="email" name="email" value="${email}" required></td>
        <td><input type="text" name="role" value="${role}" required></td>
        <td><input type="text" name="address" value="${address}" required></td>
        <td>
          <button class="save-btn btn">Save</button>
          <button class="cancel-btn btn">Cancel</button>
        </td>
      `;

      const saveButton = row.querySelector(".save-btn");
      const cancelButton = row.querySelector(".cancel-btn");

      saveButton.addEventListener("click", () => {
        const name = row.querySelector("input[name='name']").value;
        const email = row.querySelector("input[name='email']").value;
        const role = row.querySelector("input[name='role']").value;
        const address = row.querySelector("input[name='address']").value;

        row.innerHTML = `
          <td>${row.querySelector("td:first-child").textContent}</td>
          <td>${name}</td>
          <td>${email}</td>
          <td>${role}</td>
          <td>${address}</td>
          <td>
            <button class="edit-btn btn">Edit</button>
            <button class="delete-btn btn">Delete</button>
          </td>
        `;

        saveButton.remove();
        cancelButton.remove();
        
      });

      cancelButton.addEventListener("click", () => {
        row.innerHTML = `
          <td>${row.querySelector("td:first-child").textContent}</td>
          <td>${name}</td>
          <td>${email}</td>
          <td>${role}</td>
          <td>${address}</td>
          <td>
            <button class="edit-btn btn">Edit</button>
            <button class="delete-btn btn">Delete</button>
          </td>
        `;

        saveButton.remove();
        cancelButton.remove();
      });
    });
  });

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.parentElement.parentElement;
      table.deleteRow(row.rowIndex);
    });
  });
}
)
pressAddRowButton();;


