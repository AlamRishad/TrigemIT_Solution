document.addEventListener("DOMContentLoaded", function () {
  fetchContacts();
});

function fetchContacts() {
  const contactInfoDiv = document.getElementById("contactInfo");
  contactInfoDiv.innerHTML = "";

  fetch("https://localhost:7210/api/Contact/GetAllContact")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((contact) => {
        console.log(contact);
        const contactRow = document.createElement("div");
        contactRow.className = "grid-container";
        contactRow.innerHTML = `
      <span class="grid-item"> ${contact.id}</span>
      <span class="grid-item" id="name-${contact.id}"> ${contact.name}</span>
      <span class="grid-item" id="email-${contact.id}"> ${contact.email}</span>
      <span class="grid-item" id="message-${contact.id}"> ${
          contact.message
        }</span>
      <span class="grid-item">
        <button class="btn edit-btn" id="edit-${
          contact.id
        }" onclick='editContact(${contact.id}, ${JSON.stringify(
          contact.name
        )}, ${JSON.stringify(contact.email)}, ${JSON.stringify(
          contact.message
        )})'>📝</button>

        <button class = "delete-btn" onclick="deleteContact(${
          contact.id
        })">X</button>
      </span>
    `;
        contactInfoDiv.appendChild(contactRow);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      contactInfoDiv.innerHTML = "<p>Error loading contact data.</p>";
    });
}

function editContact(id, name, email, message) {
  console.log(`name-${name},${id},${email},${message},`);

  document.getElementById(
    `name-${id}`
  ).innerHTML = `<input type="text" id="edit-name-${id}" value="${name}">`;
  console.log(document.getElementById(`name-${id}`));
  document.getElementById(
    `email-${id}`
  ).innerHTML = `<input type="email" id="edit-email-${id}" value="${email}">`;
  console.log(document.getElementById(`email-${id}`));
  document.getElementById(
    `message-${id}`
  ).innerHTML = `<textarea id="edit-message-${id}">${message}</textarea>`;
  console.log(document.getElementById(`message-${id}`));
  document.getElementById(
    `edit-${id}`
  ).innerHTML = `<button class="confirm-btn" id="confirm-${id}" onclick="confirmEdit(${id}, '${name}', '${email}', '${message}')">✔</button>
`;
  console.log(document.getElementById(`edit-${id}`));
}

function confirmEdit(id, name, email, message) {
  console.log(id, message, email, name);

  const updatedName = document.getElementById(`edit-name-${id}`).value;
  const updatedEmail = document.getElementById(`edit-email-${id}`).value;
  const updatedMessage = document.getElementById(`edit-message-${id}`).value;
  const updatedContact = {
    name: updatedName,
    email: updatedEmail,
    message: updatedMessage,
  };
  fetch(`https://localhost:7210/api/Contact/UpdateContact/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedContact),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      alert("Update successfully!");
      console.log("Update successful", data);
      fetchContacts();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function deleteContact(contactId) {
  if (!confirm("Are you sure you want to delete this contact?")) {
    return;
  }

  fetch(`https://localhost:7210/api/Contact/DeleteContact/${contactId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong");
      }
    })
    .then((data) => {
      alert("Delete successfully!");
      console.log("Delete successful", data);
      fetchContacts();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
