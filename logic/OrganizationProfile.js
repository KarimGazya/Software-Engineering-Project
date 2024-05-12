let profilePic = document.getElementById("profile-pic");
let inputPic = document.getElementById("input-pic");

let tempData = 
{
    "id": 1,
    "first_name": "Alice",
    "last_name": "Smith",
    "gender": "Female",
    "email": "alice.smith@example.com",
    "contact_number": "+1234567891",
    "password": "strongPassword456",
    "profile_image": "../image/user.jpg",
    "document_verification_organization": "../assets/certificate.pdf",
    "document_verification_teacher": "../assets/certificate.pdf",
    "organization_name": "FoodRecovery",
    "organization_type": "food donations",
}

inputPic.onchange = () => {
    profilePic.src = URL.createObjectURL(inputPic.files[0]);
    tempData.profile_image = profilePic.src
    localStorage.setItem('tempData', JSON.stringify(tempData));
};


// Function to handle Save button click event
function handleSaveButtonClick() {

    // Get form elements and update tempData attributes
    tempData.first_name = document.getElementById("first-name").value;
    tempData.last_name = document.getElementById("last-name").value;
    tempData.email = document.getElementById("email").value;
    tempData.contact_number = document.getElementById("phone-number").value;
    tempData.area = document.getElementById("area").value;
    tempData.governorate = document.getElementById("governorate").value;
    tempData.address = document.getElementById("address").value;

    const genderRadios = document.getElementsByName("gender");
    for (const radio of genderRadios) {
        if (radio.checked) {
            tempData.gender = radio.value;
            break;
        }
    }

    tempData.organization_name = document.getElementById("organization-name").value;
    tempData.organization_type = document.getElementById("organization-type").value;
    tempData.document_verification_organization = document.getElementById("document-pdf").src;

    localStorage.setItem('tempData', JSON.stringify(tempData));
}


function populateProfile() {
    let savedData = localStorage.getItem('tempData');
    if (savedData) {
        tempData = JSON.parse(savedData);
    }
    document.getElementById("profile-pic").src = tempData.profile_image;
    document.querySelector(".profile-title").innerText = tempData.organization_name;
    document.querySelector(".profile-email").innerText = tempData.email;
}


function updatePDF() {
    let documentPDF = document.getElementById("document-pdf");
    let inputDocument = document.getElementById("document-input");
    
    if (inputDocument && documentPDF) {
        if (inputDocument.files && inputDocument.files[0]) {
            let reader = new FileReader();
            reader.onload = function(e) {
                documentPDF.src = e.target.result;
            };
            reader.readAsDataURL(inputDocument.files[0]);
        }
    }
};

const menuLinks = document.querySelectorAll('.menu-link');

function handleMenuClick(event) {

    event.preventDefault();
    
    menuLinks.forEach(link => {
        link.classList.remove('selected');
    });

    this.classList.add('selected');
}

menuLinks.forEach(link => {
    link.addEventListener('click', handleMenuClick);
});

let accountBtn = document.getElementById("account-btn");
let passwordBtn = document.getElementById("password-btn");
let logOutBtn = document.getElementById("log-out-btn");

function getOrganizationHTML() {
    let savedData = localStorage.getItem('tempData');
    if (savedData) {
        tempData = JSON.parse(savedData);
    }

    return `
    <div class="account-header">
        <h1 class="account-title">Account Settings</h1>
        <div class="btn-container">
            <button class="btn-save" onclick="handleSaveButtonClick()">Save</button>
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>First Name</label>
            <input id="first-name" type="text" placeholder="First Name" value="${tempData.first_name}">
        </div>
        <div class="input-container">
            <label>Last Name</label>
            <input id="last-name" type="text" placeholder="Last Name" value="${tempData.last_name}">
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label>Email</label>
            <input id="email" type="email" placeholder="Email" value="${tempData.email}">
        </div>
        <div class="input-container">
            <label>Phone Number</label>
            <input id="phone-number" type="text" placeholder="Phone Number" value="${tempData.contact_number}">
        </div>
    </div>

    <div class="gender-container">
        <label for="gender">Gender:</label>
        <input class="gender-radio" type="radio" name="gender" value="Male" id="male" ${tempData.gender === "Male" ? "checked" : ""}>
        <label class="gender-label" for="male">Male</label>
        <input class="gender-radio" type="radio" name="gender" value="Female" id="female" ${tempData.gender === "Female" ? "checked" : ""}>
        <label class="gender-label" for="female">Female</label>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label for="organization-name">Organization Name</label>
            <input type="text" id="organization-name" placeholder="Organization Name" value="${tempData.organization_name}">
        </div>
        <div class="input-container">
            <label for="organization-type">Organization Type</label>
            <input type="text" id="organization-type" placeholder="Organization Type" value="${tempData.organization_type}">
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container" id="pdf-preview-container">
            <iframe id="document-pdf" src="${tempData.document_verification_organization}" width="100%" height="500px"></iframe>
        </div>           
    </div>
    <div class="account-edit">
        <div class="input-container">
            <label for="document-input">Organization Verification (PDF)</label>
            <input type="file" id="document-input" accept=".pdf" onchange="updatePDF()">
        </div>       
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label for="map-link">Specify Organization Location</label>
        </div>
        <div class="input-container">
            <a href="Map.html" id="map-link" class="clinic-link">View On Map</a>
        </div>
    </div>
`;
}

