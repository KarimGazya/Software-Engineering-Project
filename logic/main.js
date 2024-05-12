function donateButtonClick() {
  console.log(2);
  const modalBackdrop = document.createElement("div");
  modalBackdrop.classList.add("modal-backdrop");

  const confirmationBox = document.createElement("div");
  confirmationBox.classList.add("confirmation-box");

  const transportationSelect = document.createElement("select");
  transportationSelect.classList.add("form-select", "mb-3", "w-100");
  transportationSelect.innerHTML = `
        <option value="truck">Truck</option>
        <option value="car">Car</option>
        <option value="motorcycle">Motorcycle</option>
    `;

  const pickupDateTimePicker = document.createElement("input");
  pickupDateTimePicker.classList.add("form-control", "mb-3", "w-100");
  pickupDateTimePicker.setAttribute("type", "datetime-local");

  const message = document.createElement("p");
  message.textContent = "Choose transportation type and pickup time slot:";
  message.classList.add("mb-3");

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Confirm";
  confirmButton.classList.add("confirm-btn", "btn", "btn-primary", "me-2");
  confirmButton.style.backgroundColor = "#3dcc97";
  confirmButton.addEventListener("click", () => {
    // Perform donation confirmation action
    const selectedTransportation = transportationSelect.value;
    const selectedPickupTime = pickupDateTimePicker.value;
    console.log("Transportation Type:", selectedTransportation);
    console.log("Pickup Time Slot:", selectedPickupTime);
    // Close confirmation pop-up and modal backdrop
    document.body.removeChild(modalBackdrop);
    document.body.removeChild(confirmationBox);
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("btn", "btn-danger");
  cancelButton.addEventListener("click", () => {
    // Close confirmation pop-up and modal backdrop
    document.body.removeChild(modalBackdrop);
    document.body.removeChild(confirmationBox);
  });

  buttonsContainer.appendChild(confirmButton);
  buttonsContainer.appendChild(cancelButton);

  confirmationBox.appendChild(message);
  confirmationBox.appendChild(transportationSelect);
  confirmationBox.appendChild(pickupDateTimePicker);
  confirmationBox.appendChild(buttonsContainer);

  document.body.appendChild(modalBackdrop);
  document.body.appendChild(confirmationBox);
}

function donorInfoBtn() {
  const modalBackdrop = document.createElement("div");
  modalBackdrop.classList.add("modal-backdrop");

  const confirmationBox = document.createElement("div");
  confirmationBox.classList.add("confirmation-box");

  const firstNameLabel = document.createElement("label");
  firstNameLabel.textContent = "First Name:";
  firstNameLabel.classList.add("mb-1");

  const firstNameValue = document.createElement("p");
  firstNameValue.textContent = "John";

  const lastNameLabel = document.createElement("label");
  lastNameLabel.textContent = "Last Name:";
  lastNameLabel.classList.add("mb-1");

  const lastNameValue = document.createElement("p");
  lastNameValue.textContent = "Doe";

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  emailLabel.classList.add("mb-1");

  const emailValue = document.createElement("p");
  emailValue.textContent = "john.doe@example.com";

  const phoneLabel = document.createElement("label");
  phoneLabel.textContent = "Phone Number:";
  phoneLabel.classList.add("mb-1");

  const phoneValue = document.createElement("p");
  phoneValue.textContent = "+1234567890";

  const message = document.createElement("p");
  message.textContent = "Donor Information:";

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Confirm";
  confirmButton.classList.add("confirm-btn", "btn", "btn-primary", "me-2");
  confirmButton.style.backgroundColor = "#3dcc97";
  confirmButton.addEventListener("click", () => {
    // Perform confirmation action or data submission
    console.log("Donor Information Confirmed");
    // Close modal
    document.body.removeChild(modalBackdrop);
    document.body.removeChild(confirmationBox);
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("btn", "btn-danger");
  cancelButton.addEventListener("click", () => {
    // Close modal
    document.body.removeChild(modalBackdrop);
    document.body.removeChild(confirmationBox);
  });

  buttonsContainer.appendChild(confirmButton);
  buttonsContainer.appendChild(cancelButton);

  confirmationBox.appendChild(message);
  confirmationBox.appendChild(firstNameLabel);
  confirmationBox.appendChild(firstNameValue);
  confirmationBox.appendChild(lastNameLabel);
  confirmationBox.appendChild(lastNameValue);
  confirmationBox.appendChild(emailLabel);
  confirmationBox.appendChild(emailValue);
  confirmationBox.appendChild(phoneLabel);
  confirmationBox.appendChild(phoneValue);
  confirmationBox.appendChild(buttonsContainer);

  document.body.appendChild(modalBackdrop);
  document.body.appendChild(confirmationBox);
}

function specifyDropOffBtn() {
  const modalBackdrop = document.createElement("div");
  modalBackdrop.classList.add("modal-backdrop");

  const confirmationBox = document.createElement("div");
  confirmationBox.classList.add("confirmation-box");

  const donationForm = document.createElement("form");
  donationForm.classList.add("mb-3");

  const dateTimeLabel = document.createElement("label");
  dateTimeLabel.textContent = "Drop-off Date and Time:";
  dateTimeLabel.classList.add("mb-2");

  const dateTimeInput = document.createElement("input");
  dateTimeInput.classList.add("form-control", "mt-1", "mb-3");
  dateTimeInput.setAttribute("type", "datetime-local");

  const message = document.createElement("p");
  message.textContent = "Please specify the drop-off date and time:";
  message.classList.add("mt-0", "mb-1");

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const confirmButton = document.createElement("button");
  confirmButton.textContent = "Confirm";
  confirmButton.classList.add("confirm-btn", "btn", "btn-primary", "me-2");
  confirmButton.style.backgroundColor = "#3dcc97";
  confirmButton.addEventListener("click", () => {
    // Perform confirmation action or data submission
    const dropOffDateTime = dateTimeInput.value;
    console.log("Drop-off Date and Time:", dropOffDateTime);
    // Close modal
    document.body.removeChild(modalBackdrop);
    document.body.removeChild(confirmationBox);
  });

  const cancelButton = document.createElement("button");
  cancelButton.textContent = "Cancel";
  cancelButton.classList.add("btn", "btn-danger");
  cancelButton.addEventListener("click", () => {
    // Close modal
    document.body.removeChild(modalBackdrop);
    document.body.removeChild(confirmationBox);
  });

  donationForm.appendChild(dateTimeLabel);
  donationForm.appendChild(dateTimeInput);
  confirmationBox.appendChild(message);
  confirmationBox.appendChild(donationForm);
  buttonsContainer.appendChild(confirmButton);
  buttonsContainer.appendChild(cancelButton);
  confirmationBox.appendChild(buttonsContainer);

  document.body.appendChild(modalBackdrop);
  document.body.appendChild(confirmationBox);

  function displayMessage(message, alertClass) {
    // Remove any existing message divs
    const existingMessages = document.querySelectorAll('.alert');
    existingMessages.forEach(messageDiv => {
        messageDiv.remove();
    });

    // Create and append the new message div
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("alert", alertClass);
    messageDiv.setAttribute("role", "alert");
    messageDiv.textContent = message;

    const form = document.getElementById("form-id");
    form.appendChild(messageDiv);
}
}