// Function to execute when the accountBtn is clicked or when the page is loaded
function reloadPage() {
    const section = localStorage.getItem("section")
    if (section === "password") {
        document.getElementById("form-id").innerHTML = getPasswordHTML();
    } 
    else {
        document.getElementById("form-id").innerHTML = getOrganizationHTML();
    }
}

// Execute the function when the accountBtn is clicked
accountBtn.onclick = () => {
    localStorage.setItem("section", "account");
    document.getElementById("form-id").innerHTML = getOrganizationHTML();
}
// Execute the function when the page is loaded
document.addEventListener("DOMContentLoaded", reloadPage);
document.addEventListener("DOMContentLoaded", populateProfile);


function getPasswordHTML(){
    return `
    <div id="change-password-section" class="account-header">
        <h1 class="account-title">Change Password</h1>
        <div class="btn-container" onclick="handleChangePasswordButtonClick()">
            <button type="button" class="btn-save">Save</button>
        </div>
    </div>

    <div class="account-edit">
        <div class="input-container">
            <label for="old-password">Old Password</label>
            <input type="password" id="old-password" placeholder="Old Password">
        </div>
    </div>

    <div class="account-edit" id="new-password-section">
        <div class="input-container">
            <label for="new-password">New Password</label>
            <input type="password" id="new-password" placeholder="New Password">
        </div>
        <div class="input-container">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm Password">
        </div>
    </div>
    `;
}

passwordBtn.onclick = () => {
    document.getElementById("form-id").innerHTML = getPasswordHTML();
    localStorage.setItem("section", "password");
}

function handleChangePasswordButtonClick() {

    let savedData = localStorage.getItem('tempData');
    if (savedData) {
        tempData = JSON.parse(savedData);
    }

    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    const storedPassword = tempData.password;

    if (oldPassword !== storedPassword) {
        displayMessage("Old password is incorrect.", "alert-danger");
        return;
    }

    if (newPassword !== confirmPassword) {
        displayMessage("New password and confirm password do not match.", "alert-danger");
        return;
    }

    tempData.password = newPassword;
    localStorage.setItem('tempData', JSON.stringify(tempData));

    displayMessage("Password successfully changed.", "alert-success");
}

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

logOutBtn.onclick = () => {
    
    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop');

    const confirmationBox = document.createElement('div');
    confirmationBox.classList.add('confirmation-box');

    const message = document.createElement('p');
    message.textContent = 'Are you sure you want to log out?';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const logoutButton = document.createElement('button');
    logoutButton.textContent = 'Logout';
    logoutButton.classList.add('logout-btn');
    logoutButton.addEventListener('click', () => {
        // Perform logout action
        localStorage.clear();
        console.log('Logout');
        // Close confirmation pop-up and modal backdrop
        document.body.removeChild(modalBackdrop);
        document.body.removeChild(confirmationBox);
    });

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.classList.add('cancel-btn');
    cancelButton.addEventListener('click', () => {
        // Close confirmation pop-up and modal backdrop
        document.body.removeChild(modalBackdrop);
        document.body.removeChild(confirmationBox);
    });
    
    buttonsContainer.appendChild(logoutButton);
    buttonsContainer.appendChild(cancelButton);
    confirmationBox.appendChild(message);
    confirmationBox.appendChild(buttonsContainer);

    document.body.appendChild(modalBackdrop);
    document.body.appendChild(confirmationBox);
};